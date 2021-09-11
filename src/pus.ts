import { also, Voidable } from "."
import { bind } from "./bind"
import { run } from "./effect"
import { EventHub, EventHubDef, EventHubFn, SimpleEvent } from "./event"
import { isSome } from "./maybe"
import { chain as seq_chain } from "./seq"

/** Make a Pus */
export function pus<T>(): Pus<T> {
    return Pus.new()
}

function PusBuildEventHub<T>() {
    return new EventHub({
        push: () => new SimpleEvent<[v: T]>(),
        err: () => new SimpleEvent<[e: unknown]>(),
        end: () => new SimpleEvent(),
        dispose: () => new SimpleEvent(),
    })
}

class DoGetType<T> {
    t = PusBuildEventHub<T>()
}

/** Pus Events */
export type PusEvents<T> = EventHubDef<DoGetType<T>['t']>

/** (Pus)Pushable, A event stream / reactor / observer 
 * @template T item type
 * @template S source type 
 */
export class Pus<T, S = T> implements Promise<void>, AsyncIterator<T>, AsyncIterable<T>, AsyncIterableIterator<T> {

    then<TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2> {
        return new Promise((res, rej) => {
            this.on('end', () => {
                res(onfulfilled?.()!)
            })
            if (onrejected) {
                this.on('err', (e) => {
                    rej(onrejected?.(e))
                })
            }
        })
    }

    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<void | TResult> {
        return new Promise(res => {
            this.on('err', (e) => {
                res(onrejected?.(e))
            })
        })
    }

    finally(onfinally?: (() => void) | null): Promise<void> {
        return new Promise(res => {
            this.on('end', () => {
                res(onfinally?.())
            })
            this.on('err', () => {
                res(onfinally?.())
            })
        })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    waitEnd(): Promise<void> {
        return this
    }

    waitNext(): Promise<T> {
        return new Promise((res, rej) => {
            this.on('push', v => res(v as T))
            this.on('err', e => rej(e))
        })
    }

    tryWaitNext(): Promise<Voidable<T>> {
        return new Promise((res, rej) => {
            this.on('push', v => res(v as T))
            this.on('end', () => res(void 0))
            this.on('dispose', () => res(void 0))
            this.on('err', e => rej(e))
        })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    next(): Promise<IteratorResult<T>> {
        return new Promise((res, rej) => {
            this.on('push', v => res({ done: false, value: v }))
            this.on('end', () => res({ done: true, value: void 0 }))
            this.on('dispose', () => res({ done: true, value: void 0 }))
            this.on('err', e => rej(e))
        })
    }

    [Symbol.asyncIterator]() {
        return this
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    private constructor(upstream?: Pus<any>, source?: Pus<S, any>) {
        this.#upstream = upstream
        this.#source = source ?? isSome(upstream) ? upstream!.#source : this as any
    }

    static new<T>() {
        return new Pus<T>()
    }

    [Symbol.toStringTag]: string

    #source: Pus<S>
    #upstream?: Pus<any>
    #downstream = new Map<Pus<any>, { receptor(p: Pus<any>, v: T): void }>()
    #disposed = false
    #ended = false
    #events = PusBuildEventHub<T>()

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    on<K extends keyof PusEvents<T>>(name: K, f: EventHubFn<PusEvents<T>, K>) {
        this.#events.on(name, f)
    }
    off<K extends keyof PusEvents<T>>(name: K, f: EventHubFn<PusEvents<T>, K>) {
        this.#events.off(name, f)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    #push(v: T): void {
        if (this.#ended || this.#disposed) return
        try {
            this.#events.emit('push', v)
            for (const [p, { receptor }] of this.#downstream) {
                receptor(p, v)
            }
        } catch (e) {
            this.#err(e)
        }
    }
    #on<D, DS>(p: Pus<D, DS>, receptor: (p: Pus<D, DS>, v: T) => void): Pus<D, DS> {
        this.#check()
        this.#downstream.set(p, { receptor })
        return p
    }
    #off(p: Pus<any>): void {
        if (this.#ended || this.#disposed) return
        this.#downstream?.delete(p)
    }

    #end(): void {
        if (this.#ended) return
        this.#ended = true
        const downstream = this.#downstream
        if (downstream.size > 0) {
            for (const p of downstream.keys()) {
                if (!p.#ended) p.#end()
            }
        }
        this.#events.emit('end')
        this.dispose()
    }

    #err(e: unknown) {
        let err_count
        const events = this.#events
        events.emit('err', e)
        err_count = events.count('err')
        const upstream = this.#upstream
        if (isSome(upstream)) {
            const events = upstream.#events
            events.emit('err', e)
            err_count += events.count('err')
        }
        if (err_count > 0) throw e
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    #check() {
        if (this.#ended) throw 'This Pus has ended'
        if (this.#disposed) throw 'This Pus has been disposed'
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    raw_push(v: S) {
        this.#source.#push(v)
    }

    @bind
    push(v: S) {
        this.raw_push(v)
    }

    @bind
    emit(v: S) {
        this.raw_push(v)
    }

    @bind
    handleEvent(v: S) {
        this.raw_push(v)
    }

    raw_end() {
        this.#source.end()
    }

    @bind
    end() {
        this.raw_end()
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    self(): Pus<T, T> {
        return also(this.#on(new Pus(this, this), (p, v) => p.#push(v)), p => {
            p.on('dispose', () => this.dispose())
        })
    }

    dispose() {
        if (this.#disposed) return
        this.#disposed = true
        this.#events.emit('dispose')
        const upstream = this.#upstream
        if (isSome(upstream)) upstream.#off(this)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    chain(p: Pus<T, any>, ...ps: Pus<T, any>[]): Pus<T, S>

    chain(...ps: Pus<T, any>[]): Pus<T, S> {
        const d = new Pus<T, S>(void 0, this.#source)
        run(async () => {
            for (const p of seq_chain([this], ps)) {
                let stop: (v: typeof stop) => void
                const push = (v: T) => d.#push(v)
                const dispose = () => {
                    p.off('push', push)
                    stop?.(stop)
                }
                p.on('push', push)
                d.on('dispose', dispose)
                const r = await Promise.race([p, new Promise<typeof stop>(res => stop = res)])
                if (r === stop!) return
                d.off('dispose', dispose)
            }
        })
        return d
    }

    map<R>(f: (val: T, index: number) => R): Pus<R, S> {
        let index = 0
        return this.#on(new Pus(this), (p, v) => {
            p.#push(f(v, index++))
        })
    }

    mapWait<R>(f: (val: T, index: number) => PromiseLike<R>): Pus<R, S> {
        let index = 0
        return this.#on(new Pus(this), async (p, v) => {
            p.#push(await f(v, index++))
        })
    }

    fill<R>(v: R): Pus<R, S> {
        return this.#on(new Pus(this), (p, _v) => {
            p.#push(v)
        })
    }

    forEach(f: (val: T, index: number) => void): Pus<void, S> {
        let index = 0
        return this.#on(new Pus(this), (_p, v) => {
            f(v, index++)
        })
    }

    filter<R extends T>(f: (val: T, index: number) => val is R): Pus<R, S>
    filter(f: (val: T, index: number) => boolean): Pus<T, S>
    filter(f: (val: T, index: number) => boolean): Pus<T, S> {
        let index = 0
        return this.#on(new Pus(this), (p, v) => {
            if (f(v, index++)) p.#push(v)
        })
    }

    enumerate(): Pus<[T, number], S> {
        let index = 0
        return this.#on(new Pus(this), (p, v) => {
            p.#push([v, index++])
        })
    }

    skip(n: number): Pus<T, S> {
        let index = 0
        return this.#on(new Pus(this), (p, v) => {
            if (index++ >= n) p.#push(v)
        })
    }

    take(n: number): Pus<T, S> {
        let index = 0
        return this.#on(new Pus(this), (p, v) => {
            p.#push(v)
            if (index++ + 1 >= n) {
                p.#end()
                this.#off(p)
            }
        })
    }

    slice(from: number, to: number): Pus<T, S> {
        let index = 0
        return this.#on(new Pus(this), (p, v) => {
            if (index >= from) p.#push(v)
            if (index++ + 1 >= to) {
                p.#end()
                this.#off(p)
            }
        })
    }

    sub(from: number, count: number) {
        return this.slice(from, count + from)
    }

    scan<R>(init: R, f: (acc: R, val: T, index: number) => R): Pus<R, S> {
        let acc = init
        let index = 0
        return this.#on(new Pus(this), (p, v) => {
            p.#push(acc = f(acc, v, index++))
        })
    }

    scanWait<R>(init: R | PromiseLike<R>, f: (acc: R | PromiseLike<R>, val: T, index: number) => R): Pus<R, S> {
        let acc = init
        let index = 0
        return this.#on(new Pus(this), async (p, v) => {
            p.#push(acc = await f(await acc, v, index++))
        })
    }

    flatMap<R>(f: (val: T, index: number) => Pus<R>): Pus<R, S> {
        let index = 0
        let end_need = 1
        let end_count = 0
        const d = new Pus<R, S>(void 0, this.#source)
        const do_end = () => {
            end_count++
            if (end_count >= end_need) {
                d.off('dispose', dispose)
                d.#end()
            }
        }
        const dispose = () => {
            this.off('end', do_end)
        }
        this.on('end', do_end)
        d.on('dispose', dispose)
        return this.#on(d, async (d, v) => {
            const p = f(v, index++)
            end_need++
            const push = (v: R) => d.#push(v)
            const end = () => {
                d.off('err', err)
                d.off('dispose', dispose)
                do_end()
            }
            const err = (e: unknown) => {
                p.#err(e)
                this.#err(e)
            }
            const dispose = () => {
                p.off('push', push)
                p.off('end', end)
            }
            p.on('push', push)
            p.on('end', end)
            d.on('err', err)
            d.on('dispose', dispose)
        })
    }
}

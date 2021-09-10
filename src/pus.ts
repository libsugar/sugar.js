import { run } from "./effect"
import { EventHub, EventHubDef, EventHubFn, SimpleEvent } from "./event"
import { isSome } from "./maybe"
import { Seq } from "./seq"

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

export type PusEvents<T> = EventHubDef<DoGetType<T>['t']>

export class Pus<T> implements Promise<void> {

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

    waitNext(): Promise<T> {
        return new Promise((res, rej) => {
            this.on('push', v => res(v as T))
            this.on('err', e => rej(e))
        })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor(upstream?: Pus<any>) {
        this.#upstream = upstream
    }

    [Symbol.toStringTag]: string

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

    push(v: T): void {
        if (this.#ended || this.#disposed) return
        try {
            this.#events.emit('push', v)
            for (const [p, { receptor }] of this.#downstream) {
                receptor(p, v)
            }
        } catch (e) {
            this.#events.emit('err', e)
        }
    }
    #on<D>(p: Pus<D>, receptor: (p: Pus<D>, v: T) => void): Pus<D> {
        this.#check()
        this.#downstream.set(p, { receptor })
        return p
    }
    #off(p: Pus<any>): void {
        if (this.#ended || this.#disposed) return
        this.#downstream?.delete(p)
    }

    end(): void {
        if (this.#ended) return
        this.#ended = true
        const downstream = this.#downstream
        if (downstream.size > 0) {
            for (const p of downstream.keys()) {
                if (!p.#ended) p.end()
            }
        }
        this.#events.emit('end')
        this.dispose()
    }

    dispose() {
        if (this.#disposed) return
        this.#disposed = true
        this.#events.emit('dispose')
        const upstream = this.#upstream
        if (isSome(upstream)) upstream.#off(this)
    }

    #check() {
        if (this.#ended) throw 'This Pus has ended'
        if (this.#disposed) throw 'This Pus has been disposed'
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    chain(p: Pus<T>, ...ps: Pus<T>[]): Pus<T>

    chain(...ps: Pus<T>[]): Pus<T> {
        const d = new Pus<T>()
        // run(async () => {
        //     for (const p of Seq.of<Pus<T>>(this).chain(ps)) {
        //         let k = new Pus
        //         p.#on(k, (_, v) => {
        //             d.push(v)
        //         })
        //         await p
        //     }
        // })
        //TODO
        return d
    }

    map<R>(f: (v: T, index: number) => R): Pus<R> {
        let index = 0
        return this.#on(new Pus<R>(this), (p, v) => {
            p.push(f(v, index++))
        })
    }

    mapWait<R>(f: (v: T, index: number) => PromiseLike<R>): Pus<R> {
        let index = 0
        return this.#on(new Pus<R>(this), async (p, v) => {
            p.push(await f(v, index++))
        })
    }

    fill<R>(v: R): Pus<R> {
        return this.#on(new Pus<R>(this), (p, _v) => {
            p.push(v)
        })
    }

    forEach(f: (v: T, index: number) => void) {
        let index = 0
        return this.#on(new Pus<void>(this), (_p, v) => {
            f(v, index++)
        })
    }

}


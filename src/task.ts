import { TEvent } from "./event"
import { isNone, Voidable } from "./maybe"

export interface CancelToken {
    cancelled: boolean
    cancel(): void
    guard(): void

    reg(f: () => any): void
    unReg(f: () => any): void
}

export class CancelGuard {
    #source: CancelToken
    private constructor(source: CancelToken) {
        this.#source = source
    }

    is(source: CancelToken) {
        return source === this.#source
    }

    static new(source: CancelToken) {
        return new CancelGuard(source)
    }
}

class CancelSource implements CancelToken {
    #cancelled = false
    #reg?: TEvent

    get cancelled() {
        return this.#cancelled
    }
    cancel() {
        if (!this.#cancelled) {
            this.#reg?.emit()
        }
        this.#cancelled = true
    }
    guard() {
        if (this.#cancelled) throw CancelGuard.new(this)
    }

    reg(f: () => any) {
        if (isNone(this.#reg)) this.#reg = new TEvent
        this.#reg.once(f)
    }
    unReg(f: () => any) {
        this.#reg?.off(f)
    }
}

export function syncCancelable<R>(f: (ctx: CancelToken) => R): R | void {
    const token = new CancelSource
    try {
        return f(token)
    } catch (e) {
        if (e instanceof CancelGuard && e.is(token)) return
        throw e
    }
}
export async function cancelable<R>(f: (ctx: CancelToken) => Promise<R>): Promise<R | void> {
    const token = new CancelSource
    try {
        return await f(token)
    } catch (e) {
        if (e instanceof CancelGuard && e.is(token)) return
        throw e
    }
}

export interface TaskLike<T> extends CancelToken, PromiseLike<T | void> {
    run(): PromiseLike<T | void>
    running: boolean
    finished: boolean
}

export class Task<T> implements TaskLike<T>, Promise<T | void> {
    #p: Promise<T | void>

    #cancelled = false
    #finished = false

    #reg?: TEvent

    constructor(token: CancelToken, f: (self: Task<T>) => PromiseLike<T>)
    constructor(f: (self: Task<T>) => PromiseLike<T>)
    constructor(a: any, b?: any) {
        if (typeof b === 'function') [a, b] = [b, a]
        const token: Voidable<CancelToken> = b, f: (self: Task<T>) => PromiseLike<T> = a
        token?.reg(() => this.cancel())
        this.#p = (async () => {
            try {
                return await f(this)
            } catch (e) {
                if (e instanceof CancelGuard && e.is(this)) return
                throw e
            } finally {
                this.#finished = true
            }
        })()
    }

    cancel() {
        if (!this.#cancelled) {
            this.#cancelled = true
            this.#reg?.emit()
        }
    }

    guard() {
        if (this.#cancelled) throw CancelGuard.new(this)
    }

    reg(f: () => any) {
        if (isNone(this.#reg)) this.#reg = new TEvent
        this.#reg.once(f)
    }
    unReg(f: () => any) {
        this.#reg?.off(f)
    }

    get cancelled() {
        return this.#cancelled
    }

    get finished() {
        return this.#finished
    }

    get running() {
        return !this.#cancelled && !this.#finished
    }

    run(): Promise<T | void> {
        return this.#p
    }

    then<TResult1 = T | void, TResult2 = never>(onfulfilled?: ((value: T | void) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2> {
        return this.#p.then(onfulfilled, onrejected)
    }
    async catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult | void> {
        return this.#p.catch(onrejected)
    }
    [Symbol.toStringTag]: string
    finally(onfinally?: (() => void) | null): Promise<T | void> {
        return this.#p.finally(onfinally)
    }

    static run<T>(token: CancelToken, f: (self: Task<T>) => PromiseLike<T>): Task<T>
    static run<T>(f: (self: Task<T>) => PromiseLike<T>): Task<T>
    static run<T>(a: any, b?: any): Task<T> {
        return new Task<T>(a, b)
    }

    static exec<T>(token: CancelToken, executor: (self: Task<T>, resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Task<T>
    static exec<T>(executor: (self: Task<T>, resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Task<T>
    static exec<T>(a: any, b?: any): Task<T> {
        if (typeof b === 'function')
            return new Task(a, self => new Promise((res, rej) => b(self, res, rej)))
        return new Task(self => new Promise((res, rej) => a(self, res, rej)))
    }

    static delay(token: CancelToken, ms: number): Task<void>
    static delay(ms: number): Task<void>
    static delay(a: any, b?: number): Task<void> {
        if (typeof b === 'number')
            return Task.exec(a, (self, res) => {
                const id = setTimeout(() => res(), b);
                self.reg(() => clearTimeout(id))
            })
        return Task.exec((self, res) => {
            const id = setTimeout(() => res(), a);
            self.reg(() => clearTimeout(id))
        })
    }
}
Task.prototype[Symbol.toStringTag] = 'Task'


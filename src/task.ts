import { TypedEvent } from "./event"
import { abort } from "./fn"
import { isNone, Voidable } from "./maybe"

/** Cancellation Token */
export interface CancelToken {
    /** Has it been cancelled or whether cancellation has been requested */
    readonly cancelled: boolean
    /** Communicates a request for cancellation */
    cancel(): void
    /** If cancelled, throw `CancelGuard` */
    guard(): void

    /** Register an event that will be triggered when cancelled */
    reg(f: () => void): void
    /** Waiting for cancellation */
    reg(): Promise<void>
    /** Unregister event */
    unReg(f: () => void): void
}

/** Cancel Guard */
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

/** Cancellation provider */
class CancelSource implements CancelToken {
    #cancelled = false
    #reg?: TypedEvent

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

    reg(): Promise<void>
    reg(f: () => any): void
    reg(f?: () => any) {
        if (isNone(f)) return new Promise<void>(res => this.reg(() => res()))
        if (isNone(this.#reg)) this.#reg = new TypedEvent
        this.#reg.once(f)
    }
    unReg(f: () => any) {
        this.#reg?.off(f)
    }
}

/** Sync cancelable */
export function syncCancelable<R>(f: (ctx: CancelToken) => R): R | void {
    const token = new CancelSource
    try {
        return f(token)
    } catch (e) {
        if (e instanceof CancelGuard && e.is(token)) return
        throw e
    }
}
/** Async cancelable */
export async function cancelable<R>(f: (ctx: CancelToken) => Promise<R>): Promise<R | void> {
    const token = new CancelSource
    try {
        return await f(token)
    } catch (e) {
        if (e instanceof CancelGuard && e.is(token)) return
        throw e
    }
}

/** Task Like */
export interface TaskLike<T> extends CancelToken, PromiseLike<T | void> {
    /** Run task */
    run(): PromiseLike<T | void>
    /** Is running */
    running: boolean
    /** Whether finished */
    finished: boolean
}

const TaskNoInit = Symbol('TaskNoInit')

/** Cancelable async task */
export class Task<T> implements TaskLike<T>, Promise<T | void> {
    // @ts-ignore
    #p: Promise<T | void> 

    #cancelled = false
    #finished = false

    #reg?: TypedEvent

    /** Creates a new Task */
    constructor(f: (self: Task<T>) => PromiseLike<T>)
    /** Creates a new Task with CancelToken */
    constructor(token: CancelToken, f: (self: Task<T>) => PromiseLike<T>)
    constructor(a: any, b?: any) {
        if (a === TaskNoInit) return
        if (typeof b === 'function') [a, b] = [b, a]
        const token: Voidable<CancelToken> = b, f: (self: Task<T>) => PromiseLike<T> = a
        if (token?.cancelled === true) return Task.abort() 
        const cancel = () => this.cancel()
        token?.reg(cancel)
        this.#p = (async () => {
            try {
                return await f(this)
            } catch (e) {
                if (e instanceof CancelGuard && e.is(this)) return
                throw e
            } finally {
                this.#finished = true
                token?.unReg(cancel)
            }
        })()
    }

    /** Communicates a request for cancellation */
    cancel() {
        if (!this.#cancelled) {
            this.#cancelled = true
            this.#reg?.emit()
        }
    }

    /** If cancelled, throw CancelGuard */
    guard() {
        if (this.#cancelled) throw CancelGuard.new(this)
    }
    /** If cancelled will not continue */
    aguard(): Promise<void> {
        if (this.#cancelled) return abort()
        else return Promise.resolve()
    }

    /** Register an event that will be triggered when cancelled */
    reg(f: () => any): void
    /** Waiting for cancellation */
    reg(): Promise<void>
    reg(f?: () => any) {
        if (isNone(f)) return new Promise<void>(res => this.reg(() => res()))
        if (isNone(this.#reg)) this.#reg = new TypedEvent
        this.#reg.once(f)
    }
    /** Unregister event */
    unReg(f: () => any) {
        this.#reg?.off(f)
    }

    /** Has it been cancelled or whether cancellation has been requested */
    get cancelled() {
        return this.#cancelled
    }

    /** Whether finished */
    get finished() {
        return this.#finished
    }

    /** Is running */
    get running() {
        return !this.#cancelled && !this.#finished
    }

    /** Run task  
     * 
     * Even if this function is not called the task will still run
    */
    run(): Promise<T | void> {
        return this.#p
    }

    /** Attaches callbacks for the resolution and/or rejection of the Promise. */
    then<TResult1 = T | void, TResult2 = never>(onfulfilled?: ((value: T | void) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2> {
        return this.#p.then(onfulfilled, onrejected)
    }
    /** Attaches a callback for only the rejection of the Promise. */
    async catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult | void> {
        return this.#p.catch(onrejected)
    }
    [Symbol.toStringTag]: string
    /** Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback. */
    finally(onfinally?: (() => void) | null): Promise<T | void> {
        return this.#p.finally(onfinally)
    }

    /** Run Task */
    static run<T>(f: (self: Task<T>) => PromiseLike<T>): Task<T>
    /** Run Task with CancelToken */
    static run<T>(token: CancelToken, f: (self: Task<T>) => PromiseLike<T>): Task<T>
    static run<T>(a: any, b?: any): Task<T> {
        return new Task<T>(a, b)
    }

    /** Run task with promise parameters 
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
    */
    static exec<T>(executor: (self: Task<T>, resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Task<T>
    /** Run task with promise parameters with CancelToken 
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
    */
    static exec<T>(token: CancelToken, executor: (self: Task<T>, resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Task<T>
    static exec<T>(a: any, b?: any): Task<T> {
        if (typeof b === 'function') {
            if (a?.cancelled === true) return Task.abort()
            return new Task(a, self => new Promise((res, rej) => b(self, res, rej)))
        }
        return new Task(self => new Promise((res, rej) => a(self, res, rej)))
    }

    /** Cancelable async delay */
    static delay(ms?: number): Task<void>
    /** Cancelable async delay with CancelToken */
    static delay(token: CancelToken, ms?: number): Task<void>
    static delay(a?: any, b?: number): Task<void> {
        if (typeof b === 'number') { 
            if (a?.cancelled === true) return Task.abort()
            return Task.exec(a, (self, res) => {
                const f = () => clearTimeout(id)
                const id = setTimeout(() => {
                    self.unReg(f)
                    res()
                }, b);
                self.reg(f)
            })
        }  
        return Task.exec((self, res) => {
            const f = () => clearTimeout(id)
            const id = setTimeout(() => {
                self.unReg(f)
                res()
            }, a);
            self.reg(f)
        })
    }

    /** Yield time slice and not continue if cancelled */
    static yield(token?: CancelToken): Task<void> {
        if (isNone(token)) return Task.exec((self, res) => {
            queueMicrotask(() => {
                if (!self.#cancelled) res()
            })
        })
        if (token.cancelled) return Task.abort()
        return Task.exec(token, (self, res) => {
            queueMicrotask(() => {
                if (!(self.#cancelled || token.cancelled)) res()
            })
        })
    }

    /** Yield time slice and not continue if cancelled, using this as CancelToken */
    yield(): Task<void> {
        return Task.yield(this)
    }

    /** Cancelable async delay, using this as CancelToken */
    delay(ms?: number): Task<void> {
        return Task.delay(this, ms)
    }

    /** Run Task, using this as CancelToken */
    subRun<T>(f: (self: Task<T>) => PromiseLike<T>): Task<T> {
        return Task.run(this, f)
    }

    /** Run task with promise parameters, using this as CancelToken
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
    */
    exec<T>(executor: (self: Task<T>, resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Task<T> {
       return Task.exec(this, executor)
    }

    /** Creates a new cancelled task
     * @returns A cancelled task */
    static abort(): Task<never> {
        const task = new Task<never>(TaskNoInit as any)
        task.#p = abort()
        task.#cancelled = true
        return task
    }

    /**
     * Creates a new resolved task.
     * @returns A resolved task.
     */
    static resolve(): Task<void>
    /**
     * Creates a new resolved task for the provided value.
     * @param value A task.
     * @returns A task whose internal state matches the provided task.
     */
    static resolve<T>(value: T | PromiseLike<T>): Task<T>
    static resolve<T>(value?: T | PromiseLike<T>): Task<T>{
        const task = new Task<T>(TaskNoInit as any)
        task.#p = Promise.resolve(value!)
        task.#finished = true
        return task
    }

    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    static reject<T = never>(reason?: any): Task<T> {
        const task = new Task<T>(TaskNoInit as any)
        task.#p = Promise.reject(reason)
        task.#finished = true
        return task
    }

    /** Wait or cancel all task */
    static all<T extends any[]>(token: CancelToken, ...args: T): Task<{ [K in keyof T]: T[K] extends PromiseLike<infer V> ? V : T[K] }> {
        return Task.exec<any>(token, (self, res) => {
            const fs: (() => void)[] = [];
            (async () => {
                try {
                    await Promise.all(args.map(v => {
                        if ('cancel' in v) {
                            const f = () => v.cancel()
                            fs.push(f)
                            self.reg(f)
                        }
                        return v
                    })).then(res)
                } catch (e) {
                    for (const f of fs) {
                        f()
                    }
                    throw e
                } finally {
                    for (const f of fs) {
                        self.unReg(f)
                    }
                }
            })()
        })
    }
    /** Wait or cancel all task */
    all<T extends any[]>(...args: T): Task<{ [K in keyof T]: T[K] extends PromiseLike<infer V> ? V : T[K] }> {
        return Task.all(this, ...args)
    }

    /** Wait one and cancel other task */
    static race<T>(token: CancelToken, ...args: T[]): Task<T extends PromiseLike<infer U> ? U : T> {
        return Task.exec<any>(token, (self, res) => {
            const fs: (() => void)[] = [];
            (async () => {
                try {
                    await Promise.race(args.map(v => {
                        if ('cancel' in v) {
                            const f = () => (v as any).cancel()
                            fs.push(f)
                            self.reg()
                        }
                        return v
                    })).then(res)
                } finally {
                    for (const f of fs) {
                        f()
                        self.unReg(f)
                    }
                }
            })()
        })
    }
    /** Wait one and cancel other task */
    race<T>(...args: T[]): Task<T extends PromiseLike<infer U> ? U : T> {
        return Task.race(this, ...args)
    }

    static async scope<T extends TaskLike<any>>(token: CancelToken, promise: T): Promise<T extends PromiseLike<infer R> ? R : T>
    static async scope<T extends PromiseLike<any>>(token: CancelToken, promise: T): Promise<T extends PromiseLike<infer R> ? R : T>
    static async scope<T>(token: CancelToken, promise: T): Promise<T extends PromiseLike<infer R> ? R : T>
    static async scope<T>(token: CancelToken, promise: T): Promise<T extends PromiseLike<infer R> ? R : T> {
        let f: (() => void) | undefined
        if ('cancel' in promise) {
            f = () => (promise as any).cancel()
            token.reg(f)
        }
        try {
            return await (promise as any)
        } finally {
            if (f != null) token.unReg(f)
        }
    }
    scope<T extends TaskLike<any>>(promise: T): Promise<T extends PromiseLike<infer R> ? R : T>
    scope<T extends PromiseLike<any>>(promise: T): Promise<T extends PromiseLike<infer R> ? R : T>
    scope<T>(promise: T): Promise<T extends PromiseLike<infer R> ? R : T>
    scope<T>(promise: T): Promise<T extends PromiseLike<infer R> ? R : T> {
        return Task.scope(this, promise)
    }
}
Task.prototype[Symbol.toStringTag] = 'Task'

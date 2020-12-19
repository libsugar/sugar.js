import { TEvent } from "./event";
import { lazy, Lazy } from "./lazy";
import { isNone, isSome } from "./maybe";

export interface TaskLike<T> extends PromiseLike<T> {
    cancel(): void
    cancelled: boolean
    run(): PromiseLike<T>
    running: boolean
    finished: boolean
}

export type TaskOptions = {
    delay: boolean
}

export class TaskGuard {
    #task: TaskLike<any>
    constructor(task: TaskLike<any>) {
        this.#task = task
    }

    is(task: TaskLike<any>) {
        return task === this.#task
    }
}

export class Task<T> implements TaskLike<T>, Promise<T> {

    #fn: Lazy<Promise<T>>

    #is_cancel = false
    #is_finish = false

    #event?: {
        run?: TEvent
        cancel?: TEvent
        finish?: TEvent
    }

    constructor(fn: (self: Task<T>) => PromiseLike<T>, options: TaskOptions) {
        this.#fn = lazy(async () => {
            try {
                const res = await fn(this)
                return res
            } catch (e) {
                if (e instanceof TaskGuard && e.is(this))
                    return void 0 as never
                throw e
            } finally {
                this.finish()
            }
        })
        const { delay } = options

        if (!delay) {
            this.run()
        }
    }

    on(name: 'cancel'): Promise<void>
    on(name: 'run'): Promise<void>
    on(name: 'finish'): Promise<void>
    on(name: 'cancel', f: () => void): void
    on(name: 'run', f: () => void): void
    on(name: 'finish', f: () => void): void
    on(name: 'run' | 'cancel' | 'finish', f?: () => void): Promise<void> | void {
        if (isNone(this.#event)) this.#event = {}
        const events = this.#event
        if (name === 'run') {
            if (isNone(events.run)) events.run = new TEvent
            if (isSome(f)) events.run.once(f)
            else {
                const run = events.run
                return new Promise(res => {
                    run.once(() => res())
                })
            }
        } else if (name === 'cancel') {
            if (isNone(events.cancel)) events.cancel = new TEvent
            if (isSome(f)) events.cancel.once(f)
            else {
                const cancel = events.cancel
                return new Promise(res => {
                    cancel.once(() => res())
                })
            }
        } else if (name === 'finish') {
            if (isNone(events.finish)) events.finish = new TEvent
            if (isSome(f)) events.finish.once(f)
            else {
                const finish = events.finish
                return new Promise(res => {
                    finish.once(() => res())
                })
            }
        } else {
            throw new TypeError(`unknow event ${JSON.stringify(`${name}`)}`)
        }
    }

    off(name: 'cancel', f: () => void): void
    off(name: 'run', f: () => void): void
    off(name: 'finish', f: () => void): void
    off(name: 'run' | 'cancel' | 'finish', f: () => void): void {
        if (isNone(this.#event)) this.#event = {}
        const events = this.#event
        if (name === 'run') {
            if (isNone(events.run)) events.run = new TEvent
            events.run.off(f)
        } else if (name === 'cancel') {
            if (isNone(events.cancel)) events.cancel = new TEvent
            events.cancel.off(f)
        } else if (name === 'finish') {
            if (isNone(events.finish)) events.finish = new TEvent
            events.finish.off(f)
        } else {
            throw new TypeError(`unknow event ${JSON.stringify(`${name}`)}`)
        }
    }

    get cancelled() {
        return this.#is_cancel
    }

    get running() {
        return !this.#is_cancel && !this.#is_finish && this.#fn.got()
    }

    get finished() {
        return this.#is_finish
    }

    guard() {
        if (this.#is_cancel || this.#is_finish) {
            throw new TaskGuard(this)
        }
    }

    run() {
        if (!this.#fn.got()) {
            this.#event?.run?.emit()
        }
        return this.#fn.get()
    }

    cancel() {
        if (!this.#is_cancel) {
            this.#event?.cancel?.emit()
        }
        this.#is_cancel = true
    }

    finish() {
        if (!this.#is_finish) {
            this.#event?.finish?.emit()
        }
        this.#is_finish = true
    }

    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2> {
        return this.#fn.get().then(onfulfilled, onrejected)
    }
    async catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult> {
        return this.#fn.get().catch(onrejected)
    }
    [Symbol.toStringTag]: string = 'Task'
    finally(onfinally?: (() => void) | null): Promise<T> {
        return this.#fn.get().finally(onfinally)
    }

    async use<U>(other: TaskLike<U>): Promise<U> {
        function f() { other.cancel() }
        this.on('cancel', f)
        const res = await other.run()
        this.off('cancel', f)
        return res
    }

}

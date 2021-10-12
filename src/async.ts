import { Maybe, None } from "./maybe"

/** Asynchronous pool options  */
export interface AsyncPoolOption {
    /** Maximum concurrency limit  */
    limit?: number
}

/** Asynchronous tasks queued for execution */
type AsyncPoolQueue = { f: () => PromiseLike<any>, then: (v: any) => void, err: (e: any) => void }[]

/** Asynchronous pool  
 * Used to ensure that the number of asynchronous executions at the same time does not exceed the limit  */
export class AsyncPool {
    /** @param limit Maximum concurrency limit  */
    constructor(limit?: Maybe<number>)
    /** @param option Asynchronous pool options  */
    constructor(option?: AsyncPoolOption)
    constructor(option?: AsyncPoolOption | number | None) {
        this.#limit = typeof option === 'number' ? option : option?.limit
    }

    /** Maximum concurrency limit  */
    #limit: Maybe<number>

    /** Asynchronous number currently in execution  */
    #pool = 0

    /** The number of asynchronous tasks executed in the current pool  */
    get size() {
        return this.#pool
    }

    /** Asynchronous tasks queued for execution  */
    #queue: AsyncPoolQueue = []

    /** Waiting in the pool  */
    async #add<T>(p: () => PromiseLike<T>) {
        this.#pool++
        try {
            return await p()
        } finally {
            this.#pool--
            this.#afterRun()
        }
    }

    /** After a certain task is completed  */
    #afterRun() {
        if (this.#queue.length == 0) return
        if (this.#limit == null || (this.#limit > 0 && this.#pool < this.#limit)) {
            const { f, then, err } = this.#queue.shift()!
            this.#add(f).then(then, err)
        }
    }

    /** Run asynchronous tasks in the pool  
     * Task may be delayed to start execution 
    */
    async run<T>(f: () => PromiseLike<T>) {
        if (this.#limit == null || (this.#limit > 0 && this.#pool < this.#limit)) {
            return await this.#add(f)
        } else {
            return await new Promise<T>((then, err) => this.#queue.push({ f, then, err }))
        }
    }
}

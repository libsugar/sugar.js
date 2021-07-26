import { Voidable } from "./maybe";

export class Walker<T> implements IterableIterator<T>, Iterator<T> {
    constructor(iter: Iterable<T>) {
        this.#iter = iter[Symbol.iterator]()
    }
    #iter: Iterator<T>
    #has_peek = false
    #current_peek: Voidable<T>
    #current_peek_is_down = false

    peek(): Voidable<T> {
        if (this.#has_peek) return this.#current_peek
        const r = this.#iter.next()
        this.#has_peek = true
        if (r.done) {
            this.#current_peek = void 0
            this.#current_peek_is_down = true
            return
        } else {
            this.#current_peek = r.value
            return r.value
        }
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this
    }

    next(): IteratorResult<T, void> {
        if (this.#has_peek) {
            if (this.#current_peek_is_down) return { done: true, value: (void 0)! }
            this.#has_peek = false
            const value = this.#current_peek!
            this.#current_peek = void 0
            return { done: false, value }
        }
        return this.#iter.next()
    }
    
    eat(): Voidable<T> {
        if (this.#has_peek) {
            if (this.#current_peek_is_down) return
            const value = this.#current_peek!
            this.#has_peek = false
            this.#current_peek = void 0
            return value
        }
    }
    
    take(): Voidable<T> {
        if (this.#has_peek) {
            if (this.#current_peek_is_down) return
            const value = this.#current_peek!
            this.#has_peek = false
            this.#current_peek = void 0
            return value
        }
        const r = this.#iter.next()
        if (r.done) {
            return
        } else {
            return r.value
        }
    }
}

export class AWalker<T> implements AsyncIterableIterator<T>, AsyncIterator<T> {
    constructor(iter: AsyncIterable<T>) {
        this.#iter = iter[Symbol.asyncIterator]()
    }
    #iter: AsyncIterator<T>
    #has_peek = false
    #current_peek: Voidable<T>
    #current_peek_is_down = false

    async peek(): Promise<Voidable<T>> {
        if (this.#has_peek) return this.#current_peek
        const r = await this.#iter.next()
        this.#has_peek = true
        if (r.done) {
            this.#current_peek = void 0
            this.#current_peek_is_down = true
            return
        } else {
            this.#current_peek = r.value
            return r.value
        }
    }

    [Symbol.asyncIterator](): AsyncIterableIterator<T> {
        return this
    }

    async next(): Promise<IteratorResult<T, void>> {
        if (this.#has_peek) {
            if (this.#current_peek_is_down) return { done: true, value: (void 0)! }
            this.#has_peek = false
            const value = this.#current_peek!
            this.#current_peek = void 0
            return { done: false, value }
        }
        return this.#iter.next()
    }
    
    eat(): Voidable<T> {
        if (this.#has_peek) {
            if (this.#current_peek_is_down) return
            const value = this.#current_peek!
            this.#has_peek = false
            this.#current_peek = void 0
            return value
        }
    }
    
    async take(): Promise<Voidable<T>> {
        if (this.#has_peek) {
            if (this.#current_peek_is_down) return
            const value = this.#current_peek!
            this.#has_peek = false
            this.#current_peek = void 0
            return value
        }
        const r = await this.#iter.next()
        if (r.done) {
            return
        } else {
            return r.value
        }
    }
}

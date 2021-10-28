/** Cache the results of the iterator */
export class OnceIter<T> implements Iterable<T> {
    constructor(source: Iterable<T>) {
        this.#iterator = source[Symbol.iterator]()
    }

    readonly #cache: T[] = [];
    readonly #iterator: Iterator<T>

    *[Symbol.iterator](): Iterator<T> {
        const cache = this.#cache
        const iterator = this.#iterator
        let i = 0
        for (; ;) {
            if (i < cache.length) {
                for (let j = i; j < cache.length; j++, i++) {
                    yield cache[j]
                }
            }
            const r = iterator.next()
            if (r.done) return
            cache.push(r.value)
            yield r.value
            i++
        }
    }
}

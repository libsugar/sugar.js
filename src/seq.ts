
export function* map<T, R>(iter: Iterable<T>, f: (v: T) => R): Iterable<R> {
    for (const i of iter) {
        yield f(i)
    }
}

export function* flatMap<T, R>(iter: Iterable<T>, f: (v: T) => Iterable<R>): Iterable<R> {
    for (const i of iter) {
        yield* f(i)
    }
}

export function first<T>(iter: Iterable<T>): T | undefined {
    for (const i of iter) return i
}

export function* zip<A, B>(a: Iterable<A>, b: Iterable<B>): Iterable<[A, B]> {
    const ai = a[Symbol.iterator]()
    const bi = b[Symbol.iterator]()
    for (; ;) {
        const a = ai.next()
        if (a.done) return
        const b = bi.next()
        if (b.done) return
        yield [a.value, b.value]
    }
}

export function fold<T, R>(a: Iterable<T>, init: R, f: (acc: R, val: T) => R): R {
    let acc = init
    for (const i of a) {
        acc = f(acc, i)
    }
    return acc
}

export function reduce<T>(a: Iterable<T>, f: (acc: T, val: T) => T): T {
    let acc: T | undefined, first = true
    for (const i of a) {
        if (first) (acc = i, first = false)
        else acc = f(acc!, i)
    }
    if (first) throw new TypeError('no item')
    return acc!
}

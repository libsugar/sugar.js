import { Voidable } from "./maybe"
import { Option } from "./option"

export function flu<T>(iter: AsyncIterable<T>): Flu<T> {
    return new Flu(() => iter)
}

export class Flu<T> implements AsyncIterable<T> {
    constructor(public readonly iter: () => AsyncIterable<T>) { }

    [Symbol.asyncIterator](): AsyncIterator<T> {
        return this.iter()[Symbol.asyncIterator]()
    }

    static by<T>(iter: () => AsyncIterable<T>): Flu<T> {
        return new Flu(iter)
    }

    static of<T>(...iter: T[]): Flu<T> {
        return flu(from(iter))
    }

    static from<T>(iter: Iterable<T>): Flu<T> {
        return flu(from(iter))
    }

    static fromIter<T>(iter: Iterable<T | Promise<T>>): Flu<T> {
        return flu(fromIter(iter))
    }

    collect(): Promise<T[]> {
        return collect(this)
    }

    join(separator?: string): Promise<string> {
        return join(this, separator)
    }

    count(): Promise<number> {
        return count(this)
    }

    first(): Promise<Voidable<T>> {
        return first(this)
    }

    firstO(): Promise<Option<T>> {
        return firstO(this)
    }

    last(): Promise<Voidable<T>> {
        return last(this)
    }

    lastO(): Promise<Option<T>> {
        return lastO(this)
    }

    nth(n: number): Promise<Voidable<T>> {
        return nth(this, n)
    }

    nthO(n: number): Promise<Option<T>> {
        return nthO(this, n)
    }

    stepBy(step: number): Flu<T> {
        return new Flu(() => stepBy(this, step))
    }

    chain(other: AsyncIterable<T>): Flu<T> {
        return new Flu(() => chain(this, other))
    }

    zip<U>(other: AsyncIterable<U>): Flu<[T, U]> {
        return new Flu(() => zip(this, other))
    }

    unzip(f: (v: T) => unknown | Promise<unknown>): Promise<[T[], T[]]> {
        return unzip(this, f)
    }

    map<R>(f: (v: T) => R): Flu<R> {
        return new Flu(() => map(this, f))
    }

    mapWait<R>(f: (v: T) => R | Promise<R>): Flu<R> {
        return new Flu(() => mapWait(this, f))
    }

    forEach(f: (v: T) => unknown | Promise<unknown>): Promise<void> {
        return forEach(this, f)
    }

    filter(f: (v: T) => unknown | Promise<unknown>): Flu<T>
    filter<S extends T>(f: (v: T) => v is S): Flu<S>
    filter<S extends T>(f: (v: T) => v is S): Flu<S> {
        return new Flu(() => filter(this, f))
    }

    enumerate(): Flu<[number, T]> {
        return new Flu(() => enumerate(this))
    }

    skip(n: number): Flu<T> {
        return new Flu(() => skip(this, n))
    }

    take(n: number): Flu<T> {
        return new Flu(() => take(this, n))
    }

    slice(from: number, to: number): Flu<T> {
        return new Flu(() => slice(this, from, to))
    }

    scan<R>(init: R, f: (acc: R, val: T) => R): Flu<R> {
        return new Flu(() => scan(this, init, f))
    }

    scanWait<R>(init: R | Promise<R>, f: (acc: R, val: T) => R | Promise<R>): Flu<R> {
        return new Flu(() => scanWait(this, init, f))
    }

    flatMap<R>(f: (v: T) => AsyncIterable<R>): Flu<R> {
        return new Flu(() => flatMap(this, f))
    }

    flatten(): T extends AsyncIterable<infer R> ? Flu<R> : never {
        return new Flu(() => flatten(this as any)) as any
    }

    await(): T extends infer R | Promise<infer R> ? Flu<R> : never {
        return new Flu(() => wait(this as any)) as any
    }
    wait(): T extends infer R | Promise<infer R> ? Flu<R> : never {
        return new Flu(() => wait(this as any)) as any
    }

    also(f: (v: T) => unknown | Promise<unknown>): Flu<T> {
        return new Flu(() => also(this, f))
    }

    fold<R>(init: R, f: (acc: R, val: T) => R): Promise<R> {
        return fold(this, init, f)
    }

    foldWait<R>(init: R | Promise<R>, f: (acc: R, val: T) => R | Promise<R>): Promise<R> {
        return foldWait(this, init, f)
    }

    reduce(f: (acc: T, val: T) => T): Promise<T> {
        return reduce(this, f)
    }

    reduceWait(f: (acc: T, val: T) => T | Promise<T>): Promise<T> {
        return reduceWait(this, f)
    }

    all(f: (v: T) => unknown | Promise<unknown>): Promise<boolean> {
        return all(this, f)
    }

    any(f: (v: T) => unknown | Promise<unknown>): Promise<boolean> {
        return any(this, f)
    }

    find(f: (v: T) => unknown | Promise<unknown>): Promise<Voidable<T>> {
        return find(this, f)
    }

    findO(f: (v: T) => unknown | Promise<unknown>): Promise<Option<T>> {
        return findO(this, f)
    }

    position(f: (v: T) => unknown | Promise<unknown>): Promise<number> {
        return position(this, f)
    }

    indexOf(v: T): Promise<number> {
        return indexOf(this, v)
    }

    indexOfWait(v: T | Promise<T>): Promise<number> {
        return indexOfWait(this, v)
    }

    max(): Promise<Voidable<T>> {
        return max(this)
    }

    maxO(): Promise<Option<T>> {
        return maxO(this)
    }

    min(): Promise<Voidable<T>> {
        return min(this)
    }

    minO(): Promise<Option<T>> {
        return minO(this)
    }

    merge<U>(other: AsyncIterable<U>): Flu<T | U> {
        return new Flu(() => merge(this, other))
    }
}

export async function* fromIter<T>(iter: Iterable<T | Promise<T>>): AsyncIterable<T> {
    for (const e of iter) {
        yield await e
    }
}

export async function* of<T>(...iter: T[]): AsyncIterable<T> {
    for (const e of iter) {
        yield e
    }
}

export async function* from<T>(iter: Iterable<T>): AsyncIterable<T> {
    for (const e of iter) {
        yield e
    }
}

export async function collect<T>(iter: AsyncIterable<T>): Promise<T[]> {
    const r: T[] = []
    for await (const e of iter) {
        r.push(e)
    }
    return r
}

export async function join<T>(iter: AsyncIterable<T>, separator?: string): Promise<string> {
    return (await collect(iter)).join(separator)
}

export async function count<T>(iter: AsyncIterable<T>): Promise<number> {
    return (await collect(iter)).length
}

export async function first<T>(iter: AsyncIterable<T>): Promise<Voidable<T>> {
    for await (const i of iter) return i
}

export async function firstO<T>(iter: AsyncIterable<T>): Promise<Option<T>> {
    for await (const i of iter) return Option.some(i)
    return Option.None
}

export async function last<T>(iter: AsyncIterable<T>): Promise<Voidable<T>> {
    let r: Voidable<T>
    for await (const i of iter) {
        r = i
    }
    return r
}

export async function lastO<T>(iter: AsyncIterable<T>): Promise<Option<T>> {
    let r: Voidable<T>, has: boolean = false
    for await (const i of iter) {
        r = i
        has = true
    }
    return has ? Option.some(r) : Option.None
}

export async function nth<T>(iter: AsyncIterable<T>, n: number): Promise<Voidable<T>> {
    if (iter instanceof Array) return iter[n]
    let i = 0
    for await (const e of iter) {
        if (i == n) return e
        i++
    }
    return
}

export async function nthO<T>(iter: AsyncIterable<T>, n: number): Promise<Option<T>> {
    if (iter instanceof Array) return iter.length > n ? Option.some(iter[n]) : Option.None
    let i = 0
    for await (const e of iter) {
        if (i == n) return Option.some(e)
        i++
    }
    return Option.None
}

export async function* stepBy<T>(iter: AsyncIterable<T>, step: number): AsyncIterable<T> {
    if (step < 0) step = 0
    let i = 0
    for await (const e of iter) {
        if (i == step) {
            yield e
            i = 0
        } else {
            i++
        }
    }
}

export async function* chain<T>(a: AsyncIterable<T>, b: AsyncIterable<T>): AsyncIterable<T> {
    yield* a
    yield* b
}

export async function* zip<A, B>(a: AsyncIterable<A>, b: AsyncIterable<B>): AsyncIterable<[A, B]> {
    const ai = a[Symbol.asyncIterator]()
    const bi = b[Symbol.asyncIterator]()
    for (; ;) {
        const a = await ai.next()
        if (a.done) return
        const b = await bi.next()
        if (b.done) return
        yield [a.value, b.value]
    }
}

export async function unzip<T>(iter: AsyncIterable<T>, f: (v: T) => unknown | Promise<unknown>): Promise<[T[], T[]]> {
    let [a, b]: [T[], T[]] = [[], []]
    for await (const i of iter) {
        if (await f(i)) a.push(i)
        else b.push(i)
    }
    return [a, b]
}

export async function* map<T, R>(iter: AsyncIterable<T>, f: (v: T) => R): AsyncIterable<R> {
    for await (const i of iter) {
        yield f(i)
    }
}

export async function* mapWait<T, R>(iter: AsyncIterable<T>, f: (v: T) => R | Promise<R>): AsyncIterable<R> {
    for await (const i of iter) {
        yield await f(i)
    }
}

export async function forEach<T>(iter: AsyncIterable<T>, f: (v: T) => unknown | Promise<unknown>): Promise<void> {
    for await (const i of iter) {
        await f(i)
    }
}

export async function* filter<T, S extends T>(iter: AsyncIterable<T>, f: (v: T) => v is S): AsyncIterable<S> {
    for await (const i of iter) {
        if (await (f(i) as any)) yield i as any
    }
}

export async function* enumerate<T>(iter: AsyncIterable<T>): AsyncIterable<[number, T]> {
    let i = 0
    for await (const e of iter) {
        yield [i, e]
        i++
    }
}

export async function* skip<T>(iter: AsyncIterable<T>, n: number): AsyncIterable<T> {
    for await (const [i, e] of enumerate(iter)) {
        if (i > n) yield e
    }
}

export async function* take<T>(iter: AsyncIterable<T>, n: number): AsyncIterable<T> {
    for await (const [i, e] of enumerate(iter)) {
        yield e
        if (i > n) return
    }
}

export async function* slice<T>(iter: AsyncIterable<T>, from: number, to: number): AsyncIterable<T> {
    for await (const [i, e] of enumerate(iter)) {
        if (i > from) yield e
        if (i > to) return
    }
}

export async function* scan<T, R>(iter: AsyncIterable<T>, init: R, f: (acc: R, val: T) => R): AsyncIterable<R> {
    let acc = init
    for await (const i of iter) {
        acc = f(acc, i)
        yield acc
    }
}

export async function* scanWait<T, R>(iter: AsyncIterable<T>, init: R | Promise<R>, f: (acc: R, val: T) => R | Promise<R>): AsyncIterable<R> {
    let acc = await init
    for await (const i of iter) {
        acc = await f(acc, i)
        yield acc
    }
}

export async function* flatMap<T, R>(iter: AsyncIterable<T>, f: (v: T) => AsyncIterable<R>): AsyncIterable<R> {
    for await (const i of iter) {
        yield* f(i)
    }
}

export async function* flatten<T>(iter: AsyncIterable<AsyncIterable<T>>): AsyncIterable<T> {
    for await (const i of iter) {
        yield* i
    }
}

export async function* wait<T>(iter: AsyncIterable<T | Promise<T>>): AsyncIterable<T> {
    for await (const i of iter) {
        yield await i
    }
}

export async function* also<T>(iter: AsyncIterable<T>, f: (v: T) => unknown | Promise<unknown>): AsyncIterable<T> {
    for await (const i of iter) {
        await f(i)
        yield i
    }
}

export async function fold<T, R>(a: AsyncIterable<T>, init: R, f: (acc: R, val: T) => R): Promise<R> {
    let acc = init
    for await (const i of a) {
        acc = f(acc, i)
    }
    return acc
}

export async function foldWait<T, R>(a: AsyncIterable<T>, init: R | Promise<R>, f: (acc: R, val: T) => R | Promise<R>): Promise<R> {
    let acc = await init
    for await (const i of a) {
        acc = await f(acc, i)
    }
    return acc
}

export async function reduce<T>(a: AsyncIterable<T>, f: (acc: T, val: T) => T): Promise<T> {
    let acc: T | undefined, first = true
    for await (const i of a) {
        if (first) (acc = i, first = false)
        else acc = f(acc!, i)
    }
    if (first) throw new TypeError('no item')
    return acc!
}

export async function reduceWait<T>(a: AsyncIterable<T>, f: (acc: T, val: T) => T | Promise<T>): Promise<T> {
    let acc: T | undefined, first = true
    for await (const i of a) {
        if (first) (acc = i, first = false)
        else acc = await f(acc!, i)
    }
    if (first) throw new TypeError('no item')
    return acc!
}

export async function all<T>(a: AsyncIterable<T>, f: (v: T) => unknown | Promise<unknown>): Promise<boolean> {
    for await (const i of a) {
        if (!await f(i)) return false
    }
    return true
}

export async function any<T>(a: AsyncIterable<T>, f: (v: T) => unknown | Promise<unknown>): Promise<boolean> {
    for await (const i of a) {
        if (await f(i)) return true
    }
    return false
}

export async function find<T>(a: AsyncIterable<T>, f: (v: T) => unknown | Promise<unknown>): Promise<Voidable<T>> {
    for await (const i of a) {
        if (await f(i)) return i
    }
}

export async function findO<T>(a: AsyncIterable<T>, f: (v: T) => unknown | Promise<unknown>): Promise<Option<T>> {
    for await (const i of a) {
        if (await f(i)) return Option.some(i)
    }
    return Option.None
}

export async function position<T>(a: AsyncIterable<T>, f: (v: T) => unknown | Promise<unknown>): Promise<number> {
    for await (const [i, v] of enumerate(a)) {
        if (await f(v)) return i
    }
    return -1
}

export async function indexOf<T>(a: AsyncIterable<T>, v: T): Promise<number> {
    for await (const [i, e] of enumerate(a)) {
        if (e == v) return i
    }
    return -1
}

export async function indexOfWait<T>(a: AsyncIterable<T>, v: T | Promise<T>): Promise<number> {
    const vV = await v
    for await (const [i, e] of enumerate(a)) {
        if (e == vV) return i
    }
    return -1
}

export async function max<T>(a: AsyncIterable<T>): Promise<Voidable<T>> {
    let r: Voidable<T>, first = true
    for await (const i of a) {
        if (first) (r = i, first = false)
        else if (i > r!) r = i
    }
    return r
}

export async function maxO<T>(a: AsyncIterable<T>): Promise<Option<T>> {
    let r: Voidable<T>, first = true
    for await (const i of a) {
        if (first) (r = i, first = false)
        else if (i > r!) r = i
    }
    return first ? Option.None : Option.some(r)
}

export async function min<T>(a: AsyncIterable<T>): Promise<Voidable<T>> {
    let r: Voidable<T>, first = true
    for await (const i of a) {
        if (first) (r = i, first = false)
        else if (i < r!) r = i
    }
    return r
}

export async function minO<T>(a: AsyncIterable<T>): Promise<Option<T>> {
    let r: Voidable<T>, first = true
    for await (const i of a) {
        if (first) (r = i, first = false)
        else if (i < r!) r = i
    }
    return first ? Option.None : Option.some(r)
}

async function* Continue<T>(n: Promise<IteratorResult<T>>, iter: AsyncIterator<T>): AsyncIterable<T> {
    for (; ;) {
        const r = await n
        if (r.done) return
        yield r.value
        n = iter.next()
    }
}

export async function* merge<A, B>(a: AsyncIterable<A>, b: AsyncIterable<B>): AsyncIterable<A | B> {
    const ai = a[Symbol.asyncIterator]()
    const bi = b[Symbol.asyncIterator]()
    let an = ai.next()
    let bn = bi.next()
    for (; ;) {
        const r = await Promise.race([an.then(a => ({ a })), bn.then(b => ({ b }))])
        if ('a' in r) {
            if (r.a.done) {
                yield* Continue(bn, bi)
                return
            }
            yield r.a.value
            an = ai.next()
        } else {
            if (r.b.done) {
                yield* Continue(an, ai)
                return
            } 
            yield r.b.value
            bn = bi.next()
        }
    }
}

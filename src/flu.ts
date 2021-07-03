import { Voidable } from "./maybe"
import { Option } from "./option"
import { delay as Delay } from './delay'

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

    static fromCallback<T>(): CbFlu<[T]>
    static fromCallback<A extends unknown[], T = A[0], This = never>(map?: (this: This, ...args: A) => T): CbFlu<A, T, This>
    static fromCallback<A extends unknown[], T = A[0], This = never>(map?: (this: This, ...args: A) => T): CbFlu<A, T, This> {
        return new CbFlu(map)
    }

    collect(): Promise<T[]> {
        return collect(this.iter())
    }

    join(separator?: string): Promise<string> {
        return join(this, separator)
    }

    count(): Promise<number> {
        return count(this.iter())
    }

    isEmpty(): Promise<boolean> {
        return isEmpty(this.iter())
    }

    first(): Promise<Voidable<T>> {
        return first(this.iter())
    }

    firstO(): Promise<Option<T>> {
        return firstO(this.iter())
    }

    last(): Promise<Voidable<T>> {
        return last(this.iter())
    }

    lastO(): Promise<Option<T>> {
        return lastO(this.iter())
    }

    nth(n: number): Promise<Voidable<T>> {
        return nth(this.iter(), n)
    }

    nthO(n: number): Promise<Option<T>> {
        return nthO(this.iter(), n)
    }

    stepBy(step: number): Flu<T> {
        return new Flu(() => stepBy(this, step))
    }

    chain(other: AsyncIterable<T> | Iterable<T>, ...more: (AsyncIterable<T> | Iterable<T>)[]): Flu<T> {
        return new Flu(() => chain(this, other, ...more))
    }

    zip<U>(other: AsyncIterable<U>): Flu<[T, U]> {
        return new Flu(() => zip(this, other))
    }

    unzip(): Promise<[
        (T extends [infer A, any] | readonly [infer A, any] ? A : T extends (infer R)[] ? R : unknown)[],
        (T extends [any, infer B] | readonly [any, infer B] ? B : T extends (infer R)[] ? R : unknown)[],
    ]> {
        return unzip(this.iter() as any) as any
    }

    map<R>(f: (v: T) => R): Flu<R> {
        return new Flu(() => map(this, f))
    }

    mapWait<R>(f: (v: T) => R | PromiseLike<R>): Flu<R> {
        return new Flu(() => mapWait(this, f))
    }

    fill<R>(v: R): Flu<R> {
        return new Flu(() => fill(this, v))
    }

    forEach(f: (v: T) => unknown | PromiseLike<unknown>): Promise<void> {
        return forEach(this, f)
    }

    run(): Promise<void> {
        return run(this)
    }

    filter(f: (v: T) => unknown | PromiseLike<unknown>): Flu<T>
    filter<S extends T>(f: (v: T) => v is S): Flu<S>
    filter<S extends T>(f: (v: T) => v is S): Flu<S> {
        return new Flu(() => filter(this, f))
    }

    enumerate(): Flu<[T, number]> {
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

    sub(from: number, count: number): Flu<T> {
        return new Flu(() => sub(this, from, count))
    }

    scan<R>(init: R, f: (acc: R, val: T) => R): Flu<R> {
        return new Flu(() => scan(this, init, f))
    }

    scanWait<R>(init: R | PromiseLike<R>, f: (acc: R, val: T) => R | PromiseLike<R>): Flu<R> {
        return new Flu(() => scanWait(this, init, f))
    }

    flatMap<R>(f: (v: T) => AsyncIterable<R> | Iterable<R>): Flu<R> {
        return new Flu(() => flatMap(this, f))
    }

    flatten(): T extends AsyncIterable<infer R> ? Flu<R> : T extends Iterable<infer R> ? Flu<R> : never {
        return new Flu(() => flatten(this as any)) as any
    }

    wait(): T extends infer R | PromiseLike<infer R> ? Flu<R> : never {
        return new Flu(() => wait(this as any)) as any
    }

    also(f: (v: T) => unknown | PromiseLike<unknown>): Flu<T> {
        return new Flu(() => also(this, f))
    }

    fold<R>(init: R, f: (acc: R, val: T) => R): Promise<R> {
        return fold(this, init, f)
    }

    foldWait<R>(init: R | PromiseLike<R>, f: (acc: R, val: T) => R | PromiseLike<R>): Promise<R> {
        return foldWait(this, init, f)
    }

    reduce(f: (acc: T, val: T) => T): Promise<T> {
        return reduce(this, f)
    }

    reduceWait(f: (acc: T, val: T) => T | PromiseLike<T>): Promise<T> {
        return reduceWait(this, f)
    }

    all(f: (v: T) => unknown | PromiseLike<unknown>): Promise<boolean> {
        return all(this, f)
    }

    any(f: (v: T) => unknown | PromiseLike<unknown>): Promise<boolean> {
        return any(this, f)
    }

    find(f: (v: T) => unknown | PromiseLike<unknown>): Promise<Voidable<T>> {
        return find(this, f)
    }

    findO(f: (v: T) => unknown | PromiseLike<unknown>): Promise<Option<T>> {
        return findO(this, f)
    }

    position(f: (v: T) => unknown | PromiseLike<unknown>): Promise<number> {
        return position(this, f)
    }

    indexOf(v: T): Promise<number> {
        return indexOf(this, v)
    }

    indexOfWait(v: T | PromiseLike<T>): Promise<number> {
        return indexOfWait(this, v)
    }

    max(): Promise<Voidable<T>> {
        return max(this)
    }

    min(): Promise<Voidable<T>> {
        return min(this)
    }

    merge<U>(other: AsyncIterable<U>): Flu<T | U> {
        return new Flu(() => merge(this, other))
    }

    delay(ms?: Voidable<number>): Flu<T>
    delay(f: (v: T) => unknown): Flu<T>
    delay(ms: Voidable<number>, f: (v: T) => unknown): Flu<T>
    delay(a: any, b?: any): Flu<T> {
        if (typeof a === 'number') return new Flu(() => delay(this, a, b))
        return new Flu(() => delay(this, void 0, a))
    }

    retry(count: number): Flu<T>
    retry<E = unknown>(f: (err: E, count: number) => unknown): Flu<T>
    retry<E = unknown>(cond: number | ((err: E, count: number) => unknown)): Flu<T>
    retry<E = unknown>(cond: number | ((err: E, count: number) => unknown) = Infinity): Flu<T> {
        return new Flu(() => retry(this.iter, cond))
    }

    timestamp(): Flu<[value: T, timestamp: number]> {
        return new Flu(() => timestamp(this))
    }

    throttle(ms: number): Flu<T> {
        return new Flu(() => throttle(this, ms))
    }

    debounce(ms: number): Flu<T> {
        return new Flu(() => debounce(this, ms))
    }

    audit(ms: number): Flu<T> {
        return new Flu(() => audit(this, ms))
    }

    buffer(n: number, mode: 'count' | 'time' = 'count'): Flu<T[]> {
        return new Flu(() => buffer(this, n, mode))
    }

    break(): Flu<T> {
        return new Flu(() => breakBy(this))
    }

    breakBy(f: (v: T) => unknown): Flu<T> {
        return new Flu(() => breakBy(this, f))
    }

    takeIf(f: (v: T) => unknown): Flu<T> {
        return new Flu(() => takeIf(this, f))
    }

    startBy(f: (v: T) => unknown): Flu<T> {
        return new Flu(() => startBy(this, f))
    }

    skipIf(f: (v: T) => unknown): Flu<T> {
        return new Flu(() => skipIf(this, f))
    }

    drop(): Flu<void> {
        return new Flu(() => drop(this))
    }

    forEnd(): Flu<any> {
        return new Flu(() => forEnd(this))
    }

    breakAt(f: (v: T) => unknown): Flu<T>
    breakAt(single: PromiseLike<unknown>): Flu<T>
    breakAt(single: AsyncIterable<unknown>): Flu<T>
    breakAt(single: AsyncIterable<unknown> | PromiseLike<unknown> | ((v: T) => unknown)): Flu<T>
    breakAt(single: AsyncIterable<unknown> | PromiseLike<unknown> | ((v: T) => unknown)): Flu<T> {
        if (typeof single === 'function') return this.breakBy(single)
        return new Flu(() => breakAt(this, single))
    }

    takeUntil(single: PromiseLike<unknown>): Flu<T>
    takeUntil(single: AsyncIterable<unknown>): Flu<T>
    takeUntil(single: AsyncIterable<unknown> | PromiseLike<unknown>): Flu<T>
    takeUntil(single: AsyncIterable<unknown> | PromiseLike<unknown>): Flu<T> {
        return new Flu(() => breakAt(this, single))
    }

    startAt(f: (v: T) => unknown): Flu<T>
    startAt(single: PromiseLike<unknown>): Flu<T>
    startAt(single: AsyncIterable<unknown>): Flu<T>
    startAt(single: AsyncIterable<unknown> | PromiseLike<unknown> | ((v: T) => unknown)): Flu<T>
    startAt(single: AsyncIterable<unknown> | PromiseLike<unknown> | ((v: T) => unknown)): Flu<T> {
        if (typeof single === 'function') return this.startBy(single)
        return new Flu(() => startAt(this, single))
    }

    skipUntil(single: PromiseLike<unknown>): Flu<T>
    skipUntil(single: AsyncIterable<unknown>): Flu<T>
    skipUntil(single: AsyncIterable<unknown> | PromiseLike<unknown>): Flu<T>
    skipUntil(single: AsyncIterable<unknown> | PromiseLike<unknown>): Flu<T> {
        return new Flu(() => startAt(this, single))
    }
}

export interface CbFlu<A extends unknown[], T = A[0], This = never> extends Flu<T> {
    cb(this: This, ...arg: A): void
    end(): void
    readonly isEnd: boolean
}
export class CbFlu<A extends unknown[], T = A[0], This = never> extends Flu<T> {
    constructor(map?: (this: This, ...args: A) => T) {
        let isEnd = false
        let end: (v: {}) => void
        const endp = new Promise<{}>(r => end = r)
        endp.then(() => isEnd = true)
        let res: Voidable<(v: { v: T }) => void>
        let p: Promise<{ v: T }> = new Promise((r) => res = r)
        function cb(v: T) { res?.({ v }); p = new Promise((r) => res = r) }
        async function* gen(): AsyncIterable<T> {
            for (; ;) {
                if (isEnd) return
                const v = await Promise.race<{ v: T } | {}>([p, endp])
                if ('v' in v) yield v.v
                else return
            }
        }
        //return [new Flu(gen), map != null ? function (this: This, ...args: A) { cb(map.call(this, ...args)) } : cb, () => (isEnd = true, end({}))] as any
        super(gen)
        Object.defineProperties(this, {
            cb: {
                value: map != null ? function (this: This, ...args: A) { cb(map.call(this, ...args)) } : cb,
                enumerable: true,
            },
            end: {
                value: () => (isEnd = true, end({})),
                enumerable: true,
            },
            isEnd: {
                get() {
                    return isEnd
                },
                enumerable: true,
            },
        })
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

export async function isEmpty<T>(iter: AsyncIterable<T>): Promise<boolean> {
    for await (const _ of iter) return true
    return false
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
    if (step < 1) step = 1
    let i = 0, first = true
    for await (const e of iter) {
        if (first || i >= step) {
            yield e
            i = 1
        } else {
            i++
        }
        first = false
    }
}

export async function* chain<T>(a: AsyncIterable<T> | Iterable<T>, b: AsyncIterable<T> | Iterable<T>, ...more: (AsyncIterable<T> | Iterable<T>)[]): AsyncIterable<T> {
    yield* a
    yield* b
    for (const iter of more) {
        yield* iter
    }
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

export async function unzip<A, B>(iter: AsyncIterable<[A, B]>): Promise<[A[], B[]]> {
    let [a, b]: [A[], B[]] = [[], []]
    for await (const i of iter) {
        a.push(i[0])
        b.push(i[1])
    }
    return [a, b]
}

export async function* map<T, R>(iter: AsyncIterable<T>, f: (v: T) => R): AsyncIterable<R> {
    for await (const i of iter) {
        yield f(i)
    }
}

export async function* mapWait<T, R>(iter: AsyncIterable<T>, f: (v: T) => R | PromiseLike<R>): AsyncIterable<R> {
    for await (const i of iter) {
        yield await f(i)
    }
}

export async function* fill<T, R>(iter: AsyncIterable<T>, v: R): AsyncIterable<R> {
    for await (const _ of iter) {
        yield v
    }
}

export async function forEach<T>(iter: AsyncIterable<T>, f: (v: T) => unknown | PromiseLike<unknown>): Promise<void> {
    for await (const i of iter) {
        await f(i)
    }
}

export async function run<T>(iter: AsyncIterable<T>): Promise<void> {
    for await (const _ of iter) { }
}

export async function* filter<T, S extends T>(iter: AsyncIterable<T>, f: (v: T) => v is S): AsyncIterable<S> {
    for await (const i of iter) {
        if (await (f(i) as any)) yield i as any
    }
}

export async function* enumerate<T>(iter: AsyncIterable<T>): AsyncIterable<[T, number]> {
    let i = 0
    for await (const e of iter) {
        yield [e, i]
        i++
    }
}

export async function* skip<T>(iter: AsyncIterable<T>, n: number): AsyncIterable<T> {
    for await (const [e, i] of enumerate(iter)) {
        if (i >= n) yield e
    }
}

export async function* take<T>(iter: AsyncIterable<T>, n: number): AsyncIterable<T> {
    for await (const [e, i] of enumerate(iter)) {
        yield e
        if (i + 1 >= n) return
    }
}

export async function* slice<T>(iter: AsyncIterable<T>, from: number, to: number): AsyncIterable<T> {
    for await (const [e, i] of enumerate(iter)) {
        if (i >= from) yield e
        if (i + 1 >= to) return
    }
}

export function sub<T>(iter: AsyncIterable<T>, from: number, count: number): AsyncIterable<T> {
    return slice(iter, from, count + from)
}

export async function* scan<T, R>(iter: AsyncIterable<T>, init: R, f: (acc: R, val: T) => R): AsyncIterable<R> {
    let acc = init
    for await (const i of iter) {
        acc = f(acc, i)
        yield acc
    }
}

export async function* scanWait<T, R>(iter: AsyncIterable<T>, init: R | PromiseLike<R>, f: (acc: R, val: T) => R | PromiseLike<R>): AsyncIterable<R> {
    let acc = await init
    for await (const i of iter) {
        acc = await f(acc, i)
        yield acc
    }
}

export async function* flatMap<T, R>(iter: AsyncIterable<T>, f: (v: T) => AsyncIterable<R> | Iterable<R>): AsyncIterable<R> {
    for await (const i of iter) {
        yield* f(i)
    }
}

export async function* flatten<T>(iter: AsyncIterable<AsyncIterable<T> | Iterable<T>>): AsyncIterable<T> {
    for await (const i of iter) {
        yield* i
    }
}

export async function* wait<T>(iter: AsyncIterable<T | PromiseLike<T>>): AsyncIterable<T> {
    for await (const i of iter) {
        yield await i
    }
}

export async function* also<T>(iter: AsyncIterable<T>, f: (v: T) => unknown | PromiseLike<unknown>): AsyncIterable<T> {
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

export async function foldWait<T, R>(a: AsyncIterable<T>, init: R | PromiseLike<R>, f: (acc: R, val: T) => R | PromiseLike<R>): Promise<R> {
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

export async function reduceWait<T>(a: AsyncIterable<T>, f: (acc: T, val: T) => T | PromiseLike<T>): Promise<T> {
    let acc: T | undefined, first = true
    for await (const i of a) {
        if (first) (acc = i, first = false)
        else acc = await f(acc!, i)
    }
    if (first) throw new TypeError('no item')
    return acc!
}

export async function all<T>(a: AsyncIterable<T>, f: (v: T) => unknown | PromiseLike<unknown>): Promise<boolean> {
    for await (const i of a) {
        if (!await f(i)) return false
    }
    return true
}

export async function any<T>(a: AsyncIterable<T>, f: (v: T) => unknown | PromiseLike<unknown>): Promise<boolean> {
    for await (const i of a) {
        if (await f(i)) return true
    }
    return false
}

export async function find<T>(a: AsyncIterable<T>, f: (v: T) => unknown | PromiseLike<unknown>): Promise<Voidable<T>> {
    for await (const i of a) {
        if (await f(i)) return i
    }
}

export async function findO<T>(a: AsyncIterable<T>, f: (v: T) => unknown | PromiseLike<unknown>): Promise<Option<T>> {
    for await (const i of a) {
        if (await f(i)) return Option.some(i)
    }
    return Option.None
}

export async function position<T>(a: AsyncIterable<T>, f: (v: T) => unknown | PromiseLike<unknown>): Promise<number> {
    for await (const [e, i] of enumerate(a)) {
        if (await f(e)) return i
    }
    return -1
}

export async function indexOf<T>(a: AsyncIterable<T>, v: T): Promise<number> {
    for await (const [e, i] of enumerate(a)) {
        if (e == v) return i
    }
    return -1
}

export async function indexOfWait<T>(a: AsyncIterable<T>, v: T | PromiseLike<T>): Promise<number> {
    const vV = await v
    for await (const [e, i] of enumerate(a)) {
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

export async function min<T>(a: AsyncIterable<T>): Promise<Voidable<T>> {
    let r: Voidable<T>, first = true
    for await (const i of a) {
        if (first) (r = i, first = false)
        else if (i < r!) r = i
    }
    return r
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
            if (r.a.done) return yield* Continue(bn, bi)
            yield r.a.value
            an = ai.next()
        } else {
            if (r.b.done) return yield* Continue(an, ai)
            yield r.b.value
            bn = bi.next()
        }
    }
}

export async function* delay<T>(iter: AsyncIterable<T>, ms?: Voidable<number>, f?: (v: T) => unknown): AsyncIterable<T> {
    if (f != null) {
        for await (const e of iter) {
            if (f(e)) await Delay(ms)
            yield e
        }
    } else {
        for await (const e of iter) {
            await Delay(ms)
            yield e
        }
    }
}

export async function* retry<T, E = unknown>(iterFn: () => AsyncIterable<T>, count: number | ((err: E, count: number) => unknown) = Infinity): AsyncIterable<T> {
    if (typeof count === 'function') {
        let i = 0
        for (; ;) {
            const iter = iterFn()
            try {
                for await (const e of iter) {
                    yield e
                }
                return
            } catch (e) {
                i++
                if (count(e, i)) continue
                throw e
            }
        }
    } else {
        for (; ;) {
            const iter = iterFn()
            try {
                for await (const e of iter) {
                    yield e
                }
                return
            } catch (e) {
                count--
                if (count > 0) continue
                throw e
            }
        }
    }
}

export async function* timestamp<T>(iter: AsyncIterable<T>): AsyncIterable<[value: T, timestamp: number]> {
    for await (const e of iter) {
        yield [e, +new Date]
    }
}

export async function* throttle<T>(iter: AsyncIterable<T>, ms: number = 300): AsyncIterable<T> {
    let last = +new Date
    for await (const e of iter) {
        const now = +new Date
        if (last + ms <= now) {
            yield e
            last = now
        }
    }
}

export async function* debounce<T>(iter: AsyncIterable<T>, ms: number = 300): AsyncIterable<T> {
    let timeout: any, res: (v: { v: T }) => void, end: (v: {}) => void, endp = new Promise<{}>(r => end = r)
    queueMicrotask(async () => {
        for await (const v of iter) {
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => res?.({ v }), ms)
        }
        end({})
    })
    for (; ;) {
        const v = await Promise.race<{ v: T } | {}>([new Promise<{ v: T }>(r => res = r), endp])
        if ('v' in v) yield v.v
        else return
    }
}

export async function* audit<T>(iter: AsyncIterable<T>, ms: number = 300): AsyncIterable<T> {
    let e: T, first = true, end: (v: {}) => void, endp = new Promise<{}>(r => end = r)
    queueMicrotask(async () => {
        for await (const v of iter) {
            e = v
            first = false
        }
        end({})
    })
    let timeout
    for (; ;) {
        const v = await Promise.race<{ v: T } | {}>([new Promise<{ v: T }>(res => timeout = setTimeout(() => res({ v: e }), ms)), endp])
        clearTimeout(timeout)
        if ('v' in v) {
            if (first) continue
            yield v.v
        }
        else return
    }
}

export async function* buffer<T>(iter: AsyncIterable<T>, n: number, mode: 'count' | 'time' = 'count'): AsyncIterable<T[]> {
    if (n <= 0) {
        for await (const e of iter) yield [e]
    } else if (mode == 'count') {
        let buffer: T[] = []
        for await (const e of iter) {
            buffer.push(e)
            if (buffer.length >= n) yield buffer
            buffer = []
        }
        if (buffer.length != 0) yield buffer
    } else {
        let buffer: T[] = [], first = true, end: (v: {}) => void, endp = new Promise<{}>(r => end = r)
        queueMicrotask(async () => {
            for await (const v of iter) {
                buffer.push(v)
                first = false
            }
            end({})
        })
        let timeout
        for (; ;) {
            const v = await Promise.race<{ v: T[] } | {}>([new Promise<{ v: T[] }>(res => timeout = setTimeout(() => (res({ v: buffer }), buffer = []), n)), endp])
            clearTimeout(timeout)
            if ('v' in v) {
                if (first) continue
                yield v.v
            }
            else {
                if (buffer.length != 0) yield buffer
                return
            }
        }
    }
}

export async function* breakBy<T>(iter: AsyncIterable<T>, f?: (v: T) => unknown): AsyncIterable<T> {
    if (f == null) return
    for await (const e of iter) {
        if (f(e)) return
    }
}

export async function* takeIf<T>(iter: AsyncIterable<T>, f?: (v: T) => unknown): AsyncIterable<T> {
    if (f == null) return
    for await (const e of iter) {
        if (!f(e)) return
    }
}

export async function* skipIf<T>(iter: AsyncIterable<T>, f: (v: T) => unknown): AsyncIterable<T> {
    const it = iter[Symbol.asyncIterator]()
    let p = it.next()
    for (; ;) {
        const r = await p
        if (r.done) return
        if (!f(r.value)) return yield* Continue(p, it)
        p = it.next()
    }
}

export async function* startBy<T>(iter: AsyncIterable<T>, f: (v: T) => unknown): AsyncIterable<T> {
    const it = iter[Symbol.asyncIterator]()
    let p = it.next()
    for (; ;) {
        const r = await p
        if (r.done) return
        if (f(r.value)) return yield* Continue(p, it)
        p = it.next()
    }
}

export async function* drop<T>(iter: AsyncIterable<T>): AsyncIterable<void> {
    for await (const _ of iter) {
        yield
    }
}

export async function* forEnd<T>(iter: AsyncIterable<T>): AsyncIterable<any> {
    for await (const _ of iter) { }
}

export async function* breakAt<T>(iter: AsyncIterable<T>, single: AsyncIterable<unknown> | PromiseLike<unknown>): AsyncIterable<T> {
    if (Symbol.asyncIterator in single) {
        single = first(single as AsyncIterable<unknown>)
    }
    const endp = new Promise<{}>(async r => {
        await single
        r({})
    })
    const it = iter[Symbol.asyncIterator]()
    let p = it.next().then(v => ({ v }))
    for (; ;) {
        const r = await Promise.race<{ v: IteratorResult<T> } | {}>([p, endp])
        if ('v' in r) {
            if (r.v.done) return
            yield r.v.value
            p = it.next().then(v => ({ v }))
        }
        else return
    }
}

export async function* startAt<T>(iter: AsyncIterable<T>, single: AsyncIterable<unknown> | PromiseLike<unknown>): AsyncIterable<T> {
    if (Symbol.asyncIterator in single) {
        single = first(single as AsyncIterable<unknown>)
    }
    const endp = new Promise<{}>(async r => {
        await single
        r({})
    })
    const it = iter[Symbol.asyncIterator]()
    let p = it.next()
    for (; ;) {
        const r = await Promise.race<{ v: IteratorResult<T> } | {}>([p.then(v => ({ v })), endp])
        if ('v' in r) {
            if (r.v.done) return
            p = it.next()
        }
        else return yield* Continue(p, it)
    }
}

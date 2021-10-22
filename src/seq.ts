import { Flu } from "./flu"
import { Voidable } from "./maybe"
import { Option } from "./option"

export function seq<T>(iter: Iterable<T>): Seq<T> {
    return new Seq(() => iter)
}

export class Seq<T> implements Iterable<T> {
    constructor(public readonly iter: () => Iterable<T>) { }

    [Symbol.iterator](): Iterator<T> {
        return this.iter()[Symbol.iterator]()
    }

    static empty<T>(): Seq<T> {
        return new Seq(function* () { })
    }

    static by<T>(iter: () => Iterable<T>): Seq<T> {
        return new Seq(iter)
    }

    static of<T>(...iter: T[]): Seq<T> {
        return seq(iter)
    }

    /** Create a Seq from a range starting from 0 */
    static to(to: number, step: number = 1): Seq<number> {
        step = Math.abs(step)
        if (step <= 0) step = 1
        return new Seq(function* () {
            for (let i = 0; i < to; i += step) {
                yield i
            }
        })
    }

    /** Create a Seq from a range */
    static range(from: number, to: number, step: number = 1): Seq<number> {
        step = Math.abs(step)
        if (step <= 0) step = 1
        const inc = from > to ? -step : step
        return new Seq(function* () {
            for (let i = from; i < to; i += inc) {
                yield i
            }
        })
    }

    flu(): Flu<T> {
        return Flu.from(this.iter())
    }

    toFlu(): T extends infer R | Promise<infer R> ? Flu<R> : never {
        return Flu.fromIter(this as any) as any
    }

    collect(): T[] {
        return collect(this.iter())
    }

    join(separator?: string): string {
        return join(this.iter(), separator)
    }

    count(): number {
        return count(this.iter())
    }

    isEmpty(): boolean {
        return isEmpty(this.iter())
    }

    first(): Voidable<T> {
        return first(this.iter())
    }

    firstO(): Option<T> {
        return firstO(this.iter())
    }

    last(): Voidable<T> {
        return last(this.iter())
    }

    lastO(): Option<T> {
        return lastO(this.iter())
    }

    nth(n: number): Voidable<T> {
        return nth(this.iter(), n)
    }

    nthO(n: number): Option<T> {
        return nthO(this.iter(), n)
    }

    stepBy(step: number): Seq<T> {
        return new Seq(() => stepBy(this, step))
    }

    chain(other: Iterable<T>, ...more: Iterable<T>[]): Seq<T> {
        return new Seq(() => chain(this, other, ...more))
    }

    zip<U>(other: Iterable<U>): Seq<[T, U]> {
        return new Seq(() => zip(this, other))
    }

    unzip(): [
        (T extends [infer A, any] | readonly [infer A, any] | (infer A)[] ? A : unknown)[],
        (T extends [any, infer B] | readonly [any, infer B] | (infer B)[] ? B : unknown)[],
    ]
    unzip(): any {
        return unzip(this.iter() as any) as any
    }

    map<R>(f: (v: T) => R): Seq<R> {
        return new Seq(() => map(this, f))
    }

    fill<R>(v: R): Seq<R> {
        return new Seq(() => fill(this, v))
    }

    forEach(f: (v: T) => unknown): void {
        return forEach(this.iter(), f)
    }

    run(): void {
        return run(this.iter())
    }

    filter<S extends T>(f: (v: T) => v is S): Seq<S>
    filter(f: (v: T) => unknown): Seq<T>
    filter(f: (v: T) => unknown): Seq<T> {
        return new Seq(() => filter(this, f))
    }

    enumerate(): Seq<[T, number]> {
        return new Seq(() => enumerate(this))
    }

    skip(n: number): Seq<T> {
        return new Seq(() => skip(this, n))
    }

    take(n: number): Seq<T> {
        return new Seq(() => take(this, n))
    }

    slice(from: number, to: number): Seq<T> {
        return new Seq(() => slice(this, from, to))
    }

    sub(from: number, count: number): Seq<T> {
        return new Seq(() => sub(this, from, count))
    }

    scan<R>(init: R, f: (acc: R, val: T) => R): Seq<R> {
        return new Seq(() => scan(this, init, f))
    }

    flatMap<R>(f: (v: T) => Iterable<R>): Seq<R> {
        return new Seq(() => flatMap(this, f))
    }

    flatten(): T extends Iterable<infer R> ? Seq<R> : never {
        return new Seq(() => flatten(this as any)) as any
    }

    also(f: (v: T) => void): Seq<T> {
        return new Seq(() => also(this, f))
    }

    fold<R>(init: R, f: (acc: R, val: T) => R): R {
        return fold(this.iter(), init, f)
    }

    reduce(f: (acc: T, val: T) => T): T {
        return reduce(this.iter(), f)
    }

    all(f: (v: T) => unknown): boolean
    all<S extends T>(f: (v: T) => v is S): this is Seq<S>
    all<S extends T>(f: (v: T) => v is S): this is Seq<S> {
        return all(this, f)
    }

    any(f: (v: T) => unknown): boolean {
        return any(this.iter(), f)
    }

    find(f: (v: T) => unknown): Voidable<T> {
        return find(this.iter(), f)
    }

    findO(f: (v: T) => unknown): Option<T> {
        return findO(this.iter(), f)
    }

    position(f: (v: T) => unknown): number {
        return position(this.iter(), f)
    }

    indexOf(v: T): number {
        return indexOf(this.iter(), v)
    }

    max(): Voidable<T> {
        return max(this.iter())
    }

    maxO(): Option<T> {
        return maxO(this.iter())
    }

    min(): Voidable<T> {
        return min(this.iter())
    }

    minO(): Option<T> {
        return minO(this.iter())
    }

    push(...items: T[]): Seq<T> {
        return new Seq(() => push(this, ...items))
    }

    unshift(...items: T[]): Seq<T> {
        return new Seq(() => unshift(this, ...items))
    }

    as<U>(): Seq<U> {
        return this as any
    }

    groupBy<K>(keyf: (v: T) => K): Seq<[K, T[]]>
    groupBy<K, V>(keyf: (v: T) => K, valf: (v: T) => V): Seq<[K, V[]]>
    groupBy<K, V>(keyf: (v: T) => K, valf?: (v: T) => V): Seq<[K, (T | V)[]]> {
        return new Seq(() => groupBy(this, keyf, valf!))
    }

    toArray(): T[] {
        return toArray(this.iter())
    }

    toSet(): Set<T> {
        return toSet(this.iter())
    }

    toMap(): T extends [infer K, infer V] ? Map<K, V> : never {
        return toMap(this.iter() as any) as any
    }
}

export function of<T>(...iter: T[]): Iterable<T> {
    return iter
}

export function collect<T>(iter: Iterable<T>): T[] {
    return [...iter]
}

export function join<T>(iter: Iterable<T>, separator?: string): string {
    return [...iter].join(separator)
}

export function count<T>(iter: Iterable<T>): number {
    if ('length' in iter) return (iter as any).length
    if ('size' in iter) return (iter as any).size
    let i = 0
    for (const _ of iter) i++
    return i
}

export function isEmpty<T>(iter: Iterable<T>): boolean {
    if ('length' in iter) return (iter as any).length == 0
    if ('size' in iter) return (iter as any).size == 0
    for (const _ of iter) return false
    return true
}

export function first<T>(iter: Iterable<T>): Voidable<T> {
    for (const i of iter) return i
}

export function firstO<T>(iter: Iterable<T>): Option<T> {
    for (const i of iter) return Option.some(i)
    return Option.None
}

export function last<T>(iter: Iterable<T>): Voidable<T> {
    if (iter instanceof Array) return iter[iter.length - 1]
    let r: Voidable<T>
    for (const i of iter) {
        r = i
    }
    return r
}

export function lastO<T>(iter: Iterable<T>): Option<T> {
    if (iter instanceof Array) return iter.length == 0 ? Option.None : Option.some(iter[iter.length - 1])
    let r: Voidable<T>, has: boolean = false
    for (const i of iter) {
        r = i
        has = true
    }
    return has ? Option.some(r) : Option.None
}

export function nth<T>(iter: Iterable<T>, n: number): Voidable<T> {
    if (iter instanceof Array) return iter[n]
    let i = 0
    for (const e of iter) {
        if (i == n) return e
        i++
    }
    return
}

export function nthO<T>(iter: Iterable<T>, n: number): Option<T> {
    if (iter instanceof Array) return iter.length > n ? Option.some(iter[n]) : Option.None
    let i = 0
    for (const e of iter) {
        if (i == n) return Option.some(e)
        i++
    }
    return Option.None
}

export function* stepBy<T>(iter: Iterable<T>, step: number): Iterable<T> {
    if (step < 1) step = 1
    let i = 0, first = true
    for (const e of iter) {
        if (first || i >= step) {
            yield e
            i = 1
        } else {
            i++
        }
        first = false
    }
}

export function* chain<T>(a: Iterable<T>, b: Iterable<T>, ...more: Iterable<T>[]): Iterable<T> {
    yield* a
    yield* b
    for (const iter of more) {
        yield* iter
    }
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

export function unzip<A, B>(iter: Iterable<[A, B]>): [A[], B[]] {
    let [a, b]: [A[], B[]] = [[], []]
    for (const i of iter) {
        a.push(i[0])
        b.push(i[1])
    }
    return [a, b]
}

export function* map<T, R>(iter: Iterable<T>, f: (v: T) => R): Iterable<R> {
    for (const i of iter) {
        yield f(i)
    }
}

export function* fill<T, R>(iter: Iterable<T>, v: R): Iterable<R> {
    for (const _ of iter) {
        yield v
    }
}

export function forEach<T>(iter: Iterable<T>, f: (v: T) => unknown): void {
    for (const i of iter) {
        f(i)
    }
}

export function run<T>(iter: Iterable<T>): void {
    for (const _ of iter) { }
}

export function filter<T, S extends T>(iter: Iterable<T>, f: (v: T) => v is S): Iterable<S>
export function filter<T>(iter: Iterable<T>, f: (v: T) => unknown): Iterable<T>
export function* filter<T>(iter: Iterable<T>, f: (v: T) => unknown): Iterable<T> {
    for (const i of iter) {
        if (f(i)) yield i
    }
}

export function* enumerate<T>(iter: Iterable<T>): Iterable<[T, number]> {
    let i = 0
    for (const e of iter) {
        yield [e, i]
        i++
    }
}

export function* skip<T>(iter: Iterable<T>, n: number): Iterable<T> {
    for (const [e, i] of enumerate(iter)) {
        if (i >= n) yield e
    }
}

export function* take<T>(iter: Iterable<T>, n: number): Iterable<T> {
    for (const [e, i] of enumerate(iter)) {
        yield e
        if (i + 1 >= n) return
    }
}

export function* slice<T>(iter: Iterable<T>, from: number, to: number): Iterable<T> {
    for (const [e, i] of enumerate(iter)) {
        if (i >= from) yield e
        if (i + 1 >= to) return
    }
}

export function sub<T>(iter: Iterable<T>, from: number, count: number): Iterable<T> {
    return slice(iter, from, count + from)
}


export function* scan<T, R>(iter: Iterable<T>, init: R, f: (acc: R, val: T) => R): Iterable<R> {
    let acc = init
    for (const i of iter) {
        acc = f(acc, i)
        yield acc
    }
}

export function* flatMap<T, R>(iter: Iterable<T>, f: (v: T) => Iterable<R>): Iterable<R> {
    for (const i of iter) {
        yield* f(i)
    }
}

export function* flatten<T>(iter: Iterable<Iterable<T>>): Iterable<T> {
    for (const i of iter) {
        yield* i
    }
}

export function* also<T>(iter: Iterable<T>, f: (v: T) => void): Iterable<T> {
    for (const i of iter) {
        f(i)
        yield i
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

export function all<T, S extends T>(a: Iterable<T>, f: (v: T) => v is S): a is Iterable<S> {
    for (const i of a) {
        if (!f(i)) return false
    }
    return true
}

export function any<T>(a: Iterable<T>, f: (v: T) => unknown): boolean {
    for (const i of a) {
        if (f(i)) return true
    }
    return false
}

export function find<T>(a: Iterable<T>, f: (v: T) => unknown): Voidable<T> {
    for (const i of a) {
        if (f(i)) return i
    }
}

export function findO<T>(a: Iterable<T>, f: (v: T) => unknown): Option<T> {
    for (const i of a) {
        if (f(i)) return Option.some(i)
    }
    return Option.None
}

export function position<T>(a: Iterable<T>, f: (v: T) => unknown): number {
    for (const [e, i] of enumerate(a)) {
        if (f(e)) return i
    }
    return -1
}

export function indexOf<T>(a: Iterable<T>, v: T): number {
    for (const [e, i] of enumerate(a)) {
        if (e == v) return i
    }
    return -1
}

export function max<T>(a: Iterable<T>): Voidable<T> {
    let r: Voidable<T>, first = true
    for (const i of a) {
        if (first) (r = i, first = false)
        else if (i > r!) r = i
    }
    return r
}

export function maxO<T>(a: Iterable<T>): Option<T> {
    let r: Voidable<T>, first = true
    for (const i of a) {
        if (first) (r = i, first = false)
        else if (i > r!) r = i
    }
    return first ? Option.None : Option.some(r)
}

export function min<T>(a: Iterable<T>): Voidable<T> {
    let r: Voidable<T>, first = true
    for (const i of a) {
        if (first) (r = i, first = false)
        else if (i < r!) r = i
    }
    return r
}

export function minO<T>(a: Iterable<T>): Option<T> {
    let r: Voidable<T>, first = true
    for (const i of a) {
        if (first) (r = i, first = false)
        else if (i < r!) r = i
    }
    return first ? Option.None : Option.some(r)
}

export function* push<T>(a: Iterable<T>, ...items: T[]): Iterable<T> {
    yield* a
    yield* items
}

export function* unshift<T>(a: Iterable<T>, ...items: T[]): Iterable<T> {
    yield* items
    yield* a
}

export function as<T, U>(a: Iterable<T>): Iterable<U> {
    return a as any
}

export function groupBy<T, K>(a: Iterable<T>, keyf: (v: T) => K): Iterable<[K, T[]]>
export function groupBy<T, K, V>(a: Iterable<T>, keyf: (v: T) => K, valf: (v: T) => V): Iterable<[K, V[]]>
export function groupBy<T, K, V>(a: Iterable<T>, keyf: (v: T) => K, valf?: (v: T) => V): Iterable<[K, (V | T)[]]> {
    const groups = new Map<K, (V | T)[]>()
    for (const e of a) {
        const key = keyf(e)
        const val = valf?.(e) ?? e
        let group = groups.get(key)
        if (group == null) groups.set(key, group = [])
        group.push(val)
    }
    return groups
}

export function toArray<T>(a: Iterable<T>): T[] {
    if (a instanceof Array) return a
    return Array.from(a)
}

export function toSet<T>(a: Iterable<T>): Set<T> {
    if (a instanceof Set) return a
    return new Set(a)
}

export function toMap<K, V>(a: Iterable<[K, V]>): Map<K, V> {
    if (a instanceof Map) return a
    return new Map(a)
}

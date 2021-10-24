import { Flu } from "./flu"
import { Voidable } from "./maybe"
import { Option } from "./option"
import { SeqLinq } from "./seq/linq"
import { all, also, any, avg, chain, collect, count, enumerate, fill, filter, find, findO, first, firstO, flatMap, flatten, fold, forEach, groupBy, includes, indexed, indexOf, isEmpty, join, last, lastO, map, max, maxO, min, minO, nth, nthO, position, push, reduce, relate, relateMap, run, scan, skip, slice, stepBy, sub, sum, take, toArray, toMap, toSet, unshift, unzip, zip } from "./seq/ops"
export * from './seq/ops'

export function seq<T>(iter: Iterable<T>): Seq<T> {
    return new Seq(() => iter)
}

/** Seq(sequence), A iterator / sequence / enumerator
 * @template T item type
 */
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

    static repeat<T>(v: T, n: number): Seq<T> {
        return new Seq(function* () {
            for (let i = 0; i < n; i++) {
                yield v
            }
        })
    }

    linq(): SeqLinq<T> {
        return new SeqLinq(this.iter)
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

    indexed(): Seq<[number, T]> {
        return new Seq(() => indexed(this))
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

    all<S extends T>(f: (v: T) => v is S): this is Seq<S>
    all(f: (v: T) => unknown): boolean
    all(f: (v: T) => unknown): boolean {
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

    includes(v: T): boolean {
        return includes(this.iter(), v)
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

    sum(defv: T): T extends number | bigint | string ? T : never
    sum(): T extends number | bigint | string ? Voidable<T> : never
    sum(defv: Voidable<T> = void 0): T extends number | bigint | string ? Voidable<T> : never {
        return sum(this.iter() as any, defv as any) as any
    }

    avg(defv: T): T extends number | bigint ? T : never
    avg(): T extends number | bigint ? Voidable<T> : never
    avg(defv: Voidable<T> = void 0): T extends number | bigint ? Voidable<T> : never {
        return avg(this.iter() as any, defv as any) as any
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

    toArray(): T[] {
        return toArray(this.iter())
    }

    toSet(): Set<T> {
        return toSet(this.iter())
    }

    toMap(): T extends [infer K, infer V] ? Map<K, V> : never {
        return toMap(this.iter() as any) as any
    }

    groupBy<K>(keyf: (v: T) => K): Seq<[K, T[]]>
    groupBy<K, V>(keyf: (v: T) => K, valf: (v: T) => V): Seq<[K, V[]]>
    groupBy<K, V>(keyf: (v: T) => K, valf?: (v: T) => V): Seq<[K, (T | V)[]]> {
        return new Seq(() => groupBy(this, keyf, valf!))
    }

    relate<I, K>(inner: Iterable<I>, outerKey: (a: T) => K, innerKey: (b: I) => K): Seq<[T, I]> {
        return new Seq(() => relate(this, inner, outerKey, innerKey))
    }

    relateMap<I, K, R>(inner: Iterable<I>, outerKey: (a: T) => K, innerKey: (b: I) => K, selector: (a: T, b: I) => R): Seq<R> {
        return new Seq(() => relateMap(this, inner, outerKey, innerKey, selector))
    }
}

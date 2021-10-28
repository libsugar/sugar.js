import { Flu } from '../flu'
import { Voidable } from '../maybe'
import { Seq } from '.'

export {
    filter as where, all, any, includes as contains, map as select, flatMap as selectMany, zip, skip, take, relateMap as join, relate as joinPair, groupBy, nth as elementAt,
    first, last, find as single, as as cast, toArray, toMap, toSet, chain as concat, fold as aggregate, avg as average, count, min, max, sum
} from './ops'
import {
    where, all, any, contains, select, selectMany, zip, skip, take, join, joinPair, groupBy, elementAt, first, last, single,
    toArray, toMap, toSet, concat, aggregate, average, count, min, max, sum
} from './linq'

export class SeqLinq<T> implements Iterable<T> {
    constructor(public readonly iter: () => Iterable<T>) { }

    [Symbol.iterator](): Iterator<T> {
        return this.iter()[Symbol.iterator]()
    }

    static empty<T>(): SeqLinq<T> {
        return new this(function* () { })
    }

    /** Create a SeqLinq from a range starting from 0 */
    static to(to: number, step: number = 1): SeqLinq<number> {
        step = Math.abs(step)
        if (step <= 0) step = 1
        return new this(function* () {
            for (let i = 0; i < to; i += step) {
                yield i
            }
        })
    }

    /** Create a SeqLinq from a range */
    static range(from: number, to: number, step: number = 1): SeqLinq<number> {
        step = Math.abs(step)
        if (step <= 0) step = 1
        const inc = from > to ? -step : step
        return new this(function* () {
            for (let i = from; i < to; i += inc) {
                yield i
            }
        })
    }

    static repeat<T>(v: T, n: number): SeqLinq<T> {
        return new this(function* () {
            for (let i = 0; i < n; i++) {
                yield v
            }
        })
    }

    seq(): Seq<T> {
        return new Seq(this.iter)
    }

    flu(): Flu<T> {
        return Flu.from(this.iter())
    }

    toFlu(): T extends infer R | Promise<infer R> ? Flu<R> : never {
        return Flu.fromIter(this as any) as any
    }

    where(f: (v: T) => unknown) {
        return where(this, f)
    }

    all<S extends T>(f: (v: T) => v is S): this is SeqLinq<S>
    all(f: (v: T) => unknown): boolean
    all(f: (v: T) => unknown): boolean {
        return all(this, f)
    }

    any(f: (v: T) => unknown): boolean {
        return any(this.iter(), f)
    }

    contains(v: T): boolean {
        return contains(this.iter(), v)
    }

    select<R>(f: (v: T) => R): SeqLinq<R> {
        return new SeqLinq(() => select(this, f))
    }

    selectMany<R>(f: (v: T) => Iterable<R>): SeqLinq<R> {
        return new SeqLinq(() => selectMany(this, f))
    }

    zip<U>(other: Iterable<U>): SeqLinq<[T, U]> {
        return new SeqLinq(() => zip(this, other))
    }

    skip(n: number): SeqLinq<T> {
        return new SeqLinq(() => skip(this, n))
    }

    take(n: number): SeqLinq<T> {
        return new SeqLinq(() => take(this, n))
    }

    join<I, K, R>(inner: Iterable<I>, outerKey: (a: T) => K, innerKey: (b: I) => K, selector: (a: T, b: I) => R): SeqLinq<R> {
        return new SeqLinq(() => join(this, inner, outerKey, innerKey, selector))
    }

    joinPair<I, K>(inner: Iterable<I>, outerKey: (a: T) => K, innerKey: (b: I) => K): SeqLinq<[T, I]> {
        return new SeqLinq(() => joinPair(this, inner, outerKey, innerKey))
    }

    groupBy<K>(keyf: (v: T) => K): SeqLinq<[K, T[]]>
    groupBy<K, V>(keyf: (v: T) => K, valf: (v: T) => V): SeqLinq<[K, V[]]>
    groupBy<K, V>(keyf: (v: T) => K, valf?: (v: T) => V): SeqLinq<[K, (T | V)[]]> {
        return new SeqLinq(() => groupBy(this, keyf, valf!))
    }

    elementAt(n: number): Voidable<T> {
        return elementAt(this.iter(), n)
    }

    first(): Voidable<T> {
        return first(this.iter())
    }

    last(): Voidable<T> {
        return last(this.iter())
    }

    find(f: (v: T) => unknown): Voidable<T> {
        return single(this.iter(), f)
    }

    cast<U>(): SeqLinq<U> {
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

    concat(other: Iterable<T>, ...more: Iterable<T>[]): SeqLinq<T> {
        return new SeqLinq(() => concat(this, other, ...more))
    }

    aggregate<R>(init: R, f: (acc: R, val: T) => R): R {
        return aggregate(this.iter(), init, f)
    }

    average(defv: T): T extends number | bigint ? T : never
    average(): T extends number | bigint ? Voidable<T> : never
    average(defv: Voidable<T> = void 0): T extends number | bigint ? Voidable<T> : never {
        return average(this.iter() as any, defv as any) as any
    }

    count(): number {
        return count(this.iter())
    }

    min(): Voidable<T> {
        return min(this.iter())
    }

    max(): Voidable<T> {
        return max(this.iter())
    }

    sum(defv: T): T extends number | bigint | string ? T : never
    sum(): T extends number | bigint | string ? Voidable<T> : never
    sum(defv: Voidable<T> = void 0): T extends number | bigint | string ? Voidable<T> : never {
        return sum(this.iter() as any, defv as any) as any
    }
}

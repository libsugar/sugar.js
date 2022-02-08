import { Voidable } from "../maybe"
import * as seq from './ops'

export { collect, count, isEmpty, first, last } from './ops'

export function join(separator?: string): <T>(iter: Iterable<T>) => string {
    return iter => seq.join(iter, separator)
}

export function nth(n: number): <T>(iter: Iterable<T>) => Voidable<T> {
    return iter => seq.nth(iter, n)
}

export function stepBy(step: number): <T>(iter: Iterable<T>) => Iterable<T> {
    return iter => seq.stepBy(iter, step)
}

export function chain<T>(b: Iterable<T>, ...more: Iterable<T>[]): (a: Iterable<T>) => Iterable<T> {
    return a => seq.chain(a, b, ...more)
}

export function zip<B>(b: Iterable<B>): <A>(a: Iterable<A>) => Iterable<[A, B]> {
    return a => seq.zip(a, b)
}

export { unzip } from './ops'

export function map<T, R>(f: (v: T) => R): (iter: Iterable<T>) => Iterable<R> {
    return iter => seq.map(iter, f)
}

export function fill<R>(v: R): <T>(iter: Iterable<T>) => Iterable<R> {
    return iter => seq.fill(iter, v)
}

export function forEach<T>(f: (v: T) => unknown): (iter: Iterable<T>) => void {
    return iter => seq.forEach(iter, f)
}

export { run } from './ops'

export function filter<T, S extends T>(f: (v: T) => v is S): (iter: Iterable<T>) => Iterable<S>
export function filter<T>(f: (v: T) => unknown): (iter: Iterable<T>) => Iterable<T>
export function filter<T>(f: (v: T) => unknown): (iter: Iterable<T>) => Iterable<T> {
    return iter => seq.filter(iter, f)
}

export { enumerate, indexed } from './ops'

export function skip(n: number): <T>(iter: Iterable<T>) => Iterable<T> {
    return iter => seq.skip(iter, n)
}

export function take(n: number): <T>(iter: Iterable<T>) => Iterable<T> {
    return iter => seq.take(iter, n)
}

export function slice(from: number, to: number): <T>(iter: Iterable<T>) => Iterable<T> {
    return iter => seq.slice(iter, from, to)
}

export function sub(from: number, count: number): <T>(iter: Iterable<T>) => Iterable<T> {
    return iter => seq.sub(iter, from, count)
}

export function scan<T, R>(f: (acc: R, val: T) => R, init: R): (iter: Iterable<T>) => Iterable<R> {
    return iter => seq.scan(iter, init, f)
}

export function flatMap<T, R>(f: (v: T) => Iterable<R>): (iter: Iterable<T>) => Iterable<R> {
    return iter => seq.flatMap(iter, f)
}

export { flatten } from './ops'

export function also<T>(f: (v: T) => void): (iter: Iterable<T>) => Iterable<T> {
    return iter => seq.also(iter, f)
}

export function fold<T, R>(f: (acc: R, val: T) => R, init: R): (a: Iterable<T>) => R {
    return a => seq.fold(a, init, f)
}

export function reduce<T>(f: (acc: T, val: T) => T): (a: Iterable<T>) => T {
    return a => seq.reduce(a, f)
}

export function all<T, S extends T>(f: (v: T) => v is S): (a: Iterable<T>) => a is Iterable<S>
export function all<T>(f: (v: T) => unknown): (a: Iterable<T>) => boolean
export function all<T>(f: (v: T) => unknown): (a: Iterable<T>) => boolean {
    return a => seq.all(a, f)
}

export function any<T>(f: (v: T) => unknown): (a: Iterable<T>) => boolean {
    return a => seq.any(a, f)
}

export function find<T>(f: (v: T) => unknown): (a: Iterable<T>) => Voidable<T> {
    return a => seq.find(a, f)
}

export function position<T>(f: (v: T) => unknown): (a: Iterable<T>) => number {
    return a => seq.position(a, f)
}

export function indexOf<T>(v: T): (a: Iterable<T>) => number {
    return a => seq.indexOf(a, v)
}

export { max, min } from './ops'

export function push<T>(...items: T[]): (a: Iterable<T>) => Iterable<T> {
    return a => seq.push(a, ...items)
}

export function unshift<T>(...items: T[]): (a: Iterable<T>) => Iterable<T> {
    return a => seq.unshift(a, ...items)
}

export function as<U>(): <T>(a: Iterable<T>) => Iterable<U> {
    return a => seq.as(a)
}

export { toArray, toSet, toMap } from './ops'

export function groupBy<T, K>(keyf: (v: T) => K): (a: Iterable<T>) => Iterable<[K, T[]]>
export function groupBy<T, K, V>(keyf: (v: T) => K, valf: (v: T) => V): (a: Iterable<T>) => Iterable<[K, V[]]>
export function groupBy<T, K, V>(keyf: (v: T) => K, valf?: (v: T) => V): (a: Iterable<T>) => Iterable<[K, (V | T)[]]> {
    return a => seq.groupBy(a, keyf, valf!)
}

export function relate<O, I, K>(outerKey: (a: O) => K, innerKey: (b: I) => K): (inner: Iterable<I>) => (outer: Iterable<O>) => Iterable<[O, I]> {
    return inner => outer => seq.relate(outer, inner, outerKey, innerKey)
}

export function relateMap<O, I, K, R>(outerKey: (a: O) => K, innerKey: (b: I) => K, selector: (a: O, b: I) => R): (inner: Iterable<I>) => (outer: Iterable<O>) => Iterable<R> {
    return inner => outer => seq.relateMap(outer, inner, outerKey, innerKey, selector)
}

export function mapKey<K, V, R>(f: (key: K) => R): (iter: Iterable<[K, V]>) => Iterable<[R, V]> {
    return iter => seq.mapKey(iter, f)
}

export function mapValue<K, V, R>(f: (val: V) => R): (iter: Iterable<[K, V]>) => Iterable<[K, R]> {
    return iter => seq.mapValue(iter, f)
}

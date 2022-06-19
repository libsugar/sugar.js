import { Voidable, Option } from '@libsugar/adt'
import { OnceIter } from '@libsugar/iter'
import type { ArrayElement, ArrayGuard, FlatIterable, IterableNest } from '@libsugar/types'

export function of<T>(...iter: T[]): Iterable<T> {
    return iter
}

export function collect<T>(iter: Iterable<T>): T[]
export function collect<T, C extends new (iter: Iterable<T>) => any>(iter: Iterable<T>, ctor: C): InstanceType<C>
export function collect<T, C extends new (iter: Iterable<T>) => any>(iter: Iterable<T>, ctor?: C): T[] | InstanceType<C> {
    if (ctor) return new ctor(iter)
    else return [...iter]
}

export function joinStr<T>(iter: Iterable<T>, separator?: string): string {
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

export function isNotEmpty<T>(iter: Iterable<T>): boolean {
    return !isEmpty(iter)
}

export function first<T>(iter: Iterable<T>): Voidable<T> {
    for (const i of iter) return i
}

export function tryFirst<T>(iter: Iterable<T>): Option<T> {
    for (const i of iter) return Option.some(i)
    return Option.none()
}

export function last<T>(iter: Iterable<T>): Voidable<T> {
    if (iter instanceof Array) return iter[iter.length - 1]
    let r: Voidable<T>
    for (const i of iter) {
        r = i
    }
    return r
}

export function tryLast<T>(iter: Iterable<T>): Option<T> {
    if (iter instanceof Array) return iter.length == 0 ? Option.none() : Option.some(iter[iter.length - 1])
    let r: Voidable<T>,
        has: boolean = false
    for (const i of iter) {
        r = i
        has = true
    }
    return has ? Option.some(r!) : Option.none()
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

export function tryNth<T>(iter: Iterable<T>, n: number): Option<T> {
    if (iter instanceof Array) return iter.length > n ? Option.some(iter[n]) : Option.none()
    let i = 0
    for (const e of iter) {
        if (i == n) return Option.some(e)
        i++
    }
    return Option.none()
}

export function* stepBy<T>(iter: Iterable<T>, step: number): Iterable<T> {
    if (step < 1) step = 1
    let i = 0,
        first = true
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

export function sort<T>(iter: Iterable<T>, compare?: (a: T, b: T) => number): T[] {
    return [...iter].sort(compare)
}

export function orderBy<T>(iter: Iterable<T>, selector: (v: T) => any): T[]
export function orderBy<T>(iter: Iterable<T>, order: 'asc' | 'desc', selector: (v: T) => any): T[]
export function orderBy<T, R>(iter: Iterable<T>, selector: (v: T) => R, compare: (a: R, b: R) => number): T[]
export function orderBy<T, R>(iter: Iterable<T>, order: 'asc' | 'desc', selector: (v: T) => R, compare: (a: R, b: R) => number): T[]
export function orderBy<T, R>(
    iter: Iterable<T>,
    order?: ((v: T) => R) | 'asc' | 'desc',
    selector?: ((a: R, b: R) => number) | ((v: T) => R),
    compare?: (a: R, b: R) => number
): T[] {
    const [_order, _selector, _compare] =
        typeof order === 'function'
            ? ['asc', order as (v: T) => any, selector as ((a: R, b: R) => number) | undefined]
            : [order as string, selector as (v: T) => any, compare as ((a: R, b: R) => number) | undefined]
    return sort(iter, (a, b) => {
        const ar = _selector(a)
        const br = _selector(b)
        if (_order == 'desc') {
            if (_compare) return _compare(br, ar)
            if (ar > br) return -1
            else if (ar < br) return 1
            return 0
        } else {
            if (_compare) return _compare(ar, br)
            if (ar > br) return 1
            else if (ar < br) return -1
            return 0
        }
    })
}

export function* reverse<T>(iter: Iterable<T>): Iterable<T> {
    const arr = iter instanceof Array ? (iter as T[]) : [...iter]
    for (let i = arr.length - 1; i >= 0; i--) {
        yield arr[i]
    }
}

export function* concat<T>(a: Iterable<T>, b: Iterable<T>, ...more: Iterable<T>[]): Iterable<T> {
    yield* a
    yield* b
    for (const iter of more) {
        yield* iter
    }
}

export function zip<A, B>(a: Iterable<A>, b: Iterable<B>): Iterable<[A, B]>
export function zip<O extends [any, any, ...any[]]>(...iters: { [K in keyof O]: Iterable<O[K]> }): Iterable<O>
export function* zip<O extends [any, any, ...any[]]>(...iters: { [K in keyof O]: Iterable<O[K]> }): Iterable<O> {
    if (iters.length == 0) return
    const itors = iters.map(i => i[Symbol.iterator]())
    for (;;) {
        const vals = new Array<ArrayElement<O>>(iters.length)
        for (const [i, itor] of entries(itors)) {
            const v = itor.next()
            if (v.done) return
            vals[i] = v.value
        }
        yield vals as O
    }
}

export function unzip<A, B>(iter: Iterable<[A, B]>): [A[], B[]]
export function unzip<O extends [any, any, ...any[]]>(iter: Iterable<O>): { [K in keyof O]: O[K][] }
export function unzip<O extends [any, any, ...any[]]>(iter: Iterable<O>): { [K in keyof O]: O[K][] } {
    let arrs: { [K in keyof O]: O[K][] } = [] as any
    for (const arr of iter) {
        for (const [i, e] of entries(arr)) {
            arrs[i] ??= []
            arrs[i].push(e)
        }
    }
    return arrs
}

export function* map<T, R>(iter: Iterable<T>, f: (v: T, i: number) => R): Iterable<R> {
    for (const [i, e] of entries(iter)) {
        yield f(e, i)
    }
}

export function* fill<T, R>(iter: Iterable<T>, v: R): Iterable<R> {
    for (const _ of iter) {
        yield v
    }
}

export function forEach<T>(iter: Iterable<T>, f: (v: T, i: number) => unknown): void {
    for (const [i, e] of entries(iter)) {
        f(e, i)
    }
}

export function run<T>(iter: Iterable<T>): void {
    for (const _ of iter) {
    }
}

export function filter<T, S extends T>(iter: Iterable<T>, f: (v: T, i: number) => v is S): Iterable<S>
export function filter<T>(iter: Iterable<T>, f: (v: T, i: number) => unknown): Iterable<T>
export function* filter<T>(iter: Iterable<T>, f: (v: T, i: number) => unknown): Iterable<T> {
    for (const [i, e] of entries(iter)) {
        if (f(e, i)) yield e
    }
}

export function* indexed<T>(iter: Iterable<T>): Iterable<[T, number]> {
    let i = 0
    for (const e of iter) {
        yield [e, i]
        i++
    }
}

export function* entries<T>(iter: Iterable<T>): Iterable<[number, T]> {
    if (iter instanceof Array) return void (yield* iter.entries())
    let i = 0
    for (const e of iter) {
        yield [i, e]
        i++
    }
}

export function* keys<T>(iter: Iterable<T>): Iterable<number> {
    if (iter instanceof Array) return void (yield* iter.keys())
    let i = 0
    for (const _ of iter) {
        yield i
        i++
    }
}

export function values<T>(iter: Iterable<T>): Iterable<T> {
    return iter
}

export function* skip<T>(iter: Iterable<T>, n: number): Iterable<T> {
    for (const [i, e] of entries(iter)) {
        if (i >= n) yield e
    }
}

export function* take<T>(iter: Iterable<T>, n: number): Iterable<T> {
    for (const [i, e] of entries(iter)) {
        yield e
        if (i + 1 >= n) return
    }
}

export function* slice<T>(iter: Iterable<T>, from: number, to: number): Iterable<T> {
    for (const [i, e] of entries(iter)) {
        if (i >= from) yield e
        if (i + 1 >= to) return
    }
}

export function sub<T>(iter: Iterable<T>, from: number, count: number): Iterable<T> {
    return slice(iter, from, count + from)
}

export function* flatMap<T, R>(iter: Iterable<T>, f: (v: T, index: number) => Iterable<R>): Iterable<R> {
    for (const [i, e] of entries(iter)) {
        yield* f(e, i)
    }
}

export function flat<I extends IterableNest<any, 2>>(iter: I): Iterable<FlatIterable<I, 2>>
export function flat<I extends IterableNest<any, N>, N extends number>(iter: I, deep?: N): Iterable<FlatIterable<I, N>>
export function* flat<I extends IterableNest<any, N>, N extends number>(iter: I, deep?: N): Iterable<FlatIterable<I, N>> {
    if (!deep || deep < 1) {
        for (const e of iter as any) {
            yield* e
        }
    } else {
        for (const e of iter as any) {
            yield* flat(e, deep - 1)
        }
    }
}

export function* also<T>(iter: Iterable<T>, f: (v: T, index: number) => void): Iterable<T> {
    for (const [i, e] of entries(iter)) {
        f(e, i)
        yield e
    }
}

export type ReduceFn<T, R = T> = (acc: R, val: T, index: number) => R

export function* scan<T, R>(iter: Iterable<T>, init: R, f: ReduceFn<T, R>): Iterable<R> {
    let acc = init
    for (const [i, e] of entries(iter)) {
        acc = f(acc, e, i)
        yield acc
    }
}

export function reduce<T>(iter: Iterable<T>, f: ReduceFn<T>): Voidable<T>
export function reduce<T, R>(iter: Iterable<T>, init: R, f: ReduceFn<T, R>): R
export function reduce<T, R>(iter: Iterable<T>, init: R | T | ReduceFn<T, R>, f?: ReduceFn<T, R>): T | R | undefined {
    const hasInit = !!f
    let acc = hasInit ? (init as R | T) : void 0
    f ??= init as ReduceFn<T, R>
    for (const [i, e] of entries(iter)) {
        if (i === 0 && !hasInit) acc = e
        else acc = f(acc as R, e, i)
    }
    return acc
}

export function all<T, S extends T>(iter: Iterable<T>, f: (v: T, index: number) => v is S): iter is Iterable<S>
export function all<T>(iter: Iterable<T>, f: (v: T, index: number) => unknown): boolean
export function all<T>(iter: Iterable<T>, f: (v: T, index: number) => unknown): boolean {
    for (const [i, e] of entries(iter)) {
        if (!f(e, i)) return false
    }
    return true
}

export function any<T>(iter: Iterable<T>, f: (v: T, index: number) => unknown): boolean {
    for (const [i, e] of entries(iter)) {
        if (f(e, i)) return true
    }
    return false
}

export function find<T>(iter: Iterable<T>, f: (v: T, index: number) => unknown): Voidable<T> {
    for (const [i, e] of entries(iter)) {
        if (f(e, i)) return e
    }
}

export function tryFind<T>(iter: Iterable<T>, f: (v: T, index: number) => unknown): Option<T> {
    for (const [i, e] of entries(iter)) {
        if (f(e, i)) return Option.some(e)
    }
    return Option.none()
}

export function findIndex<T>(iter: Iterable<T>, f: (v: T, index: number) => unknown): number {
    for (const [i, e] of entries(iter)) {
        if (f(e, i)) return i
    }
    return -1
}

export function indexOf<T>(iter: Iterable<T>, v: T): number {
    for (const [i, e] of entries(iter)) {
        if (e == v) return i
    }
    return -1
}

export function includes<T>(iter: Iterable<T>, v: T): boolean {
    for (const e of iter) {
        if (e === v) return true
    }
    return false
}

export function max<T>(iter: Iterable<T>): Voidable<T>
export function max<T>(iter: Iterable<T>, defv: T): T
export function max<T>(iter: Iterable<T>, defv?: T): Voidable<T> {
    let r: Voidable<T>,
        first = true
    for (const i of iter) {
        if (first) (r = i), (first = false)
        else if (i > r!) r = i
    }
    return r ?? defv
}

export function tryMax<T>(iter: Iterable<T>): Option<T> {
    let r: Voidable<T>,
        first = true
    for (const i of iter) {
        if (first) (r = i), (first = false)
        else if (i > r!) r = i
    }
    return first ? Option.none() : Option.some(r!)
}

export function min<T>(iter: Iterable<T>): Voidable<T>
export function min<T>(iter: Iterable<T>, defv: T): T
export function min<T>(iter: Iterable<T>, defv?: T): Voidable<T> {
    let r: Voidable<T>,
        first = true
    for (const i of iter) {
        if (first) (r = i), (first = false)
        else if (i < r!) r = i
    }
    return r ?? defv
}

export function tryMin<T>(iter: Iterable<T>): Option<T> {
    let r: Voidable<T>,
        first = true
    for (const i of iter) {
        if (first) (r = i), (first = false)
        else if (i < r!) r = i
    }
    return first ? Option.none() : Option.some(r!)
}

export function sum<T extends number | bigint | string>(iter: Iterable<T>, defv: T): T
export function sum<T extends number | bigint | string>(iter: Iterable<T>): Voidable<T>
export function sum<T extends number | bigint | string>(iter: Iterable<T>, defv: Voidable<T> = void 0): Voidable<T> {
    let r: Voidable<T> = defv,
        first = true
    for (const i of iter) {
        if (first) (r = i), (first = false)
        else (r as any) += i as any
    }
    return r
}

export function avg<T extends number | bigint>(iter: Iterable<T>, defv: T): T
export function avg<T extends number | bigint>(iter: Iterable<T>): Voidable<T>
export function avg<T extends number | bigint>(iter: Iterable<T>, defv: Voidable<T> = void 0): Voidable<T> {
    let r: Voidable<T> = defv,
        first = true
    let count = 0
    for (const i of iter) {
        count++
        if (first) (r = i), (first = false)
        else (r as any) += i as any
    }
    if (count > 0) return ((r as any) / (count as any)) as any
    return r
}

export function* push<T>(iter: Iterable<T>, ...items: T[]): Iterable<T> {
    yield* iter
    yield* items
}

export function* unshift<T>(iter: Iterable<T>, ...items: T[]): Iterable<T> {
    yield* items
    yield* iter
}

export function as<T, U>(iter: Iterable<T>): Iterable<U> {
    return iter as any
}

export function toArray<T>(iter: Iterable<T>): T[] {
    if (iter instanceof Array) return iter
    return Array.from(iter)
}

export function toSet<T>(iter: Iterable<T>): Set<T> {
    if (iter instanceof Set) return iter
    return new Set(iter)
}

export function toMap<K, V>(iter: Iterable<[K, V]>): Map<K, V>
export function toMap<K, V>(iter: Iterable<readonly [K, V]>): Map<K, V>
export function toMap<K, V>(iter: Iterable<[K, V] | readonly [K, V]>): Map<K, V>
export function toMap<K, V>(iter: Iterable<[K, V] | readonly [K, V]>): Map<K, V> {
    if (iter instanceof Map) return iter
    return new Map(iter)
}

export function toObject<K extends PropertyKey, V>(iter: Iterable<[K, V]>): Record<K, V>
export function toObject<K extends PropertyKey, V>(iter: Iterable<readonly [K, V]>): Record<K, V>
export function toObject<K extends PropertyKey, V>(iter: Iterable<[K, V] | readonly [K, V]>): Record<K, V>
export function toObject<K extends PropertyKey, V>(iter: Iterable<[K, V] | readonly [K, V]>): Record<K, V> {
    return Object.fromEntries(iter) as Record<K, V>
}

/** Cartesian product */
export function product<O extends Iterable<any>[]>(...iters: O): Iterable<ArrayGuard<{ [K in keyof O]: O[K] extends Iterable<infer T> ? T : never }>>
export function product<T>(...iters: Iterable<T>[]): Iterable<T[]>
export function* product<T>(...iters: Iterable<T>[]): Iterable<T[]> {
    if (iters.length == 0) return
    if (iters.length == 1) {
        yield* map(iters[0], t => [t])
        return
    }
    const [iter, ...tailitr] = iters
    const tail = tailitr.map(i => new OnceIter(i))
    function* dopro(i: number, ...parent: T[]): Iterable<T[]> {
        if (i < tail.length) {
            for (const e of tail[i]) {
                yield* dopro(i + 1, ...parent, e)
            }
        } else {
            yield parent
        }
    }
    for (const e of iter) {
        yield* dopro(0, e)
    }
}

export function group<T, K extends PropertyKey>(iter: Iterable<T>, keyf: (v: T, index: number) => K): { [P in K]: T[] } {
    const obj = {} as { [P in K]: T[] }
    for (const [i, e] of entries(iter)) {
        const key = keyf(e, i)
        obj[key] ??= []
        obj[key].push(e)
    }
    return obj
}

export function groupToMap<T, K>(iter: Iterable<T>, keyf: (v: T, index: number) => K): Map<K, T[]> {
    const obj = new Map<K, T[]>()
    for (const [i, e] of entries(iter)) {
        const key = keyf(e, i) as K
        let arr = obj.get(key)
        if (!arr) obj.set(key, (arr = []))
        arr.push(e)
    }
    return obj
}

export function groupBy<T, K>(iter: Iterable<T>, keyf: (v: T, index: number) => K): Iterable<[K, T[]]>
export function groupBy<T, K, V>(iter: Iterable<T>, keyf: (v: T, index: number) => K, valf: (v: T, index: number) => V): Iterable<[K, V[]]>
export function groupBy<T, K, V, R>(
    iter: Iterable<T>,
    keyf: (v: T, index: number) => K,
    valf: (v: T, index: number) => V,
    selector?: (key: K, group: V[], index: number) => R
): Iterable<R>
export function groupBy<T, K, V, R>(
    iter: Iterable<T>,
    keyf: (v: T, index: number) => K,
    valf?: (v: T, index: number) => V,
    selector?: (key: K, group: (V | T)[], index: number) => R
): Iterable<[K, (V | T)[]] | R> {
    const groups = new Map<K, (V | T)[]>()
    for (const [i, e] of entries(iter)) {
        const key = keyf(e, i)
        const val = valf?.(e, i) ?? e
        let group = groups.get(key)
        if (group == null) groups.set(key, (group = []))
        group.push(val)
    }
    if (selector) return map(groups, ([k, v], i) => selector(k, v, i))
    return groups
}

/** sql inner join */
export function join<O, I, K>(outer: Iterable<O>, inner: Iterable<I>, outerKey: (a: O) => K, innerKey: (b: I) => K): Iterable<[O, I]>
export function join<O, I, K, R>(outer: Iterable<O>, inner: Iterable<I>, outerKey: (a: O) => K, innerKey: (b: I) => K, selector: (a: O, b: I) => R): Iterable<R>
export function* join<O, I, K, R>(
    outer: Iterable<O>,
    inner: Iterable<I>,
    outerKey: (a: O) => K,
    innerKey: (b: I) => K,
    selector?: (a: O, b: I) => R
): Iterable<R> {
    selector ??= (a: O, b: I) => [a, b] as any
    const map = new Map<K, { o: O[]; i: I[] }>()
    const oitor = outer[Symbol.iterator]()
    const iitor = inner[Symbol.iterator]()
    for (;;) {
        const or = oitor.next()
        if (!or.done) {
            const key = outerKey(or.value)
            let g = map.get(key)
            if (g == null) map.set(key, (g = { o: [], i: [] }))
            for (const ie of g.i) {
                yield selector(or.value, ie)
            }
            g.o.push(or.value)
        } else {
            for (;;) {
                const ir = iitor.next()
                if (ir.done) return
                const key = innerKey(ir.value)
                const g = map.get(key)
                if (g == null) continue
                for (const oe of g.o) {
                    yield selector(oe, ir.value)
                }
            }
        }
        const ir = iitor.next()
        if (!ir.done) {
            const key = innerKey(ir.value)
            let g = map.get(key)
            if (g == null) map.set(key, (g = { o: [], i: [] }))
            for (const oe of g.o) {
                yield selector(oe, ir.value)
            }
            g.i.push(ir.value)
        } else {
            for (;;) {
                const or = oitor.next()
                if (or.done) return
                const key = outerKey(or.value)
                const g = map.get(key)
                if (g == null) continue
                for (const ie of g.i) {
                    yield selector(or.value, ie)
                }
            }
        }
    }
}

export function whenAll<T>(iter: Iterable<T | PromiseLike<T>>) {
    return Promise.all(iter)
}

export function whenAny<T>(iter: Iterable<T | PromiseLike<T>>) {
    return Promise.any(iter)
}

export function whenRace<T>(iter: Iterable<T | PromiseLike<T>>) {
    return Promise.race(iter)
}

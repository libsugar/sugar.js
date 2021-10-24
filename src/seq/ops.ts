import { Voidable } from "../maybe"
import { OnceIter } from "../onceiter"
import { Option } from "../option"
import { ArrayGuard } from "../types"

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

export function* indexed<T>(iter: Iterable<T>): Iterable<[number, T]> {
    let i = 0
    for (const e of iter) {
        yield [i, e]
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
export function all<T, S extends T>(a: Iterable<T>, f: (v: T) => v is S): a is Iterable<S>
export function all<T>(a: Iterable<T>, f: (v: T) => unknown): boolean
export function all<T>(a: Iterable<T>, f: (v: T) => unknown): boolean {
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

export function includes<T>(a: Iterable<T>, v: T): boolean {
    for (const i of a) {
        if (i === v) return true
    }
    return false
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

export function sum<T extends number | bigint | string>(a: Iterable<T>, defv: T): T
export function sum<T extends number | bigint | string>(a: Iterable<T>): Voidable<T>
export function sum<T extends number | bigint | string>(a: Iterable<T>, defv: Voidable<T> = void 0): Voidable<T> {
    let r: Voidable<T> = defv, first = true
    for (const i of a) {
        if (first) (r = i, first = false)
        else (r as any) += i as any
    }
    return r
}

export function avg<T extends number | bigint>(a: Iterable<T>, defv: T): T
export function avg<T extends number | bigint>(a: Iterable<T>): Voidable<T>
export function avg<T extends number | bigint>(a: Iterable<T>, defv: Voidable<T> = void 0): Voidable<T> {
    let r: Voidable<T> = defv, first = true
    let count = 0
    for (const i of a) {
        count++
        if (first) (r = i, first = false)
        else (r as any) += i as any
    }
    if (count > 0) return ((r as any) / (count as any)) as any
    return r
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

let a = product([1], ['a'])

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

/** sql inner join */
export function relate<O, I, K>(outer: Iterable<O>, inner: Iterable<I>, outerKey: (a: O) => K, innerKey: (b: I) => K): Iterable<[O, I]> {
    return relateMap(outer, inner, outerKey, innerKey, (a, b) => [a, b])
}

/** sql inner join */
export function* relateMap<O, I, K, R>(outer: Iterable<O>, inner: Iterable<I>, outerKey: (a: O) => K, innerKey: (b: I) => K, selector: (a: O, b: I) => R): Iterable<R> {
    const map = new Map<K, { o: O[], i: I[] }>()
    const oitor = outer[Symbol.iterator]()
    const iitor = inner[Symbol.iterator]()
    for (; ;) {
        const or = oitor.next()
        if (!or.done) {
            const key = outerKey(or.value)
            let g = map.get(key)
            if (g == null) map.set(key, g = { o: [], i: [] })
            for (const ie of g.i) {
                yield selector(or.value, ie)
            }
            g.o.push(or.value)
        } else {
            for (; ;) {
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
            if (g == null) map.set(key, g = { o: [], i: [] })
            for (const oe of g.o) {
                yield selector(oe, ir.value)
            }
            g.i.push(ir.value)
        } else {
            for (; ;) {
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

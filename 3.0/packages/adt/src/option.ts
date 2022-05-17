import { Box } from '@libsugar/box'
import { DefaultOrFunc, getDefault } from '@libsugar/fn'
import { None, Voidable } from './maybe'
import { err, ok, Result } from './result'

/** Optional values  */
export type Option<T> = Option.Some<T> | Option.None

export namespace Option {
    const Option = Symbol('Option')

    export function some<T>(value: T): Option<T> {
        return { [Option]: true, value }
    }

    export function none<T>(): Option<T> {
        return { [Option]: false }
    }

    export type Some<T> = Box<T> & { [Option]?: true }
    export type None = { [Option]: false }

    /** Check is some */
    export function isSome<T>(v?: Option<T>): v is Some<T> {
        return v != null && ('value' in v || (Option in v && v[Option]))
    }

    /** Check is none */
    export function isNone<T>(v: Option<T>): v is None
    export function isNone<T>(v?: Option<T>): v is undefined | None
    export function isNone<T>(v?: Option<T>): v is undefined | None {
        return v == null || !('value' in v) || (Option in v && !v[Option])
    }

    /** Map if there is a value, otherwise return None
     *
     * ## Example
     * ```ts
     * let a: Some<2> = map(1, v => v + 1)
     * let b: None = map(None, v => v + 1)
     * ```
     */
    export function map<T, U>(v: Option<T>, f: (v: T) => U): Option<U> {
        if (isNone(v)) return none()
        return some(f(v.value))
    }

    /** Map if there is a value, otherwise return default value
     *
     * ## Example
     * ```ts
     * let a: Some<2> = mapOr(1, 3, v => v + 1)
     * let b: Some<3> = mapOr(None, 3, v => v + 1)
     * ```
     */
    export function mapOr<T, U>(v: Option<T>, defv: DefaultOrFunc<U>, f: (v: T) => U): Option<U> {
        if (isNone(v)) return some(getDefault(defv))
        return some(f(v.value))
    }

    /** If there is a value, pack it as ok, otherwise pack err */
    export function okOr<T, E>(v: Option<T>, e: DefaultOrFunc<E>): Result<T, E> {
        if (isNone(v)) return err(getDefault(e))
        return ok(v.value)
    }

    /** Return undefined if the value is None, otherwise return other. */
    export function and<T, U>(v: Option<T>, other: Option<U>): Option<U> {
        if (isNone(v)) return none()
        return other
    }

    /** Return undefined if the value is None, otherwise call f with the value and return the result */
    export function then<T, U>(v: Option<T>, f: (v: T) => Option<U>): Option<U> {
        if (isNone(v)) return none()
        return f(v.value)
    }

    /** Return the value if the value is value, otherwise return other */
    export function or<T>(v: Option<T>, other: Option<T>): Option<T> {
        if (isNone(v)) return other
        return v
    }

    /** return value if exactly one of `v`, `other`  is value, otherwise return undefined */
    export function xor<T>(v?: Option<T>, other?: Option<T>): Option<T> {
        if (isSome(v) && isNone(other)) return v
        else if (isNone(v) && isSome(other)) return other
        return none()
    }

    /** Transpose to result */
    export function transpose<T, E>(v?: Option<Result<T, E>>): Result<Option<T>, E> {
        if (isNone(v)) return ok(none())
        const r = v.value
        if (Result.isOk(r)) return ok(some(r.res))
        else return r
    }

    /** Take the value, old option will become None */
    export function take<T>(v: Option<T>): Option<T> {
        if (isNone(v)) return none()
        v[Option] = false as true
        const r = v.value
        delete (v as any).value
        return some(r)
    }

    /** Fill the target if source is Some, then source will become None */
    export function fill<T>(target: Option<T>, source: Option<T>) {
        if (isNone(source)) return
        target[Option] = true
        ;(target as any).value = source.value
        source[Option] = false as true
        delete (source as any).value
    }

    /** Set value into Option, then return old value */
    export function set<T>(target: Option<T>, value: T): Option<T> {
        if (isNone(target)) {
            ;(target as Option<T>)[Option] = true
            ;(target as Option<T> as Some<T>).value = value
            return none()
        } else {
            const r = target.value
            target[Option] = true
            target.value = value
            return some(r)
        }
    }

    /** Replace the value, return old value, then source will become None */
    export function replace<T>(target: Option<T>, source: Option<T>): Option<T> {
        if (isNone(target)) {
            fill(target, source)
            return none()
        } else {
            const r = target.value
            fill(target, source)
            return some(r)
        }
    }

    /** Swap values */
    export function swap<T>(a: Option<T>, b: Option<T>) {
        if (isNone(a)) {
            fill(a, b)
        } else if (isNone(b)) {
            fill(b, a)
        } else {
            a[Option] = true
            b[Option] = true
            const av = a.value
            const bv = b.value
            a.value = bv
            b.value = av
        }
    }

    /** As long as any value in the tuple is None, return undefined
     *
     * ## Example
     * ```ts
     * let a: Some([1, 2, 3]) = zip(1, 2, 3)
     * let b: None = zip(1, null, 3)
     * let c: None = zip(1, 2, undefined)
     * ```
     */
    export function zip<O extends Option<unknown>[]>(...o: O): Option<{ [I in keyof O]: O[I] extends Option<infer V> ? V : never }>
    export function zip<O extends Option<unknown>[]>(...o: O): Option<any[]> {
        if (o.length === 0) return none()
        for (const a of o) if (isNone(a)) return none()
        const arr: any[] = o.map(a => (a as Some<unknown>).value)
        if (arr.length === 0) return none()
        return some(arr)
    }
}

/** Make a Some<T> */
export function some<T>(value: T): Option<T> {
    return Option.some(value)
}

/** Make a None */
export function none<T>(): Option<T> {
    return Option.none<T>()
}

import { Box } from "./box"
import { also } from "./effect"
import { DefaultOrFunc, getDefault } from "./fn"
import { err, ok, Result } from "./result"

/** Means no value */
export type None = null | undefined
/** May have no value 
 * ```ts
 * type Maybe<T> = T | None
 * ```
*/
export type Maybe<T> = T | None

/** T or null */
export type Nullable<T> = T | null
/** T or undefined */
export type Voidable<T> = T | undefined

/** Check is value */
export function isSome<T>(v: Maybe<T>): v is T {
    return v != null
}

/** Check is no value */
export function isNone<T>(v: Maybe<T>): v is None {
    return v == null
}

export namespace Maybe {
    /** Map if there is a value, otherwise return undefined 
     * 
     * ## Example
     * ```ts
     * let a: 2 = map(1, v => v + 1)
     * let b: undefined = map(null, v => v + 1)
     * ```
    */
    export function map<T, U>(v: Maybe<T>, f: (v: T) => U): Voidable<U> {
        if (isNone(v)) return
        return f(v)
    }
    /** Map if there is a value, otherwise return default value 
     * 
     * ## Example
     * ```ts
     * let a: 2 = map(1, 3, v => v + 1)
     * let b: 3 = map(null, 3, v => v + 1)
     * ```
    */
    export function mapOr<T, U>(v: Maybe<T>, defv: DefaultOrFunc<U>, f: (v: T) => U): U {
        if (isNone(v)) return getDefault(defv)
        return f(v)
    }

    /** If there is a value, pack it as ok, otherwise pack err * ```
    */
    export function okOr<T, E>(v: Maybe<T>, e: DefaultOrFunc<E>): Result<T, E> {
        if (isNone(v)) return err(getDefault(e))
        return ok(v)
    }

    /** Return undefined if the value is None, otherwise return other. */
    export function and<T, U>(v: Maybe<T>, other: Maybe<U>): Maybe<U> {
        if (isNone(v)) return
        return other
    }

    /** Return undefined if the value is None, otherwise call f with the value and return the result */
    export function then<T, U>(v: Maybe<T>, f: (v: T) => Maybe<U>): Maybe<U> {
        if (isNone(v)) return
        return f(v)
    }

    /** Return the value if the value is value, otherwise return other */
    export function or<T>(v: Maybe<T>, other: Maybe<T>): Maybe<T> {
        if (isNone(v)) return other
        return v
    }

    /** return value if exactly one of `v`, `other`  is value, otherwise return undefined */
    export function xor<T>(v: Maybe<T>, other: Maybe<T>): Voidable<T> {
        if (isSome(v) && isNone(other)) return v
        else if (isNone(v) && isSome(other)) return other
        return
    }

    /** Transpose to result */
    export function transpose<T, E>(v?: Maybe<Result<T, E>>): Result<Voidable<T>, E> {
        if (isNone(v)) return ok(void 0)
        return v
    }

    /** Take the value, set the value in the box to undefined */
    export function take<T>(v: Box<Maybe<T>>): Voidable<T> {
        if (isNone(v.val)) return
        return also(v.val, () => v.val = void 0)
    }

    /** Replace the value in the box */
    export function replace<T>(v: Box<Maybe<T>>, val: T): Maybe<T> {
        return also(v.val, () => v.val = val)
    }

    /** As long as any value in the tuple is None, return undefined 
     * 
     * ## Example
     * ```ts
     * let a: [1, 2, 3] = zip(1, 2, 3)
     * let b: undefined = zip(1, null, 3)
     * let c: undefined = zip(1, 2, undefined)
     * ```
    */
    export function zip<O extends Maybe<unknown>[]>(...o: O): Voidable<{ [I in keyof O]: O[I] extends Maybe<infer V> ? V : never }>
    export function zip<O extends Maybe<unknown>[]>(...o: O): Voidable<O> {
        if (o.length === 0) return
        for (const i of o) if (isNone(i)) return
        return o
    }

} 

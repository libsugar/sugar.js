import { Box } from "./box"
import { also } from "./effect"
import { DefaultOrFunc, getDefault } from "./fn"
import { err, ok, Result } from "./result"

export type None = null | undefined
export type Maybe<T> = T | None

export type Nullable<T> = T | null
export type Voidable<T> = T | undefined

export function isSome<T>(v: Maybe<T>): v is T {
    return v != null
}

export function isNone<T>(v: Maybe<T>): v is None {
    return v == null
}

export namespace Maybe {
    export function map<T, U>(v: Maybe<T>, f: (v: T) => U): Voidable<U> {
        if (isNone(v)) return
        return f(v)
    }
    export function mapOr<T, U>(v: Maybe<T>, defv: DefaultOrFunc<U>, f: (v: T) => U): U {
        if (isNone(v)) return getDefault(defv)
        return f(v)
    }

    export function okOr<T, E>(v: Maybe<T>, e: DefaultOrFunc<E>): Result<T, E> {
        if (isNone(v)) return err(getDefault(e))
        return ok(v)
    }

    export function and<T, U>(v: Maybe<T>, other: Maybe<U>): Maybe<U> {
        if (isNone(v)) return
        return other
    }

    export function then<T, U>(v: Maybe<T>, f: (v: T) => Maybe<U>): Maybe<U> {
        if (isNone(v)) return
        return f(v)
    }

    export function or<T>(v: Maybe<T>, other: Maybe<T>): Maybe<T> {
        if (isNone(v)) return other
        return v
    }

    export function xor<T>(v: Maybe<T>, other: Maybe<T>): Voidable<T> {
        if (isSome(v) && isNone(other)) return v
        else if (isNone(v) && isSome(other)) return other
        return
    }

    export function transpose<T, E>(v?: Maybe<Result<T, E>>): Result<Voidable<T>, E> {
        if (isNone(v)) return ok(void 0)
        return v
    }

    export function take<T>(v: Box<Maybe<T>>): Voidable<T> {
        if (isNone(v.val)) return
        return also(v.val, () => v.val = void 0)
    }

    export function replace<T>(v: Box<Maybe<T>>, val: T): Maybe<T> {
        return also(v.val, () => v.val = val)
    }

    export function zip<O extends Maybe<unknown>[]>(...o: O): Voidable<{ [I in keyof O]: O[I] extends Maybe<infer V> ? V : never }>
    export function zip<O extends Maybe<unknown>[]>(...o: O): Voidable<O> {
        if (o.length === 0) return
        for (const i of o) if (isNone(i)) return
        return o
    }

} 

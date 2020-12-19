import { DefaultOrFunc, getDefault } from "./fn"
import { None, Maybe, Voidable, isNone } from "./maybe"

export interface Ok<T> { res: T }
export interface Err<E> { err: E }
export type Result<T, E> = Ok<T> | Err<E>

export function ok<T>(res: T): Ok<T> {
    return { res }
}
export function err<E>(err: E): Err<E> {
    return { err }
}

export function isOk<T, E>(v?: Maybe<Result<T, E>>): v is Ok<T> {
    return v != null && 'res' in v
}
export function isErr<T, E>(v?: Maybe<Result<T, E>>): v is Err<E> {
    return v != null && 'err' in v
}

export function getOk<T>(v: Ok<T>): T
export function getOk<E>(v: Err<E>): None
export function getOk<T, E>(v: Result<T, E>): Voidable<T>
export function getOk<T, E>(v?: undefined): undefined
export function getOk<T, E>(v?: null): null
export function getOk<T, E>(v?: None): None
export function getOk<T, E>(v?: Maybe<Result<T, E>>): Voidable<T> {
    return (v as any).res
}
export function getErr<T>(v: Ok<T>): None
export function getErr<E>(v: Err<E>): E
export function getErr<T, E>(v: Result<T, E>): Voidable<E>
export function getErr<T, E>(v?: undefined): undefined
export function getErr<T, E>(v?: null): null
export function getErr<T, E>(v?: None): None
export function getErr<T, E>(v?: Maybe<Result<T, E>>): Voidable<E> {
    return (v as any).err
}

export function mapOk<T, E, U>(v: Result<T, E>, f: (val: T) => U): Result<U, E> {
    if (isOk(v)) {
        return ok(f(getOk(v)))
    } else return v
}

export function mapErr<T, E, U>(v: Result<T, E>, f: (val: E) => U): Result<T, U> {
    if (isErr(v)) {
        return err(f(getErr(v)))
    } else return v
}

export namespace Result {
    export function and<T, E, U>(v: Result<T, E>, o: DefaultOrFunc<Result<U, E>>): Result<U, E> {
        if (isErr(v)) return v
        return getDefault(o)
    }

    export function or<T, E>(v: Result<T, E>, o: DefaultOrFunc<Result<T, E>>): Result<T, E> {
        if (isErr(v)) return getDefault(o)
        return v
    }

    export function transpose<T, E>(v: Result<Maybe<T>, E>): Voidable<Result<T, E>> {
        if (isOk(v)) {
            if (isNone(getOk(v))) return
            return v as Result<T, E>
        }
        return v
    }

    type NestedOk<T> = Ok<T> | Ok<NestedOk<T>>
    type NestedResult<T, E> = NestedOk<T> | Err<E>
    export function flatten<N extends NestedResult<any, any>>(v: N): N extends NestedResult<infer T, infer E> ? Result<T extends Ok<any> ? never : T, E> : never {
        while (isOk(v)) {
            v = getOk(v)
        }
        return v as any
    }
}

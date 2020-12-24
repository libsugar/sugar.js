import { DefaultOrFunc, getDefault } from "./fn"
import { None, Maybe, Voidable, isNone } from "./maybe"

/** Means success */
export interface Ok<T> { res: T }
/** Means failure */
export interface Err<E> { err: E }
/** Union of success or failure 
 * ```ts
 * type Result<T, E> = Ok<T> | Err<E>
 * ```
*/
export type Result<T, E> = Ok<T> | Err<E>

/** Make a `Ok<T>` */
export function ok<T>(res: T): Ok<T> {
    return { res }
}
/** Make a `Err<E>` */
export function err<E>(err: E): Err<E> {
    return { err }
}

/** Check value is `OK<T>` */
export function isOk<T>(v?: any): v is Ok<T> {
    return typeof v === 'object' && v !== null && 'res' in v
}
/** Check value is `Err<E>` */
export function isErr<E>(v?: any): v is Err<E> {
    return typeof v === 'object' && v !== null && 'err' in v
}
/** Check value is `Result<T, E>` */
export function isResult<T, E>(v?: any): v is Result<T, E> {
    return typeof v === 'object' && v !== null && ('res' in v || 'err' in v)
}

/** Get `T` in `Ok<T>` */
export function getOk<T>(v: Ok<T>): T
/** Get nothing */
export function getOk<E>(v: Err<E>): undefined
/** Get `T` in `Result<T, E>` */
export function getOk<T, E>(v: Result<T, E>): Voidable<T>
/** Get nothing */
export function getOk<T, E>(v?: undefined): undefined
/** Get nothing */
export function getOk<T, E>(v?: null): null
/** Get nothing */
export function getOk<T, E>(v?: None): None
/** Get `T` in `Result<T, E>` */
export function getOk<T, E>(v?: Maybe<Result<T, E>>): Voidable<T>
export function getOk<T, E>(v?: Maybe<Result<T, E>>): Voidable<T> {
    return (v as any).res
}
/** Get `E` in `Err<E>` */
export function getErr<E>(v: Err<E>): E
/** Get nothing */
export function getErr<T>(v: Ok<T>): undefined
/** Get `E` in `Result<T, E>` */
export function getErr<T, E>(v: Result<T, E>): Voidable<E>
/** Get nothing */
export function getErr<T, E>(v?: undefined): undefined
/** Get nothing */
export function getErr<T, E>(v?: null): null
/** Get nothing */
export function getErr<T, E>(v?: None): None
/** Get `E` in `Result<T, E>` */
export function getErr<T, E>(v?: Maybe<Result<T, E>>): Voidable<E>
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
            if (isResult(v.res)) {
                v = v.res as any
            } else {
                return v as any
            }
        }
        return v as any
    }
}

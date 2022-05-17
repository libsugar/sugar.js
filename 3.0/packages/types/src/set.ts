/** Like `Set<T>` */
export interface SetLike<T> {
    has(value: T): boolean
}
/** Like `Set<T>` and mutable */
export interface MutableSetLike<T> extends SetLike<T> {
    add(value: T): this
    delete(value: T): boolean
}

/**
 * ```ts
 * TakeSetValue<Set<T>> => T
 * ```
 */
export type TakeSetValue<S extends SetLike<any>> = S extends SetLike<infer V> ? V : never

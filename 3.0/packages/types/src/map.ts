/** Like `Map<T>` */
export interface MapLike<K, V> {
    get(key: K): V | undefined
    has(key: K): boolean
}

/** Like `Map<T>` and mutable */
export interface MutableMapLike<K, V> extends MapLike<K, V> {
    set(key: K, value: V): this
    delete(key: K): boolean
}

/**
 * ```ts
 * TakeMapKey<Map<K, V>> => K
 * ```
 */
export type TakeMapKey<M extends MapLike<any, any>> = M extends MapLike<infer K, any> ? K : never

/**
 * ```ts
 * TakeMapValue<Map<K, V>> => V
 * ```
 */
export type TakeMapValue<M extends MapLike<any, any>> = M extends MapLike<any, infer V> ? V : never


export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never


export type TupleTail<T extends any[]> = T extends [any, ...infer R] ? R : never

export type TupleFirst<T extends any[]> = T extends [infer F, ...any[]] ? F : never

export type TupleLast<T extends any[]> = T extends [any, ...any[]] ? T[TupleTail<T>['length']] : never


export interface MapLike<K, V> {
    get(key: K): V | undefined
    has(key: K): boolean
}

export interface MutableMapLike<K, V> extends MapLike<K, V> {
    set(key: K, value: V): this
    delete(key: K): boolean
}

export type MapKey<M extends MapLike<any, any>> = M extends MapLike<infer K, any> ? K : never

export type MapValue<M extends MapLike<any, any>> = M extends MapLike<any, infer V> ? V : never


export interface SetLike<T> {
    has(value: T): boolean
}
export interface MutableSetLike<T> extends SetLike<T> {
    add(value: T): this
}

export type SetValue<S extends SetLike<any>> = S extends SetLike<infer V> ? V : never

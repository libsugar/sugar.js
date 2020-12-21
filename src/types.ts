
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export type LastOfUnion<T> = UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

type _UnionToTuple<T, L = LastOfUnion<T>> = [L] extends [never] ? [] : [..._UnionToTuple<Exclude<T, L>>, L]
export type UnionToTuple<T> = _UnionToTuple<T>

export type TuplePush<T extends any[], V> = [...T, V]

export type TupleUnshift<T extends any[], V> = [V, ...T]

export type TupleTail<T extends any[]> = T extends [any, ...infer R] ? R : never

export type TupleFirst<T extends any[]> = T extends [infer F, ...any[]] ? F : never

export type TupleLast<T extends any[]> = T[TupleTail<T>['length']]

export type TupleBody<T extends any[]> = T extends [...infer B, ...[any]] ? B : never

type _TupleN<T, N extends number, A extends any[] = []> = A['length'] extends N ? A : _TupleN<T, N, [...A, T]>
export type TupleN<T, N extends number> = _TupleN<T, N>


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
    delete(value: T): boolean
}

export type SetValue<S extends SetLike<any>> = S extends SetLike<infer V> ? V : never


export type GetKey<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T]

export type PromiseValue<T extends PromiseLike<any>> = T extends PromiseLike<infer V> ? V : never

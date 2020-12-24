
/** Union to Intersection 
 * 
 * ```ts
 * UnionToIntersection<1 | 2 | 3> => 1 & 2 & 3
 * ```
*/
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

/** Last of Union 
 * 
 * ```ts
 * LastOfUnion<1 | 2 | 3> => 3
 * ```
 * 
 * @deprecated ***Black Magic***
 * @deprecated Not recommended, rely on compiler internal implementation
*/
export type LastOfUnion<T> = UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

/** 
 * @deprecated ***Black Magic***
 * @deprecated Not recommended, rely on compiler internal implementation */
type _UnionToTuple<T, L = LastOfUnion<T>> = [L] extends [never] ? [] : [..._UnionToTuple<Exclude<T, L>>, L]
/** Union to Tuple 
 * 
 * ```ts
 * UnionToTuple<1 | 2 | 3> => [1, 2, 3]
 * ```
 * 
 * @deprecated ***Black Magic***
 * @deprecated Not recommended, rely on compiler internal implementation
*/
export type UnionToTuple<T> = _UnionToTuple<T>

/** 
 * ```ts
 * TuplePush<[1, 2], 3> => [1, 2, 3]
 * ```
 */
export type TuplePush<T extends any[], V> = [...T, V]

/**
 * ```ts
 * TupleUnshift<[1, 2], 3> => [3, 1, 2]
 * ```
 */
export type TupleUnshift<T extends any[], V> = [V, ...T]

/**
 * ```ts
 * TupleTail<[1, 2, 3]> => [2, 3]
 * ```
 */
export type TupleTail<T extends any[]> = T extends [any, ...infer R] ? R : never

/**
 * ```ts
 * TupleFirst<[1, 2, 3]> => 1
 * ```
 */
export type TupleFirst<T extends any[]> = T extends [infer F, ...any[]] ? F : never

/**
 * ```ts
 * TupleLast<[1, 2, 3]> => 3
 * ```
 */
export type TupleLast<T extends any[]> = T[TupleTail<T>['length']]

/**
 * ```ts
 * TupleBody<[1, 2, 3]> => [1, 2]
 * ```
 */
export type TupleBody<T extends any[]> = T extends [...infer B, ...[any]] ? B : never

type _TupleN<T, N extends number, A extends any[] = []> = A['length'] extends N ? A : _TupleN<T, N, [...A, T]>
/**
 * ```ts
 * TupleN<T, 5> => [T, T, T, T, T]
 * ```
 */
export type TupleN<T, N extends number> = _TupleN<T, N>


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
 * MapKey<Map<K, V>> => K
 * ```
 */
export type MapKey<M extends MapLike<any, any>> = M extends MapLike<infer K, any> ? K : never

/**
 * ```ts
 * MapValue<Map<K, V>> => V
 * ```
 */
export type MapValue<M extends MapLike<any, any>> = M extends MapLike<any, infer V> ? V : never


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
 * SetValue<Set<T>> => T
 * ```
 */
export type SetValue<S extends SetLike<any>> = S extends SetLike<infer V> ? V : never


/**
 * ```ts
 * GetKey<{ a: 1 }, 1> => 'a'
 * ```
 * ```ts
 * enum Foo { A, B, C }
 * GetKey<typeof Foo, Foo.B> => 'B'
 * ```
 */
export type GetKey<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T]

/**
 * ```ts
 * PromiseValue<Promise<T>> => T
 * ```
 */
export type PromiseValue<T extends PromiseLike<any>> = T extends PromiseLike<infer V> ? V : never

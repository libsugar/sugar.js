
/** Union to Intersection 
 * 
 * ```ts
 * UnionToIntersection<{ a: 1 } | { b: 2 } | { c: 3 }> => { a: 1 } & { b: 2 } & { c: 3 }
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
export type TupleN<T, N extends number> = number extends N ? T[] : _TupleN<T, N>

/**
 * Make all properties in T writeable
 * 
 * ```ts
 * Writeable<readonly [1, 2, 3]> => [1, 2, 3]
 * ```
 */
export type Writeable<T> = { -readonly [P in keyof T]: T[P] }

/**
 * Make all properties in T writeable
 * 
 * ```ts
 * DeepWriteable<readonly [readonly [1]]> => [[1]]
 * ```
 */
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }

/**
 * Make all properties in T readonly
 * 
 * ```ts
 * DeepReadonly<[[1]]> => readonly [readonly [1]]
 * ```
 */
export type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }

/**
 * Make all properties in T optional
 * 
 * ```ts
 * DeepPartial<{ a: { b: 1 } }> => { a?: { b?: 1 } }
 * ```
 */
export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

/**
 * Make all properties in T required
 * 
 * ```ts
 * DeepRequired<{ a?: { b?: 1 } }> => { a: { b: 1 } }
 * ```
 */
export type DeepRequired<T> = { [P in keyof T]-?: DeepRequired<T[P]> }

/**
 * If `A` does not extends `E`, return `never`
 */
export type AssertType<E, A> = A extends E ? A : never

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

/**
 * ```ts
 * LiteralObj<{ a: 1 } & { b: 2 }> => { a: 1, b: 2 }
 * ```
 */
export type LiteralObj<T> = T extends object ? { [K in keyof T]: T[K] } : never

/**
 * Structure like a linked list
 */
export type LinkedTuple<T> = [T] | [T, LinkedTuple<T>]

/**
 * Take the union of depth tuple items, same as `T[number]` on Array
 * 
 * ```ts
 * LinkedTupleUnion<[1, [2, [3]]]> => 1 | 2 | 3
 * ```
 */
export type LinkedTupleUnion<T> = T extends LinkedTuple<infer R> ? R : never

/**
 * Take Array Element Type
 * 
 * ```ts
 * ArrayElement<1[]> => 1
 * ```
 */
export type ArrayElement<A> = A extends (infer T)[] ? T : never

/** Prompt typescript this type is an array  */
export type ArrayGuard<A extends any[]> = A extends any[] ? A : never

type _FlatTuple<A extends any[], R extends any[] = []> = 0 extends A['length'] ? R : _FlatTuple<TupleTail<A>, [...R, ...(A[0] extends any[] ? _FlatTuple<A[0]> : [A[0]])]>
/** Flatten deep tuples
 * 
 * ```ts
 * FlatTuple<[[1,[2]], [[[3]]]]> => [1, 2, 3]
 * ```
 */
export type FlatTuple<A extends any[]> = _FlatTuple<A>

/** Get all object field path deeply
 * 
 * ```ts
 * ObjPath<{ a: { b: { c: 1 } }[] }> => "a" | `a.${number}` | "a.length" | "a.toString" | "a.toLocaleString" | "a.pop" | "a.push" | "a.concat" | "a.join" | "a.reverse" | "a.shift" | "a.slice" | "a.sort" | "a.splice" | "a.unshift" | ... 18 more ... | `a.${number}.b.c`
 * ```
*/
export type ObjPath<T> = T extends object ? Extract<keyof T, string | number> | `${Extract<keyof T, string | number>}` | { [K in Extract<keyof T, string | number>]: `${K}.${ObjPath<T[K]>}` }[Extract<keyof T, string | number>] : never

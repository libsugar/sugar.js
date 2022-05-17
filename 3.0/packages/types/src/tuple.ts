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

/**
 * ```ts
 * TupleConcat<[1, 2, 3], [4, 5]> => [1, 2, 3, 4, 5]
 * ```
 */
export type TupleConcat<L extends any[], R extends any[]> = [...L, ...R]

/**
 * ```ts
 * TupleN<T, 5> => [T, T, T, T, T]
 * ```
 */
export type TupleN<T, N extends number> = number extends N ? T[] : _TupleN<T, N>

type _TupleN<T, N extends number, A extends any[] = []> = A['length'] extends N ? A : _TupleN<T, N, [...A, T]>

/**
 * Structure like a linked list
 */
export type LinkedTuple<T> = [T] | [T, LinkedTuple<T>]

/**
 * Take the union of depth tuple items, same as `T[number]` on Array
 *
 * ```ts
 * LinkedTupleElement<[1, [2, [3]]]> => 1 | 2 | 3
 * ```
 */
export type LinkedTupleElement<T> = T extends LinkedTuple<infer R> ? R : never

/** Flatten deep tuples
 *
 * ```ts
 * FlattenTuple<[[1,[2]], [[[3]]]]> => [1, 2, 3]
 * ```
 */
export type FlattenTuple<A extends any[]> = _FlattenTuple<A>
type _FlattenTuple<A extends any[], R extends any[] = []> = 0 extends A['length']
    ? R
    : _FlattenTuple<TupleTail<A>, [...R, ...(A[0] extends any[] ? _FlattenTuple<A[0]> : [A[0]])]>

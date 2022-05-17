/** Union to Intersection
 *
 * ```ts
 * UnionToIntersection<{ a: 1 } | { b: 2 } | { c: 3 }> => { a: 1 } & { b: 2 } & { c: 3 }
 * ```
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

/** Last of Union
 *
 * ```ts
 * LastOfUnion<1 | 2 | 3> => 3
 * ```
 *
 * @deprecated ***Black Magic***
 * @deprecated Not recommended, rely on compiler internal implementation
 */
export type LastOfUnion<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never

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

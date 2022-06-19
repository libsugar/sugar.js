/** Nested deep Iterables
 *
 * ```ts
 * IterableNest<1, 3> => Iterable<Iterable<Iterable<1>>>
 * ```
 */
export type IterableNest<T, N extends number> = _IterableNest<T, N>
type _IterableNest<T, N extends number, A extends any[] = []> = A['length'] extends N ? T : _IterableNest<Iterable<T>, N, [0, ...A]>

/** Flatten deep Iterables
 *
 * ```ts
 * FlatIterable<Iterable<Iterable<Iterable<1>>>, 3> => 1
 * ```
 */
export type FlatIterable<T, N extends number> = _FlatIterable<T, N>
type _FlatIterable<T, N extends number, A extends any[] = []> = A['length'] extends N ? T : T extends Iterable<infer R> ? _FlatIterable<R, N, [0, ...A]> : never

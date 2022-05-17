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

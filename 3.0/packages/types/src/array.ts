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

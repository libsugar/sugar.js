/**
 * If `A` does not extends `E`, return `never`
 */
export type AssertType<E, A> = A extends E ? A : never

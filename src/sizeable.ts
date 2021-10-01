import { isNonNullObject, Voidable } from "."

/** Container with length   */
export interface WithLength {
    /** The length of the container  */
    length: number
}

/** Sizeable container  */
export interface Sizeable {
    /** The size of the container  */
    size: number
}

/** Various forms of sized containers  */
export type MultiSizeableForms = WithLength | Sizeable

/** Get size from a `MultiSizeableForms`
 * 
 * @throws {TypeError}
 */
export function getSize(c: MultiSizeableForms): number {
    if (!isNonNullObject(c)) throw new TypeError('Not a NonNull Object')
    if ('length' in c) return c.length
    if ('size' in c) return c.size
    throw new TypeError('Not a Sizeable')
}

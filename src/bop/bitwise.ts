/** leftShiftAll
 * 
 * All left shift function
 * 
 * @param num Target number
 * @returns Return target number directly
 * @deprecated
 */
export function leftShiftAll<N extends number>(num: N): N
/** leftShiftAll
 * 
 * All left shift function
 * 
 * @param num First number
 * @param numbers Other numbers
 * @deprecated
 */
export function leftShiftAll(num: number, ...numbers: number[]): number
export function leftShiftAll(num: number, ...others: number[]) {
    for (const other of others) {
        num <<= other
    }
    return num
}
/** rightShiftAll
 *
 * All right shift function
 *
 * @param num Target number
 * @returns Return target number directly
 * @deprecated
 */
export function rightShiftAll<N extends number>(num: N): N
/** rightShiftAll
 *
 * 全右移函数
 *
 * @param num First number
 * @param numbers Other numbers
 * @deprecated
 */
export function rightShiftAll(num: number, ...numbers: number[]): number
export function rightShiftAll(num: number, ...others: number[]) {
    for (const other of others) {
        num >>= other
    }
    return num
}
/** uRightShiftAll
 *
 * All unsigned right shift function
 *
 * @param num Target number
 * @returns Return target number directly
 * @deprecated
 */
export function uRightShiftAll<N extends number>(num: N): N
/** uRightShiftAll
 *
 * All unsigned right shift function
 *
 * @param num First number
 * @param numbers Other numbers
 * @deprecated
 */
export function uRightShiftAll(num: number, ...numbers: number[]): number
export function uRightShiftAll(num: number, ...others: number[]) {
    for (const other of others) {
        num >>>= other
    }
    return num
}
/** bitAndAll
 *
 * All bitwise AND function
 *
 * @param num Target number
 * @returns Return target number directly
 * @deprecated
 */
export function bitAndAll<N extends number>(num: N): N
/** bitAndAll
 *
 * All bitwise AND function
 *
 * @param num First number
 * @param numbers Other numbers
 * @deprecated
 */
export function bitAndAll(num: number, ...numbers: number[]): number
export function bitAndAll(num: number, ...others: number[]) {
    for (const other of others) {
        num &= other
    }
    return num
}
/** bitXorAll
 *
 * All bitwise XOR function
 *
 * @param num Target number
 * @returns Return target number directly
 * @deprecated
 */
export function bitXorAll<N extends number>(num: N): N
/** bitXorAll
 *
 * All bitwise XOR function
 *
 * @param num First number
 * @param numbers Other numbers
 * @deprecated
 */
export function bitXorAll(num: number, ...numbers: number[]): number
export function bitXorAll(num: number, ...others: number[]) {
    for (const other of others) {
        num ^= other
    }
    return num
}
/** bitOrAll
 *
 * All bitwise OR function
 *
 * @param num Target number
 * @returns Return target number directly
 * @deprecated
 */
export function bitOrAll<N extends number>(num: N): N
/** bitOrAll
 *
 * All bitwise OR function
 *
 * @param num First number
 * @param numbers Other numbers
 * @deprecated
 */
export function bitOrAll(num: number, ...numbers: number[]): number
export function bitOrAll(num: number, ...others: number[]) {
    for (const other of others) {
        num |= other
    }
    return num
}
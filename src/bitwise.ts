/** leftShiftAll
 * 
 * 全左移函数
 * 
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function leftShiftAll<N extends number>(num: N): N
/** leftShiftAll
 * 
 * 全左移函数
 * 
 * @param num 第一个数字
 * @param numbers 其他数字
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
 * 全右移函数
 *
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function rightShiftAll<N extends number>(num: N): N
/** rightShiftAll
 *
 * 全右移函数
 *
 * @param num 第一个数字
 * @param numbers 其他数字
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
 * 全无符号右移函数
 *
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function uRightShiftAll<N extends number>(num: N): N
/** uRightShiftAll
 *
 * 全无符号右移函数
 *
 * @param num 第一个数字
 * @param numbers 其他数字
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
 * 全按位与函数
 *
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function bitAndAll<N extends number>(num: N): N
/** bitAndAll
 *
 * 全按位与函数
 *
 * @param num 第一个数字
 * @param numbers 其他数字
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
 * 全按位异或函数
 *
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function bitXorAll<N extends number>(num: N): N
/** bitXorAll
 *
 * 全按位异或函数
 *
 * @param num 第一个数字
 * @param numbers 其他数字
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
 * 全按位或函数
 *
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function bitOrAll<N extends number>(num: N): N
/** bitOrAll
 *
 * 全按位或函数
 *
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function bitOrAll(num: number, ...numbers: number[]): number
export function bitOrAll(num: number, ...others: number[]) {
    for (const other of others) {
        num |= other
    }
    return num
}
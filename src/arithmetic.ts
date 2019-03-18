/** sum
 * 
 * 求和函数  
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function sum<N extends number>(num: N): N
/** sum
 * 
 * 求和函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function sum(num: number, ...numbers: number[]): number
export function sum(num: number, ...others: number[]) {
    for (const other of others) {
        num += other
    }
    return num
}
/** addAll
 * 
 * 全加函数
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function addAll<N extends number>(num: N): N
/** addAll
 * 
 * 全加函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function addAll(num: number, ...numbers: number[]): number
export function addAll(num: number, ...others: number[]) {
    for (const other of others) {
        num += other
    }
    return num
}
/** subAll
 * 
 * 全减函数
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function subAll<N extends number>(num: N): N
/** subAll
 * 
 * 全减函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function subAll(num: number, ...numbers: number[]): number
export function subAll(num: number, ...others: number[]) {
    for (const other of others) {
        num -= other
    }
    return num
}
/** prod
 * 
 * 求积函数
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function prod<N extends number>(num: N): N
/** prod
 * 
 * 求积函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function prod(num: number, ...numbers: number[]): number
export function prod(num: number, ...others: number[]) {
    for (const other of others) {
        num *= other
    }
    return num
}
/** sum
 * 
 * 全乘函数
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function mulAll<N extends number>(num: N): N
/** sum
 * 
 * 全乘函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function mulAll(num: number, ...numbers: number[]): number
export function mulAll(num: number, ...others: number[]) {
    for (const other of others) {
        num *= other
    }
    return num
}
/** quot
 * 
 * 求商函数
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function quot<N extends number>(num: N): N
/** quot
 * 
 * 求商函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function quot(num: number, ...numbers: number[]): number
export function quot(num: number, ...others: number[]) {
    for (const other of others) {
        num /= other
    }
    return num
}
/** divAll
 * 全除函数
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function divAll<N extends number>(num: N): N
/** divAll
 * 
 * 全除函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function divAll(num: number, ...numbers: number[]): number
export function divAll(num: number, ...others: number[]) {
    for (const other of others) {
        num /= other
    }
    return num
}
/** modAll
 * 
 * 全余函数
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function modAll<N extends number>(num: N): N
/** modAll
 * 
 * 全余函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function modAll(num: number, ...numbers: number[]): number
export function modAll(num: number, ...others: number[]) {
    for (const other of others) {
        num %= other
    }
    return num
}
/** powAll
 * 
 * 全幂函数
 * @param num 目标数字
 * @returns 直接返回目标数字
 */
export function powAll<N extends number>(num: N): N
/** powAll
 * 
 * 全幂函数
 * @param num 第一个数字
 * @param numbers 其他数字
 */
export function powAll(num: number, ...numbers: number[]): number
export function powAll(num: number, ...others: number[]) {
    for (const other of others) {
        num **= other
    }
    return num
}
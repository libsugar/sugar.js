/** sum
 * 
 * Sum function
 *
 * Equivalent to `a + b + c + ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function sum<N extends number>(num: N): N
/** sum
 * 
 * Sum function
 * 
 * Equivalent to `a + b + c + ...`
 * 
 * @param num First number
 * @param numbers Other numbers
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
 * All add function
 *
 * Equivalent to `a + b + c + ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function addAll<N extends number>(num: N): N
/** addAll
 * 
 * All add function
 *
 * Equivalent to `a + b + c + ...`
 *
 * @param num First number
 * @param numbers Other numbers
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
 * All subtract function
 *
 * Equivalent to `a - b - c - ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function subAll<N extends number>(num: N): N
/** subAll
 * 
 * All subtract function
 * 
 * Equivalent to `a - b - c - ...`
 *
 * @param num First number
 * @param numbers Other numbers
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
 * Product function
 *
 * Equivalent to `a * b * c * ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function prod<N extends number>(num: N): N
/** prod
 * 
 * Product function
 *
 * Equivalent to `a * b * c * ...`
 *
 * @param num First number
 * @param numbers Other numbers
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
 * All multiply function
 *
 * Equivalent to `a * b * c * ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function mulAll<N extends number>(num: N): N
/** sum
 * 
 * All multiply function
 *
 * Equivalent to `a * b * c * ...`
 *
 * @param num First number
 * @param numbers Other numbers
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
 * Quotient function
 *
 * Equivalent to `a / b / c / ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function quot<N extends number>(num: N): N
/** quot
 * 
 * Quotient function
 *
 * Equivalent to `a / b / c / ...`
 *
 * @param num First number
 * @param numbers Other numbers
 */
export function quot(num: number, ...numbers: number[]): number
export function quot(num: number, ...others: number[]) {
    for (const other of others) {
        num /= other
    }
    return num
}
/** divAll
 * All divide function
 *
 * Equivalent to `a / b / c / ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function divAll<N extends number>(num: N): N
/** divAll
 * 
 * All divide function
 *
 * Equivalent to `a / b / c / ...`
 *
 * @param num First number
 * @param numbers Other numbers
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
 * All molding function
 *
 * Equivalent to `a % b % c % ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function modAll<N extends number>(num: N): N
/** modAll
 * 
 * All molding function
 *
 * Equivalent to `a % b % c % ...`
 *
 * @param num First number
 * @param numbers Other numbers
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
 * All power function
 *
 * Equivalent to `a ** b ** c ** ...`
 *
 * @param num Target number
 * @returns Return target number directly
 */
export function powAll<N extends number>(num: N): N
/** powAll
 * 
 * All power function
 *
 * Equivalent to `a ** b ** c ** ...`
 *
 * @param num First number
 * @param numbers Other numbers
 */
export function powAll(num: number, ...numbers: number[]): number
export function powAll(num: number, ...others: number[]) {
    for (const other of others) {
        num **= other
    }
    return num
}
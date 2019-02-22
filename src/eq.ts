/** eqOr  
 * 等价于 self == a || self == b ....
 * @param self 比较目标
 * @returns 直接返回自身
 */
export function eqOr<T>(self: T): T
/** eqOr  
 * 等价于 self == a || self == b ....
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function eqOr<T>(self: T, Other: T, ...others: T[]): boolean
export function eqOr<T>(self: T, Other: T, ...others: any[]): boolean
export function eqOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self == other) return true
    }
    return false
}
/** eqAnd  
 * 等价于 self == a && self == b ....
 * @param self 比较目标
 * @returns 直接返回自身
 */
export function eqAnd<T>(self: T): T
/** eqAnd
 * 等价于 self == a && self == b ....
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function eqAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function eqAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function eqAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self != other) return false
    }
    return true
}
export function fEqOr<T>(self: T): T
export function fEqOr<T>(self: T, Other: T, ...others: T[]): boolean
export function fEqOr<T>(self: T, Other: T, ...others: any[]): boolean
export function fEqOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self === other) return true
    }
    return false
}
export function fEqAnd<T>(self: T): T
export function fEqAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function fEqAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function fEqAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self !== other) return false
    }
    return true
}
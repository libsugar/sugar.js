/** neOr
 * 
 * 等价于 `self != a || self != b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export function neOr<T>(self: T): T
/** neOr
 *
 * 等价于 `self != a || self != b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function neOr<T>(self: T, Other: T, ...others: T[]): boolean
/** neOr
 *
 * 等价于 `self != a || self != b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function neOr<T>(self: T, Other: T, ...others: any[]): boolean
export function neOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self != other) return true
    }
    return false
}
/** eqneAndOr
 *
 * 等价于 `self != a && self != b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export function neAnd<T>(self: T): T
/** neAnd
 *
 * 等价于 `self != a && self != b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function neAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** neAnd
 *
 * 等价于 `self != a && self != b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function neAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function neAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self == other) return false
    }
    return true
}
/** fNeOr
 *
 * 等价于 `self !== a || self !== b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export function fNeOr<T>(self: T): T
/** fNeOr
 *
 * 等价于 `self !== a || self !== b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function fNeOr<T>(self: T, Other: T, ...others: T[]): boolean
/** fNeOr
 *
 * 等价于 `self !== a || self !== b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function fNeOr<T>(self: T, Other: T, ...others: any[]): boolean
export function fNeOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self !== other) return true
    }
    return false
}
/** fNeAnd
 *
 * 等价于 `self !== a && self !== b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export function fNeAnd<T>(self: T): T
/** fNeAnd
 *
 * 等价于 `self !== a && self !== b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function fNeAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** fNeAnd
 *
 * 等价于 `self !== a && self !== b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export function fNeAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function fNeAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self === other) return false
    }
    return true
}
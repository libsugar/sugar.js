/** geOr
 * 
 * 等价于 `self >= a || self >= b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function geOr<T>(self: T): T
/** geOr
 *
 * 等价于 `self >= a || self >= b ...`
 * 
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function geOr<T>(self: T, Other: T, ...others: T[]): boolean
/** geOr
 *
 * 等价于 `self >= a || self >= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function geOr<T>(self: T, Other: T, ...others: any[]): boolean
export function geOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self >= other) return true
    }
    return false
}
/** geAnd
 *
 * 等价于 `self >= a && self >= b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function geAnd<T>(self: T): T
/** geAnd
 *
 * 等价于 `self >= a && self >= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function geAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** geAnd
 *
 * 等价于 `self >= a && self >= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function geAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function geAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(self >= other)) return false
    }
    return true
}
/** AllGeOr
 * 
 * 等价于 `a >= self || b >= self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function allGeOr<T>(self: T): T
/** AllGeOr
 *
 * 等价于 `a >= self || b >= self ...`
 * 
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allGeOr<T>(self: T, Other: T, ...others: T[]): boolean
/** AllGeOr
 *
 * 等价于 `a >= self || b >= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allGeOr<T>(self: T, Other: T, ...others: any[]): boolean
export function allGeOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (other >= self) return true
    }
    return false
}
/** AllGeAnd
 *
 * 等价于 `a >= self && b >= self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function allGeAnd<T>(self: T): T
/** AllGeAnd
 *
 * 等价于 `a >= self && b >= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allGeAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** AllGeAnd
 *
 * 等价于 `a >= self && b >= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allGeAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function allGeAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(other >= self)) return false
    }
    return true
}
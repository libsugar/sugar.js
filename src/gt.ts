/** gtOr
 * 
 * 等价于 `self > a || self > b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function gtOr<T>(self: T): T
/** gtOr
 *
 * 等价于 `self > a || self > b ...`
 * 
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function gtOr<T>(self: T, Other: T, ...others: T[]): boolean
/** gtOr
 *
 * 等价于 `self > a || self > b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function gtOr<T>(self: T, Other: T, ...others: any[]): boolean
export function gtOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self > other) return true
    }
    return false
}
/** gtAnd
 *
 * 等价于 `self > a && self > b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function gtAnd<T>(self: T): T
/** gtAnd
 *
 * 等价于 `self > a && self > b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function gtAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** gtAnd
 *
 * 等价于 `self > a && self > b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function gtAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function gtAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(self > other)) return false
    }
    return true
}
/** allGtOr
 * 
 * 等价于 `a > self || b > self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function allGtOr<T>(self: T): T
/** allGtOr
 *
 * 等价于 `a > self || b > self ...`
 * 
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allGtOr<T>(self: T, Other: T, ...others: T[]): boolean
/** allGtOr
 *
 * 等价于 `a > self || b > self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allGtOr<T>(self: T, Other: T, ...others: any[]): boolean
export function allGtOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (other > self) return true
    }
    return false
}
/** allGtAnd
 *
 * 等价于 `a > self && b > self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function allGtAnd<T>(self: T): T
/** allGtAnd
 *
 * 等价于 `a > self && b > self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allGtAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** allGtAnd
 *
 * 等价于 `a > self && b > self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allGtAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function allGtAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(other > self)) return false
    }
    return true
}
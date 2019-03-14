/** ltOr
 *
 * 等价于 `self < a || self < b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function ltOr<T>(self: T): T
/** ltOr
 *
 * 等价于 `self < a || self < b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function ltOr<T>(self: T, Other: T, ...others: T[]): boolean
/** ltOr
 *
 * 等价于 `self < a || self < b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function ltOr<T>(self: T, Other: T, ...others: any[]): boolean
export function ltOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self < other) return true
    }
    return false
}
/** ltAnd
 *
 * 等价于 `self < a && self < b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function ltAnd<T>(self: T): T
/** ltAnd
 *
 * 等价于 `self < a && self < b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function ltAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** ltAnd
 *
 * 等价于 `self < a && self < b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function ltAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function ltAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(self > other)) return false
    }
    return true
}
/** allLtOr
 *
 * 等价于 `a < self || b < self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function allLtOr<T>(self: T): T
/** allLtOr
 *
 * 等价于 `a < self || b < self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allLtOr<T>(self: T, Other: T, ...others: T[]): boolean
/** allLtOr
 *
 * 等价于 `a < self || b < self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allLtOr<T>(self: T, Other: T, ...others: any[]): boolean
export function allLtOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (other < self) return true
    }
    return false
}
/** allLtAnd
 *
 * 等价于 `a < self && b < self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function allLtAnd<T>(self: T): T
/** allLtAnd
 *
 * 等价于 `a < self && b < self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allLtAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** allLtAnd
 *
 * 等价于 `a < self && b < self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allLtAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function allLtAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(other > self)) return false
    }
    return true
}
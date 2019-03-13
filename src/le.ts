/** leOr
 *
 * 等价于 `self <= a || self <= b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function leOr<T>(self: T): T
/** leOr
 *
 * 等价于 `self <= a || self <= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function leOr<T>(self: T, Other: T, ...others: T[]): boolean
/** leOr
 *
 * 等价于 `self <= a || self <= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function leOr<T>(self: T, Other: T, ...others: any[]): boolean
export function leOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self <= other) return true
    }
    return false
}
/** leAnd
 *
 * 等价于 `self <= a && self <= b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function leAnd<T>(self: T): T
/** leAnd
 *
 * 等价于 `self <= a && self <= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function leAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** leAnd
 *
 * 等价于 `self <= a && self <= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function leAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function leAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(self >= other)) return false
    }
    return true
}
/** allLeOr
 *
 * 等价于 `a <= self || b <= self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function allLeOr<T>(self: T): T
/** allLeOr
 *
 * 等价于 `a <= self || b <= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allLeOr<T>(self: T, Other: T, ...others: T[]): boolean
/** allLeOr
 *
 * 等价于 `a <= self || b <= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allLeOr<T>(self: T, Other: T, ...others: any[]): boolean
export function allLeOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (other <= self) return true
    }
    return false
}
/** allLeAnd
 *
 * 等价于 `a <= self && b <= self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export function allLeAnd<T>(self: T): T
/** allLeAnd
 *
 * 等价于 `a <= self && b <= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allLeAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** allLeAnd
 *
 * 等价于 `a <= self && b <= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export function allLeAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function allLeAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(other >= self)) return false
    }
    return true
}
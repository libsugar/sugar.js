/** ltOr
 *
 * Equivalent `self < a || self < b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function ltOr<T>(self: T): T
/** ltOr
 *
 * Equivalent `self < a || self < b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function ltOr<T>(self: T, Other: T, ...others: T[]): boolean
/** ltOr
 *
 * Equivalent `self < a || self < b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `self < a && self < b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function ltAnd<T>(self: T): T
/** ltAnd
 *
 * Equivalent `self < a && self < b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function ltAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** ltAnd
 *
 * Equivalent `self < a && self < b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `a < self || b < self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function allLtOr<T>(self: T): T
/** allLtOr
 *
 * Equivalent `a < self || b < self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allLtOr<T>(self: T, Other: T, ...others: T[]): boolean
/** allLtOr
 *
 * Equivalent `a < self || b < self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `a < self && b < self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function allLtAnd<T>(self: T): T
/** allLtAnd
 *
 * Equivalent `a < self && b < self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allLtAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** allLtAnd
 *
 * Equivalent `a < self && b < self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allLtAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function allLtAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(other > self)) return false
    }
    return true
}
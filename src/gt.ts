/** gtOr
 * 
 * Equivalent `self > a || self > b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function gtOr<T>(self: T): T
/** gtOr
 *
 * Equivalent `self > a || self > b ...`
 * 
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function gtOr<T>(self: T, Other: T, ...others: T[]): boolean
/** gtOr
 *
 * Equivalent `self > a || self > b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `self > a && self > b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function gtAnd<T>(self: T): T
/** gtAnd
 *
 * Equivalent `self > a && self > b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function gtAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** gtAnd
 *
 * Equivalent `self > a && self > b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `a > self || b > self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function allGtOr<T>(self: T): T
/** allGtOr
 *
 * Equivalent `a > self || b > self ...`
 * 
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allGtOr<T>(self: T, Other: T, ...others: T[]): boolean
/** allGtOr
 *
 * Equivalent `a > self || b > self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `a > self && b > self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function allGtAnd<T>(self: T): T
/** allGtAnd
 *
 * Equivalent `a > self && b > self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allGtAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** allGtAnd
 *
 * Equivalent `a > self && b > self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allGtAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function allGtAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(other > self)) return false
    }
    return true
}
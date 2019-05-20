/** leOr
 *
 * Equivalent `self <= a || self <= b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function leOr<T>(self: T): T
/** leOr
 *
 * Equivalent `self <= a || self <= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function leOr<T>(self: T, Other: T, ...others: T[]): boolean
/** leOr
 *
 * Equivalent `self <= a || self <= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `self <= a && self <= b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function leAnd<T>(self: T): T
/** leAnd
 *
 * Equivalent `self <= a && self <= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function leAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** leAnd
 *
 * Equivalent `self <= a && self <= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `a <= self || b <= self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function allLeOr<T>(self: T): T
/** allLeOr
 *
 * Equivalent `a <= self || b <= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allLeOr<T>(self: T, Other: T, ...others: T[]): boolean
/** allLeOr
 *
 * Equivalent `a <= self || b <= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `a <= self && b <= self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function allLeAnd<T>(self: T): T
/** allLeAnd
 *
 * Equivalent `a <= self && b <= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allLeAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** allLeAnd
 *
 * Equivalent `a <= self && b <= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allLeAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function allLeAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(other >= self)) return false
    }
    return true
}
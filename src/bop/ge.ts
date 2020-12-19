/** geOr
 * 
 * Equivalent `self >= a || self >= b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function geOr<T>(self: T): T
/** geOr
 *
 * Equivalent `self >= a || self >= b ...`
 * 
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function geOr<T>(self: T, Other: T, ...others: T[]): boolean
/** geOr
 *
 * Equivalent `self >= a || self >= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `self >= a && self >= b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function geAnd<T>(self: T): T
/** geAnd
 *
 * Equivalent `self >= a && self >= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function geAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** geAnd
 *
 * Equivalent `self >= a && self >= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `a >= self || b >= self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function allGeOr<T>(self: T): T
/** AllGeOr
 *
 * Equivalent `a >= self || b >= self ...`
 * 
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allGeOr<T>(self: T, Other: T, ...others: T[]): boolean
/** AllGeOr
 *
 * Equivalent `a >= self || b >= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `a >= self && b >= self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export function allGeAnd<T>(self: T): T
/** AllGeAnd
 *
 * Equivalent `a >= self && b >= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allGeAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** AllGeAnd
 *
 * Equivalent `a >= self && b >= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function allGeAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function allGeAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(other >= self)) return false
    }
    return true
}
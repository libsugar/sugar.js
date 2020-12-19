/** eqOr
 * 
 * Equivalent to `self == a || self == b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export function eqOr<T>(self: T): T
/** eqOr
 * 
 * Equivalent to `self == a || self == b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function eqOr<T>(self: T, Other: T, ...others: T[]): boolean
/** eqOr
 *
 * Equivalent to `self == a || self == b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function eqOr<T>(self: T, Other: T, ...others: any[]): boolean
export function eqOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self == other) return true
    }
    return false
}
/** eqAnd
 * 
 * Equivalent to `self == a && self == b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export function eqAnd<T>(self: T): T
/** eqAnd
 * 
 * Equivalent to `self == a && self == b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function eqAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** eqAnd
 *
 * Equivalent to `self == a && self == b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function eqAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function eqAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self != other) return false
    }
    return true
}
/** fEqOr
 * 
 * Equivalent to `self === a || self === b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export function fEqOr<T>(self: T): T
/** fEqOr
 * 
 * Equivalent to `self === a || self === b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function fEqOr<T>(self: T, Other: T, ...others: T[]): boolean
/** fEqOr
 *
 * Equivalent to `self === a || self === b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function fEqOr<T>(self: T, Other: T, ...others: any[]): boolean
export function fEqOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self === other) return true
    }
    return false
}
/** fEqAnd
 * 
 * Equivalent to `self === a && self === b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export function fEqAnd<T>(self: T): T
/** fEqAnd
 * 
 * Equivalent to `self === a && self === b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function fEqAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** fEqAnd
 *
 * Equivalent to `self === a && self === b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function fEqAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function fEqAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self !== other) return false
    }
    return true
}
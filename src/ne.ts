/** neOr
 * 
 * Equivalent `self != a || self != b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export function neOr<T>(self: T): T
/** neOr
 *
 * Equivalent `self != a || self != b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function neOr<T>(self: T, Other: T, ...others: T[]): boolean
/** neOr
 *
 * Equivalent `self != a || self != b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `self != a && self != b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export function neAnd<T>(self: T): T
/** neAnd
 *
 * Equivalent `self != a && self != b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function neAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** neAnd
 *
 * Equivalent `self != a && self != b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `self !== a || self !== b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export function fNeOr<T>(self: T): T
/** fNeOr
 *
 * Equivalent `self !== a || self !== b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function fNeOr<T>(self: T, Other: T, ...others: T[]): boolean
/** fNeOr
 *
 * Equivalent `self !== a || self !== b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
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
 * Equivalent `self !== a && self !== b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export function fNeAnd<T>(self: T): T
/** fNeAnd
 *
 * Equivalent `self !== a && self !== b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function fNeAnd<T>(self: T, Other: T, ...others: T[]): boolean
/** fNeAnd
 *
 * Equivalent `self !== a && self !== b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export function fNeAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function fNeAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self === other) return false
    }
    return true
}
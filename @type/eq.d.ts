/** eqOr
 *
 * Equivalent to `self == a || self == b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function eqOr<T>(self: T): T;
/** eqOr
 *
 * Equivalent to `self == a || self == b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function eqOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** eqOr
 *
 * Equivalent to `self == a || self == b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function eqOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** eqAnd
 *
 * Equivalent to `self == a && self == b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function eqAnd<T>(self: T): T;
/** eqAnd
 *
 * Equivalent to `self == a && self == b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function eqAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** eqAnd
 *
 * Equivalent to `self == a && self == b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function eqAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** fEqOr
 *
 * Equivalent to `self === a || self === b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function fEqOr<T>(self: T): T;
/** fEqOr
 *
 * Equivalent to `self === a || self === b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function fEqOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** fEqOr
 *
 * Equivalent to `self === a || self === b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function fEqOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** fEqAnd
 *
 * Equivalent to `self === a && self === b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function fEqAnd<T>(self: T): T;
/** fEqAnd
 *
 * Equivalent to `self === a && self === b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function fEqAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** fEqAnd
 *
 * Equivalent to `self === a && self === b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function fEqAnd<T>(self: T, Other: T, ...others: any[]): boolean;

/** neOr
 *
 * Equivalent `self != a || self != b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function neOr<T>(self: T): T;
/** neOr
 *
 * Equivalent `self != a || self != b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function neOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** neOr
 *
 * Equivalent `self != a || self != b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function neOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** eqneAndOr
 *
 * Equivalent `self != a && self != b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function neAnd<T>(self: T): T;
/** neAnd
 *
 * Equivalent `self != a && self != b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function neAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** neAnd
 *
 * Equivalent `self != a && self != b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function neAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** fNeOr
 *
 * Equivalent `self !== a || self !== b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function fNeOr<T>(self: T): T;
/** fNeOr
 *
 * Equivalent `self !== a || self !== b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function fNeOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** fNeOr
 *
 * Equivalent `self !== a || self !== b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function fNeOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** fNeAnd
 *
 * Equivalent `self !== a && self !== b ....`
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function fNeAnd<T>(self: T): T;
/** fNeAnd
 *
 * Equivalent `self !== a && self !== b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function fNeAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** fNeAnd
 *
 * Equivalent `self !== a && self !== b ....`
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function fNeAnd<T>(self: T, Other: T, ...others: any[]): boolean;

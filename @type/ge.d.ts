/** geOr
 *
 * Equivalent `self >= a || self >= b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function geOr<T>(self: T): T;
/** geOr
 *
 * Equivalent `self >= a || self >= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function geOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** geOr
 *
 * Equivalent `self >= a || self >= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function geOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** geAnd
 *
 * Equivalent `self >= a && self >= b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function geAnd<T>(self: T): T;
/** geAnd
 *
 * Equivalent `self >= a && self >= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function geAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** geAnd
 *
 * Equivalent `self >= a && self >= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function geAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** AllGeOr
 *
 * Equivalent `a >= self || b >= self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function allGeOr<T>(self: T): T;
/** AllGeOr
 *
 * Equivalent `a >= self || b >= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allGeOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** AllGeOr
 *
 * Equivalent `a >= self || b >= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allGeOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** AllGeAnd
 *
 * Equivalent `a >= self && b >= self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function allGeAnd<T>(self: T): T;
/** AllGeAnd
 *
 * Equivalent `a >= self && b >= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allGeAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** AllGeAnd
 *
 * Equivalent `a >= self && b >= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allGeAnd<T>(self: T, Other: T, ...others: any[]): boolean;

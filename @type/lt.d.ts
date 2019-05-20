/** ltOr
 *
 * Equivalent `self < a || self < b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function ltOr<T>(self: T): T;
/** ltOr
 *
 * Equivalent `self < a || self < b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function ltOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** ltOr
 *
 * Equivalent `self < a || self < b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function ltOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** ltAnd
 *
 * Equivalent `self < a && self < b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function ltAnd<T>(self: T): T;
/** ltAnd
 *
 * Equivalent `self < a && self < b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function ltAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** ltAnd
 *
 * Equivalent `self < a && self < b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function ltAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** allLtOr
 *
 * Equivalent `a < self || b < self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function allLtOr<T>(self: T): T;
/** allLtOr
 *
 * Equivalent `a < self || b < self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allLtOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** allLtOr
 *
 * Equivalent `a < self || b < self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allLtOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** allLtAnd
 *
 * Equivalent `a < self && b < self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function allLtAnd<T>(self: T): T;
/** allLtAnd
 *
 * Equivalent `a < self && b < self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allLtAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** allLtAnd
 *
 * Equivalent `a < self && b < self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allLtAnd<T>(self: T, Other: T, ...others: any[]): boolean;

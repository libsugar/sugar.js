/** gtOr
 *
 * Equivalent `self > a || self > b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function gtOr<T>(self: T): T;
/** gtOr
 *
 * Equivalent `self > a || self > b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function gtOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** gtOr
 *
 * Equivalent `self > a || self > b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function gtOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** gtAnd
 *
 * Equivalent `self > a && self > b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function gtAnd<T>(self: T): T;
/** gtAnd
 *
 * Equivalent `self > a && self > b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function gtAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** gtAnd
 *
 * Equivalent `self > a && self > b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function gtAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** allGtOr
 *
 * Equivalent `a > self || b > self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function allGtOr<T>(self: T): T;
/** allGtOr
 *
 * Equivalent `a > self || b > self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allGtOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** allGtOr
 *
 * Equivalent `a > self || b > self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allGtOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** allGtAnd
 *
 * Equivalent `a > self && b > self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function allGtAnd<T>(self: T): T;
/** allGtAnd
 *
 * Equivalent `a > self && b > self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allGtAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** allGtAnd
 *
 * Equivalent `a > self && b > self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allGtAnd<T>(self: T, Other: T, ...others: any[]): boolean;

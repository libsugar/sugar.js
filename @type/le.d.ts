/** leOr
 *
 * Equivalent `self <= a || self <= b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function leOr<T>(self: T): T;
/** leOr
 *
 * Equivalent `self <= a || self <= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function leOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** leOr
 *
 * Equivalent `self <= a || self <= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function leOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** leAnd
 *
 * Equivalent `self <= a && self <= b ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function leAnd<T>(self: T): T;
/** leAnd
 *
 * Equivalent `self <= a && self <= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function leAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** leAnd
 *
 * Equivalent `self <= a && self <= b ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function leAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** allLeOr
 *
 * Equivalent `a <= self || b <= self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function allLeOr<T>(self: T): T;
/** allLeOr
 *
 * Equivalent `a <= self || b <= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allLeOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** allLeOr
 *
 * Equivalent `a <= self || b <= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allLeOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** allLeAnd
 *
 * Equivalent `a <= self && b <= self ...`
 *
 * @param self Compare target
 * @returns Return directly to itself
 */
export declare function allLeAnd<T>(self: T): T;
/** allLeAnd
 *
 * Equivalent `a <= self && b <= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allLeAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** allLeAnd
 *
 * Equivalent `a <= self && b <= self ...`
 *
 * @param self Compare target
 * @param Other The object being compared
 * @param others Other compared objects
 */
export declare function allLeAnd<T>(self: T, Other: T, ...others: any[]): boolean;

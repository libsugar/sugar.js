/** inOr
 *
 * Equivalent `a in obj || b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 */
export declare function inOr<T extends object>(obj: T): false;
/** inOr
 *
 * Equivalent `a in obj || b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 * @param keys Need to determine if it is a member's key
 */
export declare function inOr<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): keyof T extends K ? true : false;
/** inOr
 *
 * Equivalent `a in obj || b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 * @param keys Need to determine if it is a member's key
 */
export declare function inOr(obj: object, ...keys: (string | number | symbol)[]): boolean;
/** inAnd
 *
 * Equivalent `a in obj && b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 */
export declare function inAnd<T extends object>(obj: T): false;
/** inAnd
 *
 * Equivalent `a in obj && b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 * @param keys Need to determine if it is a member's key
 */
export declare function inAnd<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): K extends keyof T ? true : false;
/** inAnd
 *
 * Equivalent `a in obj && b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 * @param keys Need to determine if it is a member's key
 */
export declare function inAnd(obj: object, ...keys: (string | number | symbol)[]): boolean;

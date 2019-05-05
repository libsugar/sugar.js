/** inOr
 *
 * Equivalent `a in obj || b in obj ...`
 * 
 * Determine if an object has certain members
 * @param obj target object
 */
export function inOr<T extends object>(obj: T): false
/** inOr
 *
 * Equivalent `a in obj || b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 * @param keys Need to determine if it is a member's key
 */
export function inOr<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): keyof T extends K ? true : false
/** inOr
 *
 * Equivalent `a in obj || b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 * @param keys Need to determine if it is a member's key
 */
export function inOr(obj: object, ...keys: (string | number | symbol)[]): boolean
export function inOr(obj: object, ...keys: (string | number | symbol)[]): boolean {
    if (keys.length == 0) return false
    for (const key of keys) {
        if(key in obj) return true
    }
    return false
}
/** inAnd
 *
 * Equivalent `a in obj && b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 */
export function inAnd<T extends object>(obj: T): false
/** inAnd
 *
 * Equivalent `a in obj && b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 * @param keys Need to determine if it is a member's key
 */
export function inAnd<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): K extends keyof T ? true : false
/** inAnd
 *
 * Equivalent `a in obj && b in obj ...`
 *
 * Determine if an object has certain members
 * @param obj target object
 * @param keys Need to determine if it is a member's key
 */
export function inAnd(obj: object, ...keys: (string | number | symbol)[]): boolean
export function inAnd(obj: object, ...keys: (string | number | symbol)[]): boolean {
    if (keys.length == 0) return false
    for (const key of keys) {
        if (!(key in obj)) return false
    }
    return true
}
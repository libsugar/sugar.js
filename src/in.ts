/** inOr
 *
 * 等价于 `a in obj || b in obj ...`
 * 
 * 判断一个对象是否有某些成员
 * @param obj 目标对象
 */
export function inOr<T extends object>(obj: T): false
/** inOr
 *
 * 等价于 `a in obj || b in obj ...`
 *
 * 判断一个对象是否有某些成员
 * @param obj 目标对象
 * @param keys 要判断的成员的键
 */
export function inOr<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): keyof T extends K ? true : false
/** inOr
 *
 * 等价于 `a in obj || b in obj ...`
 *
 * 判断一个对象是否有某些成员
 * @param obj 目标对象
 * @param keys 要判断的成员的键
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
 * 等价于 `a in obj && b in obj ...`
 *
 * 判断一个对象是否有某些成员
 * @param obj 目标对象
 */
export function inAnd<T extends object>(obj: T): false
/** inAnd
 *
 * 等价于 `a in obj && b in obj ...`
 *
 * 判断一个对象是否有某些成员
 * @param obj 目标对象
 * @param keys 要判断的成员的键
 */
export function inAnd<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): K extends keyof T ? true : false
/** inAnd
 *
 * 等价于 `a in obj && b in obj ...`
 *
 * 判断一个对象是否有某些成员
 * @param obj 目标对象
 * @param keys 要判断的成员的键
 */
export function inAnd(obj: object, ...keys: (string | number | symbol)[]): boolean
export function inAnd(obj: object, ...keys: (string | number | symbol)[]): boolean {
    if (keys.length == 0) return false
    for (const key of keys) {
        if (!(key in obj)) return false
    }
    return true
}
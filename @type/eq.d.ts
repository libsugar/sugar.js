/** eqOr
 *
 * 等价于 `self == a || self == b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export declare function eqOr<T>(self: T): T;
/** eqOr
 *
 * 等价于 `self == a || self == b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function eqOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** eqOr
 *
 * 等价于 `self == a || self == b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function eqOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** eqAnd
 *
 * 等价于 `self == a && self == b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export declare function eqAnd<T>(self: T): T;
/** eqAnd
 *
 * 等价于 `self == a && self == b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function eqAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** eqAnd
 *
 * 等价于 `self == a && self == b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function eqAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** fEqOr
 *
 * 等价于 `self === a || self === b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export declare function fEqOr<T>(self: T): T;
/** fEqOr
 *
 * 等价于 `self === a || self === b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function fEqOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** fEqOr
 *
 * 等价于 `self === a || self === b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function fEqOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** fEqAnd
 *
 * 等价于 `self === a && self === b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export declare function fEqAnd<T>(self: T): T;
/** fEqAnd
 *
 * 等价于 `self === a && self === b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function fEqAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** fEqAnd
 *
 * 等价于 `self === a && self === b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function fEqAnd<T>(self: T, Other: T, ...others: any[]): boolean;

/** geOr
 *
 * 等价于 `self >= a || self >= b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function geOr<T>(self: T): T;
/** geOr
 *
 * 等价于 `self >= a || self >= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function geOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** geOr
 *
 * 等价于 `self >= a || self >= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function geOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** geAnd
 *
 * 等价于 `self >= a && self >= b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function geAnd<T>(self: T): T;
/** geAnd
 *
 * 等价于 `self >= a && self >= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function geAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** geAnd
 *
 * 等价于 `self >= a && self >= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function geAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** AllGeOr
 *
 * 等价于 `a >= self || b >= self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function allGeOr<T>(self: T): T;
/** AllGeOr
 *
 * 等价于 `a >= self || b >= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allGeOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** AllGeOr
 *
 * 等价于 `a >= self || b >= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allGeOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** AllGeAnd
 *
 * 等价于 `a >= self && b >= self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function allGeAnd<T>(self: T): T;
/** AllGeAnd
 *
 * 等价于 `a >= self && b >= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allGeAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** AllGeAnd
 *
 * 等价于 `a >= self && b >= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allGeAnd<T>(self: T, Other: T, ...others: any[]): boolean;

/** ltOr
 *
 * 等价于 `self < a || self < b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function ltOr<T>(self: T): T;
/** ltOr
 *
 * 等价于 `self < a || self < b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function ltOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** ltOr
 *
 * 等价于 `self < a || self < b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function ltOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** ltAnd
 *
 * 等价于 `self < a && self < b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function ltAnd<T>(self: T): T;
/** ltAnd
 *
 * 等价于 `self < a && self < b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function ltAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** ltAnd
 *
 * 等价于 `self < a && self < b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function ltAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** allLtOr
 *
 * 等价于 `a < self || b < self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function allLtOr<T>(self: T): T;
/** allLtOr
 *
 * 等价于 `a < self || b < self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allLtOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** allLtOr
 *
 * 等价于 `a < self || b < self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allLtOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** allLtAnd
 *
 * 等价于 `a < self && b < self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function allLtAnd<T>(self: T): T;
/** allLtAnd
 *
 * 等价于 `a < self && b < self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allLtAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** allLtAnd
 *
 * 等价于 `a < self && b < self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allLtAnd<T>(self: T, Other: T, ...others: any[]): boolean;

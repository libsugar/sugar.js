/** gtOr
 *
 * 等价于 `self > a || self > b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function gtOr<T>(self: T): T;
/** gtOr
 *
 * 等价于 `self > a || self > b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function gtOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** gtOr
 *
 * 等价于 `self > a || self > b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function gtOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** gtAnd
 *
 * 等价于 `self > a && self > b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function gtAnd<T>(self: T): T;
/** gtAnd
 *
 * 等价于 `self > a && self > b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function gtAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** gtAnd
 *
 * 等价于 `self > a && self > b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function gtAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** allGtOr
 *
 * 等价于 `a > self || b > self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function allGtOr<T>(self: T): T;
/** allGtOr
 *
 * 等价于 `a > self || b > self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allGtOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** allGtOr
 *
 * 等价于 `a > self || b > self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allGtOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** allGtAnd
 *
 * 等价于 `a > self && b > self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function allGtAnd<T>(self: T): T;
/** allGtAnd
 *
 * 等价于 `a > self && b > self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allGtAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** allGtAnd
 *
 * 等价于 `a > self && b > self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allGtAnd<T>(self: T, Other: T, ...others: any[]): boolean;

/** leOr
 *
 * 等价于 `self <= a || self <= b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function leOr<T>(self: T): T;
/** leOr
 *
 * 等价于 `self <= a || self <= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function leOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** leOr
 *
 * 等价于 `self <= a || self <= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function leOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** leAnd
 *
 * 等价于 `self <= a && self <= b ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function leAnd<T>(self: T): T;
/** leAnd
 *
 * 等价于 `self <= a && self <= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function leAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** leAnd
 *
 * 等价于 `self <= a && self <= b ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function leAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** allLeOr
 *
 * 等价于 `a <= self || b <= self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function allLeOr<T>(self: T): T;
/** allLeOr
 *
 * 等价于 `a <= self || b <= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allLeOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** allLeOr
 *
 * 等价于 `a <= self || b <= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allLeOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** allLeAnd
 *
 * 等价于 `a <= self && b <= self ...`
 *
 * @param self 被比较的目标
 * @returns 直接返回自身
 */
export declare function allLeAnd<T>(self: T): T;
/** allLeAnd
 *
 * 等价于 `a <= self && b <= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allLeAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** allLeAnd
 *
 * 等价于 `a <= self && b <= self ...`
 *
 * @param self 被比较的目标
 * @param Other 被比较的值
 * @param others 其他被比较的值
 */
export declare function allLeAnd<T>(self: T, Other: T, ...others: any[]): boolean;

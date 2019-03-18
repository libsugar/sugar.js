/** neOr
 *
 * 等价于 `self != a || self != b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export declare function neOr<T>(self: T): T;
/** neOr
 *
 * 等价于 `self != a || self != b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function neOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** neOr
 *
 * 等价于 `self != a || self != b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function neOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** eqneAndOr
 *
 * 等价于 `self != a && self != b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export declare function neAnd<T>(self: T): T;
/** neAnd
 *
 * 等价于 `self != a && self != b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function neAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** neAnd
 *
 * 等价于 `self != a && self != b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function neAnd<T>(self: T, Other: T, ...others: any[]): boolean;
/** fNeOr
 *
 * 等价于 `self !== a || self !== b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export declare function fNeOr<T>(self: T): T;
/** fNeOr
 *
 * 等价于 `self !== a || self !== b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function fNeOr<T>(self: T, Other: T, ...others: T[]): boolean;
/** fNeOr
 *
 * 等价于 `self !== a || self !== b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function fNeOr<T>(self: T, Other: T, ...others: any[]): boolean;
/** fNeAnd
 *
 * 等价于 `self !== a && self !== b ....`
 * @param self 比较目标
 * @returns 直接返回自身
 */
export declare function fNeAnd<T>(self: T): T;
/** fNeAnd
 *
 * 等价于 `self !== a && self !== b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function fNeAnd<T>(self: T, Other: T, ...others: T[]): boolean;
/** fNeAnd
 *
 * 等价于 `self !== a && self !== b ....`
 * @param self 比较目标
 * @param Other 被比较的对象
 * @param others 其他被比较的对象
 */
export declare function fNeAnd<T>(self: T, Other: T, ...others: any[]): boolean;

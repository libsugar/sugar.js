/** deleteAll
 *
 * 删除对象内多个成员
 *
 * 只有全部都成功删除了才会返回 `true`
 * @param obj 目标对象
 * @param keys 要被删除的成员
 * @returns 是否全部成功删除
 */
export declare function deleteAll<T extends object>(obj: T, ...keys: (keyof T)[]): boolean;
export declare function deleteAll(obj: object, ...keys: (string | number | symbol)[]): boolean;

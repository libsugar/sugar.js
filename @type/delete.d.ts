/** deleteAll
 *
 * Delete multiple members in an object
 *
 * Only all are successfully deleted will return `true`
 * @param obj Target object
 * @param keys The member to be deleted
 * @returns Are all successfully deleted
 */
export declare function deleteAll<T extends object>(obj: T, ...keys: (keyof T)[]): boolean;
/** deleteAll
 *
 * Delete multiple members in an object
 *
 * Only all are successfully deleted will return `true`
 * @param obj Target object
 * @param keys The member to be deleted
 * @returns Are all successfully deleted
 */
export declare function deleteAll(obj: object, ...keys: (string | number | symbol)[]): boolean;

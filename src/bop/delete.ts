/** deleteAll
 * 
 * Delete multiple members in an object
 * 
 * Only all are successfully deleted will return `true`
 * @param obj Target object
 * @param keys The member to be deleted
 * @returns Are all successfully deleted
 */
export function deleteAll<T extends object>(obj: T, ...keys: (keyof T)[]): boolean
/** deleteAll
 *
 * Delete multiple members in an object
 *
 * Only all are successfully deleted will return `true`
 * @param obj Target object
 * @param keys The member to be deleted
 * @returns Are all successfully deleted
 */
export function deleteAll(obj: object, ...keys: (string | number | symbol)[]): boolean
export function deleteAll(obj: object, ...keys: (string | number | symbol)[]) {
    let ret = true
    for (const key of keys) {
        if (!(delete (obj as any)[key])) ret = false
    }
    return ret
}
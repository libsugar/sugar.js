/** instanceofOr
 *
 * Equivalent to `obj instanceof a || obj instanceof b ...`
 *
 * Determine if the object is any of these types  
 * @param obj The object to try
 * @param type Type to try
 */
export function instanceofOr<T, O>(obj: O, type: new (...args: any[]) => T): O extends T ? true : false
/** instanceofOr
 *
 * Equivalent to `obj instanceof a || obj instanceof b ...`
 *
 * Determine if the object is any of these types  
 * @param obj The object to try
 * @param types Type to try
 */
export function instanceofOr<T, O>(obj: O, ...types: (new (...args: any[]) => T)[]): O extends T ? true : false
/** instanceofOr
 *
 * Equivalent to `obj instanceof a || obj instanceof b ...`
 *
 * Determine if the object is any of these types
 * @param obj The object to try
 * @param types Type to try
 */
export function instanceofOr<O>(obj: O, ...types: (new (...args: any[]) => O)[]): true
/** instanceofOr
 *
 * Equivalent to `obj instanceof a || obj instanceof b ...`
 *
 * Determine if the object is any of these types
 * @param obj The object to try
 * @param types Type to try
 */
export function instanceofOr<O>(obj: O, ...types: (new (...args: any[]) => any)[]): boolean
/** instanceofOr
 *
 * Equivalent to `obj instanceof a || obj instanceof b ...`
 *
 * Determine if the object is any of these types
 * @param obj The object to try
 * @param types Type to try
 */
export function instanceofOr(obj: any, ...types: (new (...args: any[]) => any)[]): boolean
export function instanceofOr(obj: any, ...types: (new (...args: any[]) => any)[]) {
    for (const type of types) {
        if (obj instanceof type) return true
    }
    return false
}
/** instanceofAnd
 *
 * Equivalent to `obj instanceof a && obj instanceof b ...`
 *
 * Determine if the object is of each type
 * @param obj The object to try
 * @param type Type to try
 */
export function instanceofAnd<T, O>(obj: O, type: new (...args: any[]) => T): O extends T ? true : false
/** instanceofAnd
 *
 * Equivalent to `obj instanceof a && obj instanceof b ...`
 *
 * Determine if the object is of each type
 * @param obj The object to try
 * @param types Type to try
 */
export function instanceofAnd<T, O>(obj: O, ...types: (new (...args: any[]) => T)[]): O extends T ? true : false
/** instanceofAnd
 *
 * Equivalent to `obj instanceof a && obj instanceof b ...`
 *
 * Determine if the object is of each type
 * @param obj The object to try
 * @param types Type to try
 */
export function instanceofAnd<O>(obj: O, ...types: (new (...args: any[]) => O)[]): true
/** instanceofAnd
 *
 * Equivalent to `obj instanceof a && obj instanceof b ...`
 *
 * Determine if the object is of each type
 * @param obj The object to try
 * @param types Type to try
 */
export function instanceofAnd<O>(obj: O, ...types: (new (...args: any[]) => any)[]): boolean
/** instanceofAnd
 *
 * Equivalent to `obj instanceof a && obj instanceof b ...`
 *
 * Determine if the object is of each type
 * @param obj The object to try
 * @param types Type to try
 */
export function instanceofAnd(obj: any, ...types: (new (...args: any[]) => any)[]): boolean
export function instanceofAnd(obj: any, ...types: (new (...args: any[]) => any)[]) {
    for (const type of types) {
        if (!(obj instanceof type)) return false
    }
    return true
}
/** AllInstanceofOr
 *
 * Equivalent to `a instanceof type || b instanceof type ...`
 *
 * Determine if the object is of this type
 * @param type Target type
 * @param obj The object to try
 */
export function AllInstanceofOr<T, O>(type: new (...args: any[]) => T, obj: O): O extends T ? true : false
/** AllInstanceofOr
 *
 * Equivalent to `a instanceof type || b instanceof type ...`
 *
 * Determine if one of the objects is this type
 * @param type Target type
 * @param objs The object to try
 */
export function AllInstanceofOr<T, O>(type: new (...args: any[]) => T, ...objs: O[]): O extends T ? true : false
/** AllInstanceofOr
 *
 * Equivalent to `a instanceof type || b instanceof type ...`
 *
 * Determine if one of the objects is this type
 * @param type Target type
 * @param objs The object to try
 */
export function AllInstanceofOr<T>(type: new (...args: any[]) => T, ...objs: T[]): true
/** AllInstanceofOr
 *
 * Equivalent to `a instanceof type || b instanceof type ...`
 *
 * Determine if one of the objects is this type
 * @param type Target type
 * @param objs The object to try
 */
export function AllInstanceofOr<T>(type: new (...args: any[]) => T, ...objs: any[]): boolean
/** AllInstanceofOr
 *
 * Equivalent to `a instanceof type || b instanceof type ...`
 *
 * Determine if one of the objects is this type
 * @param type Target type
 * @param objs The object to try
 */
export function AllInstanceofOr(type: new (...args: any[]) => any, ...objs: any[]): boolean
export function AllInstanceofOr(type: new (...args: any[]) => any, ...objs: any[]) {
    for (const o of objs) {
        if(o instanceof type) return true
    }
    return false
}
/** AllInstanceofAnd
 *
 * Equivalent to `a instanceof type && b instanceof type ...`
 *
 * Determine if the object is of this type
 * @param type Target type
 * @param obj The object to try
 */
export function AllInstanceofAnd<T, O>(type: new (...args: any[]) => T, obj: O): O extends T ? true : false
/** AllInstanceofAnd
 *
 * Equivalent to `a instanceof type && b instanceof type ...`
 *
 * Determine if all objects are of this type
 * @param type Target type
 * @param objs The object to try
 */
export function AllInstanceofAnd<T, O>(type: new (...args: any[]) => T, ...objs: O[]): O extends T ? true : false
/** AllInstanceofAnd
 *
 * Equivalent to `a instanceof type && b instanceof type ...`
 *
 * Determine if all objects are of this type
 * @param type Target type
 * @param objs The object to try
 */
export function AllInstanceofAnd<T>(type: new (...args: any[]) => T, ...objs: T[]): true
/** AllInstanceofAnd
 *
 * Equivalent to `a instanceof type && b instanceof type ...`
 *
 * Determine if all objects are of this type
 * @param type Target type
 * @param objs The object to try
 */
export function AllInstanceofAnd<T>(type: new (...args: any[]) => T, ...objs: any[]): boolean
/** AllInstanceofAnd
 *
 * Equivalent to `a instanceof type && b instanceof type ...`
 *
 * Determine if all objects are of this type
 * @param type Target type
 * @param objs The object to try
 */
export function AllInstanceofAnd(type: new (...args: any[]) => any, ...objs: any[]): boolean
export function AllInstanceofAnd(type: new (...args: any[]) => any, ...objs: any[]) {
    for (const o of objs) {
        if (!(o instanceof type)) return false
    }
    return true
}
import { Box, box } from "./box"
import { isNonNullObject } from "./typeof"

/** Loosely allow multiple ref forms */
export type MultiRefForms<T> = Box<T> | ValRef<T> | CurrentRef<T> | ValueRef<T> | ContentsRef<T>

/** Get `T` from `MultiRefForms<T>` */
export type MultiRefFormsValue<R> = R extends MultiRefForms<infer T> ? T : never

/** `current` style (react style) ref */
export interface CurrentRef<T> {
    /** Wrapped value */
    current: T
}

/** Check a value is `CurrentRef<T>` */
export function isCurrentRef<T>(v: CurrentRef<T> | unknown): v is CurrentRef<T> {
    return isNonNullObject(v) && isCurrentRefUnsafe(v)
}

/** Check a value is `CurrentRef<T>` */
function isCurrentRefUnsafe<T>(v: any): v is CurrentRef<T> {
    return 'current' in v
}

/** `value` style (vue style) ref */
export interface ValueRef<T> {
    /** Wrapped value */
    value: T
}

/** Check a value is `ValueRef<T>` */
export function isValueRef<T>(v: ValueRef<T> | unknown): v is ValueRef<T> {
    return isNonNullObject(v) && isValueRefUnsafe(v)
}

/** Check a value is `ValueRef<T>` */
function isValueRefUnsafe<T>(v: any): v is ValueRef<T> {
    return 'value' in v
}

/** `contents` style (ml style) ref */
export interface ContentsRef<T> {
    /** Wrapped value */
    contents: T
}

/** Check a value is `ContentsRef<T>` */
export function isContentsRef<T>(v: ContentsRef<T> | unknown): v is ContentsRef<T> {
    return isNonNullObject(v) && isContentsRefUnsafe(v)
}

/** Check a value is `ContentsRef<T>` */
function isContentsRefUnsafe<T>(v: any): v is ContentsRef<T> {
    return 'contents' in v
}

/** `val` style (rust style) ref */
export interface ValRef<T> {
    /** Wrapped value */
    val: T
}

/** Check a value is `ValRef<T>` */
export function isValRef<T>(v: ValRef<T> | unknown): v is ValRef<T> {
    return isNonNullObject(v) && isValRefUnsafe(v)
}

/** Check a value is `ValRef<T>` */
function isValRefUnsafe<T>(v: any): v is ValRef<T> {
    return 'val' in v
}

/** Normalize `MultiRefForms<T>` to `Box<T>`
 * 
 * @throws {TypeError} 
 */
export function boxOf<T>(v: MultiRefForms<T>): Box<T> {
    if (!isNonNullObject(v)) throw new TypeError('Not a NonNull Object')
    else if (isValRefUnsafe(v)) return v
    else if (isValueRefUnsafe(v)) return box(v.value)
    else if (isCurrentRefUnsafe(v)) return box(v.current)
    else if (isContentsRefUnsafe(v)) return box(v.contents)
    else throw new TypeError('unknow ref form')
}

/** Take the value from the `MultiRefForms<T>`
 * 
 * @throws {TypeError}
 */
export function getVal<T>(v: MultiRefForms<T>): T {
    if (!isNonNullObject(v)) throw new TypeError('Not a NonNull Object')
    else if (isValRefUnsafe(v)) return v.val
    else if (isValueRefUnsafe(v)) return v.value
    else if (isCurrentRefUnsafe(v)) return v.current
    else if (isContentsRefUnsafe(v)) return v.contents
    else throw new TypeError('unknow ref form')
}

/** Set the value to `MultiRefForms<T>` 
 * 
 * @throws {TypeError}
*/
export function setVal<R extends MultiRefForms<any>>(v: R, val: MultiRefFormsValue<R>): R {
    if (!isNonNullObject(v)) throw new TypeError('Not a NonNull Object')
    else if (isValRefUnsafe(v)) v.val = val
    else if (isValueRefUnsafe(v)) v.value = val
    else if (isCurrentRefUnsafe(v)) v.current = val
    else if (isContentsRefUnsafe(v)) v.contents = val
    else throw new TypeError('unknow ref form')
    return v
}

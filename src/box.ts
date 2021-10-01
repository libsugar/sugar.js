import { isNonNullObject } from "./typeof"

/** Pack the value into the box so that it is passed by reference */
export interface Box<T> {
    /** Wrapped value */
    val: T
}

/** Readonly version of `Box<T>` */
export interface ReadonlyBox<T> {
    /** Wrapped value */
    readonly val: T
}

/** Pack the value into the box so that it is passed by reference */
export function box<T>(val: T): Box<T> {
    return { val }
}

/** Make a `ReadonlyBox<T>` */
export function readonlyBox<T>(val: T): ReadonlyBox<T> {
    return Object.defineProperty({} as ReadonlyBox<T>, 'val', { value: val, writable: false, configurable: false, enumerable: true })
}

/** Check a value is `Box<T>` */
export function isBox<T>(v: ReadonlyBox<T>): v is ReadonlyBox<T>
/** Check a value is `Box<T>` */
export function isBox<T>(v: Box<T> | unknown): v is Box<T>
/** Check a value is `Box<T>` */
export function isBox<T>(v: Box<T> | unknown): v is Box<T> {
    return isNonNullObject(v) && 'val' in v
}

/** Check a value is `ReadonlyBox<T>` */
export function isReadonlyBox<T>(v: ReadonlyBox<T> | unknown): v is ReadonlyBox<T> {
    if (!isBox(v)) return false
    const desc = Object.getOwnPropertyDescriptor(v, 'val')!
    return desc.writable || desc.configurable || desc.set ? true : false
}

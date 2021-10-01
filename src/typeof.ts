
/** Check a value is `typeof v === 'bigint'` */
export function isBigInt(v: unknown): v is number {
    return typeof v === 'bigint'
}

/** Check a value is `typeof v === 'number'` */
export function isNumber(v: unknown): v is number {
    return typeof v === 'number'
}

/** Check a value is `typeof v === 'number' || 'bigint'` */
export function isAnyNumber(v: unknown): v is number | bigint {
    switch (typeof v) {
        case 'bigint': case 'number': return true
        default: return false
    }
}

/** Check a value is `typeof v === 'boolean'` */
export function isBoolean(v: unknown): v is boolean {
    return typeof v === 'boolean'
}

/** Primitive Values */
export type PrimitiveValue = bigint | boolean | number | string | string | undefined | null

/** Primitive Objects */
export type PrimitiveObject = BigInt | Boolean | Number | String | Symbol

/** Primitive Values and Objects */
export type PrimitiveType = PrimitiveValue | PrimitiveObject

/** Check a value is primitive type */
export function isPrimitiveValue(v: unknown): v is PrimitiveValue {
    switch (typeof v) {
        case 'bigint': case 'boolean': case 'number': case 'string': case 'symbol': case 'undefined': return true
        default: return v === null
    }
}

/** Check a value is primitive object */
export function isPrimitiveObject(v: unknown): v is PrimitiveObject {
    if (!isNonNullObject(v)) return false
    if (v instanceof BigInt || v instanceof Boolean || v instanceof Number || v instanceof String || v instanceof Symbol) return true
    return false
}

/** Check a value is primitive types */
export function isPrimitiveType(v: unknown): v is PrimitiveType {
    return isPrimitiveValue(v) || isPrimitiveObject(v)
}

/** Check a value is `typeof v === 'object'` */
export function isObject<T extends object = object>(v: T | unknown): v is T {
    return typeof v === 'object'
}

/** Check a value is null */
export function isNull(v: unknown): v is null {
    return v === null
}

/** Check a value is `typeof v === 'object'` && not null */
export function isNonNullObject<T extends object = object>(v: T | unknown | null): v is Exclude<T, null> {
    return isObject(v) && !isNull(v)
}

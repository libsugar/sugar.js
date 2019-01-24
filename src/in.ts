export function inOr<T extends object>(obj: T): false
export function inOr<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): keyof T extends K ? true : false
export function inOr(obj: object, ...keys: (string | number | symbol)[]): boolean
export function inOr(obj: object, ...keys: (string | number | symbol)[]): boolean {
    if (keys.length == 0) return false
    for (const key of keys) {
        if(key in obj) return true
    }
    return false
}
export function inAnd<T extends object>(obj: T): false
export function inAnd<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): K extends keyof T ? true : false
export function inAnd(obj: object, ...keys: (string | number | symbol)[]): boolean
export function inAnd(obj: object, ...keys: (string | number | symbol)[]): boolean {
    if (keys.length == 0) return false
    for (const key of keys) {
        if (!(key in obj)) return false
    }
    return true
}
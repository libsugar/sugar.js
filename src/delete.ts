export function deleteAll<T extends object>(obj: T, ...keys: (keyof T)[]): boolean
export function deleteAll(obj: object, ...keys: (string | number | symbol)[]): boolean
export function deleteAll(obj: object, ...keys: (string | number | symbol)[]) {
    for (const key of keys) {
        if (!(delete obj[key])) return false
    }
    return true
}
export function or(...bool: boolean[]): boolean
export function or(...maybool: any[]): boolean
export function or(...bool: any[]): boolean {
    for (const item of bool) {
        if (item) return true
    }
    return false
}
export function and(...bool: boolean[]): boolean
export function and(...maybool: any[]): boolean
export function and(...bool: any[]): boolean {
    for (const item of bool) {
        if (!item) return false
    }
    return true
}
export function orFn(...bool: (boolean | (() => boolean))[]): boolean {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item) return true
    }
    return false
}
export function andFn(...bool: (boolean | (() => boolean))[]): boolean {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item)) return false
    }
    return true
}
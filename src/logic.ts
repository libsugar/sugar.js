export function or(...bool: (boolean | (() => boolean))[]): boolean {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item) return true
    }
    return false
}
export function and(...bool: (boolean | (() => boolean))[]): boolean {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item)) return false
    }
    return true
}
function* take2<T>(arr: T[]): IterableIterator<[T, T][]> {
    let tuple = []
    for (const item of arr) {
        tuple.push(item)
        if (tuple.length == 2) {
            yield tuple
            tuple = []
        }
    }
}
export function orGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean
export function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean
export function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean {
    for (const [a, b] of take2(items)) {
        if (logic(a, b)) return true
    }
    return false
}
export function andGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean
export function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean
export function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean {
    for (const [a, b] of take2(items)) {
        if (!logic(a, b)) return false
    }
    return true
}

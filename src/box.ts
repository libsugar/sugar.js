
export interface Box<T> { val: T }

export function box<T>(val: T): Box<T> {
    return { val }
}

export function getVal<T>(box: Box<T>): T {
    return box.val
}

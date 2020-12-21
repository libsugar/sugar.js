
export interface Box<T> { val: T }

export function box<T>(val: T): Box<T> {
    return { val }
}

export function getVal<T>(box: Box<T>): T {
    return box.val
}

export function setVal<T>(box: Box<T>, val: T): Box<T> {
    box.val = val
    return box
}

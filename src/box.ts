
/** Pack the value into the box so that it is passed by reference */
export interface Box<T> { val: T }

/** Pack the value into the box so that it is passed by reference */
export function box<T>(val: T): Box<T> {
    return { val }
}

/** Take the value from the Box */
export function getVal<T>(box: Box<T>): T {
    return box.val
}

/** Set the value to Box */
export function setVal<T>(box: Box<T>, val: T): Box<T> {
    box.val = val
    return box
}

/** Pack the value into the box so that it is passed by reference */
export interface Box<T> {
    value: T
}

/** Pack the value into the box so that it is passed by reference */
export function box<T>(value: T): Box<T> {
    return { value }
}

/** Pack the value into the box so that it is passed by reference */
export namespace Box {
    /** Take the value from the Box */
    export function get<T>(box: Box<T>): T {
        return box.value
    }

    /** Set the value to Box */
    export function set<T>(box: Box<T>, val: T): Box<T> {
        box.value = val
        return box
    }
}

import { Box } from "./box"
import { Voidable } from "./maybe"

/** Initialize only when needed, the initialization method is determined by the place of use rather than the place of definition */
export interface Once<T> extends Box<Voidable<T>> { }

/** Create a Once\<T> */
export function once<T>(): Once<T> {
    return {} as any
}

/** Get or initialize */
export function getOrInit<T>(once: Once<T>, init: () => T): T {
    if (Once.initialized(once)) return once.val
    return once.val = init()
}

/** Only executed when initialized  */
export function runWhenInit<T>(once: Once<T>, f: (v: T) => void) {
    if (Once.initialized(once)) f(once.val)
}

export namespace Once {
    /** Check if an Once\<T> has been initialized  */
    export function initialized<T>(once: Once<T>): once is Box<T> {
        return 'val' in once
    }
}

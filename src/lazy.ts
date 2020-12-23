import { Box } from "./box";
import { Voidable } from "./maybe";

function isin<T>(v: T, key: any): boolean {
    return key in v
}

/** Lazy initialization */
export class Lazy<T> implements Box<Voidable<T>> {
    val: Voidable<T>

    #init: () => T
    constructor(init: () => T) {
        this.#init = init
    }

    /** Get the value, if not initialized, the initialization function will be called */
    get(): T {
        if (!('val' in this)) {
            (this as any).val = (this as any).#init()
        }
        return this.val!
    }
    /** Return is already initialized */
    got(): boolean {
        return isin(this, 'val')
    }

    /** Reinitialize */
    reget(): T {
        this.val = this.#init()
        return this.val
    }
}

/** Lazy initialization */
export function lazy<T>(init: () => T): Lazy<T> {
    return new Lazy(init)
}

/** Async Lazy */
export type ALazy<T> = Lazy<Promise<T>>

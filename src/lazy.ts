import { Box } from "./box";
import { Voidable } from "./maybe";

function isin<T>(v: T, key: any): boolean {
    return key in v
}

export class Lazy<T> implements Box<Voidable<T>> {
    val: Voidable<T>

    #init: () => T
    constructor(init: () => T) {
        this.#init = init
    }

    get(): T {
        if (!('val' in this)) {
            (this as any).val = (this as any).#init()
        }
        return this.val!
    }
    got(): boolean {
        return isin(this, 'val')
    }

    reget(): T {
        this.val = this.#init()
        return this.val
    }
}

export function lazy<T>(init: () => T): Lazy<T> {
    return new Lazy(init)
}

export type ALazy<T> = Lazy<Promise<T>>

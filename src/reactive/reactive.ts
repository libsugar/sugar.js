import { Box } from "../box"
import { Voidable } from "../maybe"
import { getVal, MultiRefForms } from "../ref"
import { Traceable, Tracer, SculkTracer } from "./effect"

const Ref = Symbol('ref')

/** Reactive Ref */
export interface Ref<T> extends Box<T> {
    [Ref]: true
}

/** Check a value is `Ref<T>` */
export function isRef<T>(v: Ref<T> | unknown): v is Ref<T> {
    return typeof v === 'object' && v != null && Ref in v
}

/** Make a `Ref<T>` */
export function ref<T>(value: T): Ref<T>
export function ref<T>(): Ref<Voidable<T>>
export function ref(v?: unknown): any {
    if (isRef(v)) return v
    else return new MutableRef(v)
}

/** Make a `Ref<T>` from `MultiRefForms<T>` */
export function refOf<T>(v: MultiRefForms<T>): Ref<T> {
    return ref(getVal(v))
}

/** Mutable `Ref<T>` impl */
export class MutableRef<T> implements Ref<T>, Traceable {
    #trace = new SculkTracer;

    [Tracer]() { return this.#trace }

    [Ref]: true = true

    #val: T

    constructor(val: T) {
        this.#val = val
    }

    get val() {
        this.#trace.traceInCurrentScope()
        return this.#val
    }

    set val(val: T) {
        const oldval = this.#val
        if (val !== oldval) {
            this.#val = val
            this.#trace.wake()
        }
    }
}

export function reactive<T extends object>(obj: T) {
    return mutableReactive(obj)
}

export function mutableReactive<T extends object>(obj: T) {
    const trace = new SculkTracer
    const r = new Proxy(obj, {
        get(target, p, receiver) {
            trace.traceInCurrentScope()
            return Reflect.get(target, p, receiver)
        },
        set(target, p, value, receiver) {
            const oldVal = Reflect.get(target, p, receiver)
            if (oldVal !== value) {
                trace.wake()
            }
            return Reflect.set(target, p, value, receiver)
        }
    })
    return r
}

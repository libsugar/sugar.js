import { MutableExMap, MutMapEx } from "./map"
import { getOrInit, once, runWhenInit } from "./once"
import { TupleTail } from "./types"

/** Get parameters from EventLike */
export type EventLikeParameters<T extends EventLike<any>> = T extends EventLike<infer R> ? R : never

/** Type safe event interface */
export interface EventLike<A extends unknown[] = []> {
    emit(...args: A): void
    on(f: (...args: A) => void): void
    off(f: (...args: A) => void): void
}


/** Type safe event interface */
export interface OnceableEventLike<A extends unknown[] = []> extends EventLike<A> {
    once(f: (...args: A) => void): void
}

/** Type safe event */
export class SimpleEvent<A extends unknown[] = []> implements EventLike<A> {
    #fns = once<Set<(...args: A) => void>>()

    emit(...args: A): void {
        runWhenInit(this.#fns, fns => {
            for (const fn of fns) {
                new Promise<void>(async res => {
                    await fn(...args)
                    res()
                })
            }
        })
    }
    on(f: (...args: A) => void): void {
        const fns = getOrInit(this.#fns, () => new Set)
        fns.add(f)
    }
    off(f: (...args: A) => void): void {
        const fns = getOrInit(this.#fns, () => new Set)
        fns.delete(f)
    }
}

/** Type safe event */
export class TypedEvent<A extends unknown[] = []> implements OnceableEventLike<A> {
    #fns = once<Set<(...args: A) => void>>()
    #onces = once<Set<(...args: A) => void>>()

    /** Emit the event */
    emit(...args: A) {
        runWhenInit(this.#fns, fns => {
            for (const fn of fns) {
                new Promise<void>(async res => {
                    await fn(...args)
                    res()
                })
            }
            runWhenInit(this.#onces, onces => {
                for (const once of onces) {
                    fns.delete(once)
                }
                onces.clear()
            })
        })
    }

    /** Register event */
    on(f: (...args: A) => void) {
        getOrInit(this.#fns, () => new Set).add(f)
    }

    /** Register event and only trigger once*/
    once(f: (...args: A) => void) {
        getOrInit(this.#fns, () => new Set).add(f)
        getOrInit(this.#onces, () => new Set).add(f)
    }

    /** Unregister */
    off(f: (...args: A) => void) {
        runWhenInit(this.#fns, fns => fns.delete(f))
        runWhenInit(this.#onces, onces => onces.delete(f))
    }
}

/** Type safe event 
 * @deprecated use `TypedEvent`
*/
export const TEvent = TypedEvent

/** Event pool */
export class EventBus {
    #regs = MutMapEx(new Map<string, TypedEvent<any>>())

    /** Emit the event */
    emit<N extends string, A extends unknown[]>(name: N, ...args: A): void
    /** Emit the event */
    emit<T extends [name: string, ...args: unknown[]]>(name: T[0], ...args: TupleTail<T>): void
    /** Emit the event */
    emit<T extends { name: string, args: unknown[] }>(name: T['name'], ...args: T['args']): void
    emit(name: string, ...args: unknown[]) {
        this.#regs.get(name)?.emit(...args)
    }

    /** Register event */
    on<N extends string, A extends unknown[]>(name: N, fn: (...args: A) => unknown): void
    /** Register event */
    on<T extends [name: string, ...args: unknown[]]>(name: T[0], fn: (...args: TupleTail<T>) => unknown): void
    /** Register event */
    on<T extends { name: string, args: unknown[] }>(name: T['name'], fn: (...args: T['args']) => unknown): void
    on(name: string, f: (...args: unknown[]) => unknown) {
        const e = this.#regs.getOrAdd(name, () => new TypedEvent)
        e.on(f)
    }

    /** Register event and only trigger once*/
    once<N extends string, A extends unknown[]>(name: N, fn: (...args: A) => unknown): void
    /** Register event and only trigger once*/
    once<T extends [name: string, ...args: unknown[]]>(name: T[0], fn: (...args: TupleTail<T>) => unknown): void
    /** Register event and only trigger once*/
    once<T extends { name: string, args: unknown[] }>(name: T['name'], fn: (...args: T['args']) => unknown): void
    once(name: string, f: (...args: unknown[]) => unknown) {
        const e = this.#regs.getOrAdd(name, () => new TypedEvent)
        e.once(f)
    }

    /** Unregister */
    off<N extends string, A extends unknown[]>(name: N, fn: (...args: A) => unknown): void
    /** Unregister */
    off<T extends [name: string, ...args: unknown[]]>(name: T[0], fn: (...args: TupleTail<T>) => unknown): void
    /** Unregister */
    off<T extends { name: string, args: unknown[] }>(name: T['name'], fn: (...args: T['args']) => unknown): void
    off(name: string, f: (...args: unknown[]) => unknown) {
        this.#regs.get(name)?.off(f)
    }
}

/** Event pool
 * @deprecated use `EventPool`
 */
export const PEvents = EventBus

/** Typed Event Pool */
export class EventHub<P extends { [K in string | string | symbol]: EventLike<unknown[]> }> {
    constructor(init: { [K in keyof P]: () => P[K] }) {
        this.#init = init
    }
    #init: { [K in keyof P]: () => P[K] }

    #regs = once<MutableExMap<Map<keyof P, P[keyof P]>>>()

    /** Emit the event */
    emit<K extends keyof P>(name: K, ...args: EventHubFnParameters<P, K>) {
        runWhenInit(this.#regs, regs => {
            regs.getAndThen(name, e => e.emit(...args))
        })
    }

    /** Register event */
    on<K extends keyof P>(name: K, f: EventHubFn<P, K>) {
        const regs = getOrInit<MutableExMap<Map<keyof P, P[keyof P]>>>(this.#regs, () => MutMapEx(new Map))
        const e = regs.getOrAdd(name, () => this.#init[name]())
        e.on(f as any)
    }

    /** Unregister */
    off<K extends keyof P>(name: K, f: EventHubFn<P, K>) {
        runWhenInit(this.#regs, regs => {
            regs.getAndThen(name, e => e.off(f as any))
        })
    }

    /** Register event and only trigger once*/
    once<K extends Extract<keyof P, { [K in keyof P]: Extract<P[K], OnceableEventLike<any>> }[keyof P]>>(name: K, f: EventHubFn<P, K>) {
        const regs = getOrInit<MutableExMap<Map<keyof P, P[keyof P]>>>(this.#regs, () => MutMapEx(new Map))
        const e = regs.getOrAdd(name, () => this.#init[name]()) as any as OnceableEventLike<any>
        e.once(f)
    }
}

/** Get zhe define obj of EventHub */
export type EventHubDef<T extends EventHub<{ [K in string | string | symbol]: EventLike<unknown[]> }>> = T extends EventHub<infer D> ? D : never
/** EventHub Fn Parameters */
export type EventHubFnParameters<T extends { [K in string | string | symbol]: EventLike<unknown[]> }, K extends keyof T> = EventLikeParameters<T[K]>
/** EventHub Fn */
export type EventHubFn<T extends { [K in string | string | symbol]: EventLike<unknown[]> }, K extends keyof T> = (...args: EventLikeParameters<T[K]>) => void

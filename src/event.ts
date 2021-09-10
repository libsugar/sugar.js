import { MutMapEx } from "./map"
import { TupleTail } from "./types"

/** Type safe event interface */
export interface IEvent<A extends unknown[] = []> {
    emit(...args: A): void
    on(f: (...args: A) => void): void
    once(f: (...args: A) => void): void
    off(f: (...args: A) => void): void
}

/** Type safe event */
export class TEvent<A extends unknown[] = []> implements IEvent<A> {
    #fns = new Set<(...args: A) => void>()
    #onces = new Set<(...args: A) => void>()

    /** Emit the event */
    emit(...args: A) {
        for (const fn of this.#fns) {
            new Promise<void>(res => {
                fn(...args)
                res()
            })
        }
        for (const once of this.#onces) {
            this.#fns.delete(once)
        }
        this.#onces.clear()
    }

    /** Register event */
    on(f: (...args: A) => void) {
        this.#fns.add(f)
    }

    /** Register event and only trigger once*/
    once(f: (...args: A) => void) {
        this.#fns.add(f)
        this.#onces.add(f)
    }

    /** Unregister */
    off(f: (...args: A) => void) {
        this.#fns.delete(f)
        this.#onces.delete(f)
    }
}

/** Event pool */
export class PEvents {
    #regs = MutMapEx(new Map<string, TEvent<any>>())

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
        const e = this.#regs.getOrAdd(name, () => new TEvent)
        e.on(f)
    }

    /** Register event and only trigger once*/
    once<N extends string, A extends unknown[]>(name: N, fn: (...args: A) => unknown): void
    /** Register event and only trigger once*/
    once<T extends [name: string, ...args: unknown[]]>(name: T[0], fn: (...args: TupleTail<T>) => unknown): void
    /** Register event and only trigger once*/
    once<T extends { name: string, args: unknown[] }>(name: T['name'], fn: (...args: T['args']) => unknown): void
    once(name: string, f: (...args: unknown[]) => unknown) {
        const e = this.#regs.getOrAdd(name, () => new TEvent)
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

import { MutMapEx } from "./map"
import { TupleTail } from "./types"

/** Type safe event */
export class TEvent<A extends any[] = []> {
    #fns = new Set<(...args: A) => any>()
    #onces = new Set<(...args: A) => any>()

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
    on(f: (...args: A) => any) {
        this.#fns.add(f)
    }

    /** Register event and only trigger once*/
    once(f: (...args: A) => any) {
        this.#fns.add(f)
        this.#onces.add(f)
    }

    /** Unregister */
    off(f: (...args: A) => any) {
        this.#fns.delete(f)
        this.#onces.delete(f)
    }
}


export class PEvents {
    #regs = MutMapEx(new Map<string, TEvent<any>>())

    emit<N extends string, A extends unknown[]>(name: N, ...args: A): void
    emit<T extends [name: string, ...args: unknown[]]>(name: T[0], ...args: TupleTail<T>): void
    emit<T extends { name: string, args: unknown[] }>(name: T['name'], ...args: T['args']): void
    emit(name: string, ...args: unknown[]) {
        this.#regs.get(name)?.emit(...args)
    }

    on<N extends string, A extends unknown[]>(name: N, fn: (...args: A) => unknown): void
    on<T extends [name: string, ...args: unknown[]]>(name: T[0], fn: (...args: TupleTail<T>) => unknown): void
    on<T extends { name: string, args: unknown[] }>(name: T['name'], fn: (...args: T['args']) => unknown): void
    on(name: string, f: (...args: unknown[]) => unknown) {
        const e = this.#regs.getOrAdd(name, () => new TEvent)
        e.on(f)
    }

    once<N extends string, A extends unknown[]>(name: N, fn: (...args: A) => unknown): void
    once<T extends [name: string, ...args: unknown[]]>(name: T[0], fn: (...args: TupleTail<T>) => unknown): void
    once<T extends { name: string, args: unknown[] }>(name: T['name'], fn: (...args: T['args']) => unknown): void
    once(name: string, f: (...args: unknown[]) => unknown) {
        const e = this.#regs.getOrAdd(name, () => new TEvent)
        e.once(f)
    }

    off<N extends string, A extends unknown[]>(name: N, fn: (...args: A) => unknown): void
    off<T extends [name: string, ...args: unknown[]]>(name: T[0], fn: (...args: TupleTail<T>) => unknown): void
    off<T extends { name: string, args: unknown[] }>(name: T['name'], fn: (...args: T['args']) => unknown): void
    off(name: string, f: (...args: unknown[]) => unknown) {
        this.#regs.get(name)?.off(f)
    }
}

/** Run now */
export function run<U>(f: () => U): U {
    return f()
}

/** Do nothing
 * 
 * ```ts
 * let a: undefined = run()
 * ```
*/
export function call(): void
/** Run now 
 * 
 * ```ts
 * let b: 0 = run(() => 0)
 * ```
*/
export function call<U>(f: () => U): U
/** Call function 
 * 
 * ```ts
 * let a: undefined = run()
 * let b: 0 = run(() => 0)
 * let c: 1 = run(1, v => v)
 * let d: 3 = run(1, 2, (a, b) => a + b)
 * ```
*/
export function call<A extends any[], U>(...args: [...args: A, f: (...args: A) => U]): U
export function call(...args: any[]) {
    if (args.length === 0) return
    const last = args.pop()
    return last(...args)
}

/** Use a value and make a mapping */
export function used<T, U>(v: T, f: (v: T) => U): U {
    return f(v)
}

/** Use value and do something extra */
export function also<T>(v: T, f: (v: T) => void): T {
    f(v)
    return v
}

/** Do nothing 
 * 
 * ```ts
 * let a: undefined = collect()
 * ```
*/
export function collect(): void
/** Collect Iterable or Generator 
 * 
 * ```ts
 * let b: 1 = collect(function* () { yield 1 })
 * ```
*/
export function collect<T>(f: () => Iterable<T>): T[]
/** Call function 
 * 
 * ```ts
 * let a: undefined = collect()
 * let b: 1 = collect(function* () { yield 1 })
 * let c: [1, 2, 3] = collect(1, 2, 3, function* (a, b, c) { yield* [a, b, c] })
 * ```
*/
export function collect<A extends any[], T>(...args: [...args: A, f: (...args: A) => Iterable<T>]): T[]
export function collect(...args: any[]): any {
    if (args.length === 0) return
    const last = args.pop()
    return [...last(...args)]
}

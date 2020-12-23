
export type DefaultOrFunc<T> = T | (() => T)

/** Get `T` in `DefaultOrFunc<T>` */
export function getDefault<T>(defv: DefaultOrFunc<T>): T {
    if (typeof defv === 'function') return (defv as any)()
    return defv
}

/** Identity function */
export function identity<T>(val: T): T {
    return val
}

/** Do nothing */
export function empty(): void { }

/** `throw 'todo'` */
export function TODO(reason: any = 'todo'): never {
    throw reason ?? 'todo'
}

/** throw but expression */
export function raise(err: any): never {
    throw err
}


export type DefaultOrFunc<T> = T | (() => T)

export function getDefault<T>(defv: DefaultOrFunc<T>): T {
    if (typeof defv === 'function') return (defv as any)()
    return defv
}

export function identity<T>(val: T): T {
    return val
}

export function empty(): void { }

export function TODO(reason: any = 'todo'): never {
    throw reason ?? 'todo'
}

export function raise(err: any): never {
    throw err
}


export type DefaultOrFunc<T> = T | (() => T)

export function getDefault<T>(defv: DefaultOrFunc<T>): T {
    if (typeof defv === 'function') return (defv as any)()
    return defv
}

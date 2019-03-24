export function fnOf<T>(value: T): () => T {
    return () => value
}
export function classOf<T>(value: T): new () => T {
    value = Object(value)
    return new Proxy(null, {
        construct() {
            return value as any
        }
    })
}
export function protoOf<T, P>(value: T, proto: P): T & P {
    proto = Object(proto)
    return new Proxy(Object(value), {
        getPrototypeOf() {
            return proto as any
        }
    })
}
export function promiseOf(): Promise<void>
export function promiseOf<T>(value: T | PromiseLike<T>): Promise<any>
export function promiseOf(value?: any): any {
    return Promise.resolve(value)
}
export function boxOf<T, B>(boxof: (value: T) => B, value: T): B {
    return boxof(value)
}
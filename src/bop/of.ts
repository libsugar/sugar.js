/**
 * Wrap a value into a function that returns it
 * @param value The value to be wrapped
 */
export function fnOf<T>(value: T): () => T {
    return () => value
}
/**
 * Wrap a value into a constructor that constructs it
 * @param value The value to be wrapped
 */
export function classOf<T>(value: T): new () => T {
    value = Object(value)
    return new Proxy({} as any, {
        construct() {
            return value as any
        }
    })
}
/**
 * Wrap a value so that its prototype is `proto``proto`
 * @param value The value to be wrapped
 * @param proto Prototype value
 */
export function protoOf<T, P>(value: T, proto: P): T & P {
    proto = Object(proto)
    return new Proxy(Object(value), {
        getPrototypeOf() {
            return proto as any
        }
    })
}
/**
 * Wrap a value into a promise
 */
export function promiseOf(): Promise<void>
/**
 * Wrap a value into a promise
 * @param value The value to be wrapped
 */
export function promiseOf<T>(value: T | PromiseLike<T>): Promise<any>
export function promiseOf(value?: any): any {
    return Promise.resolve(value)
}
/**
 * Box a value
 * @param boxof Wrapper function
 * @param value Value
 */
export function boxOf<T, B>(boxof: (value: T) => B, value: T): B {
    return boxof(value)
}
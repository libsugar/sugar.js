/**
 * 将一个值包装成返回它的函数
 * @param value 要包装的值
 */
export function fnOf<T>(value: T): () => T {
    return () => value
}
/**
 * 将一个值包装成生成它的构造函数
 * @param value 要包装的值
 */
export function classOf<T>(value: T): new () => T {
    value = Object(value)
    return new Proxy(null, {
        construct() {
            return value as any
        }
    })
}
/**
 * 包装一个值使其的原型为`proto`
 * @param value 要包装的值
 * @param proto 原型值
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
 * 将一个值包装成promise
 */
export function promiseOf(): Promise<void>
/**
 * 将一个值包装成promise
 * @param value 要包装的值
 */
export function promiseOf<T>(value: T | PromiseLike<T>): Promise<any>
export function promiseOf(value?: any): any {
    return Promise.resolve(value)
}
/**
 * 将一个值装箱
 * @param boxof 包装函数
 * @param value 值
 */
export function boxOf<T, B>(boxof: (value: T) => B, value: T): B {
    return boxof(value)
}
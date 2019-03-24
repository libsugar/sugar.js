/**
 * 将一个值包装成返回它的函数
 * @param value 要包装的值
 */
export declare function fnOf<T>(value: T): () => T;
/**
 * 将一个值包装成生成它的构造函数
 * @param value 要包装的值
 */
export declare function classOf<T>(value: T): new () => T;
/**
 * 包装一个值使其的原型为`proto`
 * @param value 要包装的值
 * @param proto 原型值
 */
export declare function protoOf<T, P>(value: T, proto: P): T & P;
/**
 * 将一个值包装成promise
 */
export declare function promiseOf(): Promise<void>;
/**
 * 将一个值包装成promise
 * @param value 要包装的值
 */
export declare function promiseOf<T>(value: T | PromiseLike<T>): Promise<any>;
/**
 * 将一个值装箱
 * @param boxof 包装函数
 * @param value 值
 */
export declare function boxOf<T, B>(boxof: (value: T) => B, value: T): B;

/**
 * Wrap a value into a function that returns it
 * @param value The value to be wrapped
 */
export declare function fnOf<T>(value: T): () => T;
/**
 * Wrap a value into a constructor that constructs it
 * @param value The value to be wrapped
 */
export declare function classOf<T>(value: T): new () => T;
/**
 * Wrap a value so that its prototype is `proto``proto`
 * @param value The value to be wrapped
 * @param proto Prototype value
 */
export declare function protoOf<T, P>(value: T, proto: P): T & P;
/**
 * Wrap a value into a promise
 */
export declare function promiseOf(): Promise<void>;
/**
 * Wrap a value into a promise
 * @param value The value to be wrapped
 */
export declare function promiseOf<T>(value: T | PromiseLike<T>): Promise<any>;
/**
 * Box a value
 * @param boxof Wrapper function
 * @param value Value
 */
export declare function boxOf<T, B>(boxof: (value: T) => B, value: T): B;

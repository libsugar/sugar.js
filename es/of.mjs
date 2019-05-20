/**
 * Wrap a value into a function that returns it
 * @param value The value to be wrapped
 */
export function fnOf(value) {
    return () => value;
}
/**
 * Wrap a value into a constructor that constructs it
 * @param value The value to be wrapped
 */
export function classOf(value) {
    value = Object(value);
    return new Proxy({}, {
        construct() {
            return value;
        }
    });
}
/**
 * Wrap a value so that its prototype is `proto``proto`
 * @param value The value to be wrapped
 * @param proto Prototype value
 */
export function protoOf(value, proto) {
    proto = Object(proto);
    return new Proxy(Object(value), {
        getPrototypeOf() {
            return proto;
        }
    });
}
export function promiseOf(value) {
    return Promise.resolve(value);
}
/**
 * Box a value
 * @param boxof Wrapper function
 * @param value Value
 */
export function boxOf(boxof, value) {
    return boxof(value);
}

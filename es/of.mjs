/**
 * 将一个值包装成返回它的函数
 * @param value 要包装的值
 */
export function fnOf(value) {
    return () => value;
}
/**
 * 将一个值包装成生成它的构造函数
 * @param value 要包装的值
 */
export function classOf(value) {
    value = Object(value);
    return new Proxy(null, {
        construct() {
            return value;
        }
    });
}
/**
 * 包装一个值使其的原型为`proto`
 * @param value 要包装的值
 * @param proto 原型值
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
 * 将一个值装箱
 * @param boxof 包装函数
 * @param value 值
 */
export function boxOf(boxof, value) {
    return boxof(value);
}

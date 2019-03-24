(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 将一个值包装成返回它的函数
     * @param value 要包装的值
     */
    function fnOf(value) {
        return () => value;
    }
    exports.fnOf = fnOf;
    /**
     * 将一个值包装成生成它的构造函数
     * @param value 要包装的值
     */
    function classOf(value) {
        value = Object(value);
        return new Proxy(null, {
            construct() {
                return value;
            }
        });
    }
    exports.classOf = classOf;
    /**
     * 包装一个值使其的原型为`proto`
     * @param value 要包装的值
     * @param proto 原型值
     */
    function protoOf(value, proto) {
        proto = Object(proto);
        return new Proxy(Object(value), {
            getPrototypeOf() {
                return proto;
            }
        });
    }
    exports.protoOf = protoOf;
    function promiseOf(value) {
        return Promise.resolve(value);
    }
    exports.promiseOf = promiseOf;
    /**
     * 将一个值装箱
     * @param boxof 包装函数
     * @param value 值
     */
    function boxOf(boxof, value) {
        return boxof(value);
    }
    exports.boxOf = boxOf;
});

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
     * Wrap a value into a function that returns it
     * @param value The value to be wrapped
     */
    function fnOf(value) {
        return () => value;
    }
    exports.fnOf = fnOf;
    /**
     * Wrap a value into a constructor that constructs it
     * @param value The value to be wrapped
     */
    function classOf(value) {
        value = Object(value);
        return new Proxy({}, {
            construct() {
                return value;
            }
        });
    }
    exports.classOf = classOf;
    /**
     * Wrap a value so that its prototype is `proto``proto`
     * @param value The value to be wrapped
     * @param proto Prototype value
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
     * Box a value
     * @param boxof Wrapper function
     * @param value Value
     */
    function boxOf(boxof, value) {
        return boxof(value);
    }
    exports.boxOf = boxOf;
});

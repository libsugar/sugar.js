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
    /** or
     *
     * 等价于 `a || b || c ....`
     *
     * @param bool 需要判断的值或者返回需要判断的值的函数
     */
    function or(...bool) {
        for (const item of bool) {
            if (typeof item == 'function' ? item() : item)
                return true;
        }
        return false;
    }
    exports.or = or;
    /** and
     *
     * 等价于 `a && b && c ....`
     *
     * @param bool 需要判断的值或者返回需要判断的值的函数
     */
    function and(...bool) {
        for (const item of bool) {
            if (!(typeof item == 'function' ? item() : item))
                return false;
        }
        return true;
    }
    exports.and = and;
    /**
     * 对数组节流
     *
     * 每2个为一组输出
     * @param arr 要被节流的数组
     */
    function* take2(arr) {
        let tuple = [];
        for (const item of arr) {
            tuple.push(item);
            if (tuple.length == 2) {
                yield tuple;
                tuple = [];
            }
        }
    }
    function orGroup(logic, ...items) {
        for (const [a, b] of take2(items)) {
            if (logic(a, b))
                return true;
        }
        return false;
    }
    exports.orGroup = orGroup;
    function andGroup(logic, ...items) {
        for (const [a, b] of take2(items)) {
            if (!logic(a, b))
                return false;
        }
        return true;
    }
    exports.andGroup = andGroup;
    function orDo(logic, ...items) {
        for (const item of items) {
            if (logic(item))
                return true;
        }
        return false;
    }
    exports.orDo = orDo;
    function andDo(logic, ...items) {
        for (const item of items) {
            if (!logic(item))
                return false;
        }
        return true;
    }
    exports.andDo = andDo;
    /** orDoGet
     *
     * 等价于 `logic(a()) || logic(b()) ....`
     *
     * @param logic 逻辑判断函数
     * @param item 要判断的项
     * @param items 其他要判断的项
     */
    function orDoGet(logic, ...items) {
        for (const item of items) {
            if (logic(item()))
                return true;
        }
        return false;
    }
    exports.orDoGet = orDoGet;
    /** andDoGet
     *
     * 等价于 `logic(a()) && logic(b()) ....`
     *
     * @param logic 逻辑判断函数
     * @param item 要判断的项
     * @param items 其他要判断的项
     */
    function andDoGet(logic, ...items) {
        for (const item of items) {
            if (!logic(item()))
                return false;
        }
        return true;
    }
    exports.andDoGet = andDoGet;
});

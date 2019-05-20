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
     * Equivalent `a || b || c ....`
     *
     * @param bool The value to be judged or the function that returns value to be judged
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
     * Equivalent `a && b && c ....`
     *
     * @param bool The value to be judged or the function that returns value to be judged
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
     * Throttling the array
     *
     * Every 2 is a set of outputs
     * @param arr The array to be throttled
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
     * Equivalent `logic(a()) || logic(b()) ....`
     *
     * @param logic Logical judgment function
     * @param item Item to be judged
     * @param items Other items to judge
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
     * Equivalent `logic(a()) && logic(b()) ....`
     *
     * @param logic Logical judgment function
     * @param item Item to be judged
     * @param items Other items to judge
     */
    function andDoGet(logic, ...items) {
        for (const item of items) {
            if (!logic(item()))
                return false;
        }
        return true;
    }
    exports.andDoGet = andDoGet;
    function orDoAll(item, ...logics) {
        for (const logic of logics) {
            if (logic(item))
                return true;
        }
        return false;
    }
    exports.orDoAll = orDoAll;
    function andDoAll(item, ...logics) {
        for (const logic of logics) {
            if (!logic(item))
                return false;
        }
        return true;
    }
    exports.andDoAll = andDoAll;
    function orDoGetAll(item, ...logics) {
        for (const logic of logics) {
            if (logic(item()))
                return true;
        }
        return false;
    }
    exports.orDoGetAll = orDoGetAll;
    function andDoGetAll(item, ...logics) {
        for (const logic of logics) {
            if (!logic(item()))
                return false;
        }
        return true;
    }
    exports.andDoGetAll = andDoGetAll;
});

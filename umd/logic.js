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
    function or(...bool) {
        for (const item of bool) {
            if (item)
                return true;
        }
        return false;
    }
    exports.or = or;
    function and(...bool) {
        for (const item of bool) {
            if (!item)
                return false;
        }
        return true;
    }
    exports.and = and;
    function orFn(...bool) {
        for (const item of bool) {
            if (typeof item == 'function' ? item() : item)
                return true;
        }
        return false;
    }
    exports.orFn = orFn;
    function andFn(...bool) {
        for (const item of bool) {
            if (!(typeof item == 'function' ? item() : item))
                return false;
        }
        return true;
    }
    exports.andFn = andFn;
});

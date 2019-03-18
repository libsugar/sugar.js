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
    function typeofOr(type, ...objs) {
        if (objs.length == 0)
            return false;
        for (const o of objs) {
            if (typeof o === type)
                return true;
        }
        return false;
    }
    exports.typeofOr = typeofOr;
    function typeofAnd(type, ...objs) {
        if (objs.length == 0)
            return false;
        for (const o of objs) {
            if (typeof o !== type)
                return false;
        }
        return true;
    }
    exports.typeofAnd = typeofAnd;
    function typeofAny(obj, ...types) {
        if (types.length == 0)
            return false;
        const type = typeof obj;
        for (const t of types) {
            if (type === t)
                return true;
        }
        return false;
    }
    exports.typeofAny = typeofAny;
});

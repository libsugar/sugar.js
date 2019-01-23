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
    function instanceofOr(type, ...objs) {
        for (const o of objs) {
            if (o instanceof type)
                return true;
        }
        return false;
    }
    exports.instanceofOr = instanceofOr;
    function instanceofAnd(type, ...objs) {
        for (const o of objs) {
            if (!(o instanceof type))
                return false;
        }
        return true;
    }
    exports.instanceofAnd = instanceofAnd;
});

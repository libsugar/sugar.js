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
    function deleteAll(obj, ...keys) {
        let ret = true;
        for (const key of keys) {
            if (!(delete obj[key]))
                ret = false;
        }
        return ret;
    }
    exports.deleteAll = deleteAll;
});

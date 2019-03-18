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
    function geOr(self, ...others) {
        if (others.length == 0)
            return self;
        for (const other of others) {
            if (self >= other)
                return true;
        }
        return false;
    }
    exports.geOr = geOr;
    function geAnd(self, ...others) {
        if (others.length == 0)
            return self;
        for (const other of others) {
            if (!(self >= other))
                return false;
        }
        return true;
    }
    exports.geAnd = geAnd;
    function allGeOr(self, ...others) {
        if (others.length == 0)
            return self;
        for (const other of others) {
            if (other >= self)
                return true;
        }
        return false;
    }
    exports.allGeOr = allGeOr;
    function allGeAnd(self, ...others) {
        if (others.length == 0)
            return self;
        for (const other of others) {
            if (!(other >= self))
                return false;
        }
        return true;
    }
    exports.allGeAnd = allGeAnd;
});

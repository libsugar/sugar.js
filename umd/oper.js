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
    function sum(num, ...others) {
        for (const other of others) {
            num += other;
        }
        return num;
    }
    exports.sum = sum;
    function addAll(num, ...others) {
        for (const other of others) {
            num += other;
        }
        return num;
    }
    exports.addAll = addAll;
    function subAll(num, ...others) {
        for (const other of others) {
            num -= other;
        }
        return num;
    }
    exports.subAll = subAll;
    function prod(num, ...others) {
        for (const other of others) {
            num *= other;
        }
        return num;
    }
    exports.prod = prod;
    function mulAll(num, ...others) {
        for (const other of others) {
            num *= other;
        }
        return num;
    }
    exports.mulAll = mulAll;
    function quot(num, ...others) {
        for (const other of others) {
            num /= other;
        }
        return num;
    }
    exports.quot = quot;
    function divAll(num, ...others) {
        for (const other of others) {
            num /= other;
        }
        return num;
    }
    exports.divAll = divAll;
    function modAll(num, ...others) {
        for (const other of others) {
            num %= other;
        }
        return num;
    }
    exports.modAll = modAll;
    function powAll(num, ...others) {
        for (const other of others) {
            num **= other;
        }
        return num;
    }
    exports.powAll = powAll;
});

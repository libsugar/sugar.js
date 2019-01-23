(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./eq", "./oper", "./typeof", "./logic", "./instanceof", "./bitoper"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./eq"));
    __export(require("./oper"));
    __export(require("./typeof"));
    __export(require("./logic"));
    __export(require("./instanceof"));
    __export(require("./bitoper"));
});

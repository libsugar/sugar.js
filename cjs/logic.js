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

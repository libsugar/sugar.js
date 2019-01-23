"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function eqOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self == other)
            return true;
    }
    return false;
}
exports.eqOr = eqOr;
function eqAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self != other)
            return false;
    }
    return true;
}
exports.eqAnd = eqAnd;
function fEqOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self === other)
            return true;
    }
    return false;
}
exports.fEqOr = fEqOr;
function fEqAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self !== other)
            return false;
    }
    return true;
}
exports.fEqAnd = fEqAnd;

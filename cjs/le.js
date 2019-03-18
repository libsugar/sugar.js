"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function leOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self <= other)
            return true;
    }
    return false;
}
exports.leOr = leOr;
function leAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self >= other))
            return false;
    }
    return true;
}
exports.leAnd = leAnd;
function allLeOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other <= self)
            return true;
    }
    return false;
}
exports.allLeOr = allLeOr;
function allLeAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other >= self))
            return false;
    }
    return true;
}
exports.allLeAnd = allLeAnd;

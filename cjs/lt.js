"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ltOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self < other)
            return true;
    }
    return false;
}
exports.ltOr = ltOr;
function ltAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self > other))
            return false;
    }
    return true;
}
exports.ltAnd = ltAnd;
function allLtOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other < self)
            return true;
    }
    return false;
}
exports.allLtOr = allLtOr;
function allLtAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other > self))
            return false;
    }
    return true;
}
exports.allLtAnd = allLtAnd;

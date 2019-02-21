"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gtOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self > other)
            return true;
    }
    return false;
}
exports.gtOr = gtOr;
function gtAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self > other))
            return false;
    }
    return true;
}
exports.gtAnd = gtAnd;

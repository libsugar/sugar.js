'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function eqOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self == other)
            return true;
    }
    return false;
}
function eqAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self != other)
            return false;
    }
    return true;
}
function fEqOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self === other)
            return true;
    }
    return false;
}
function fEqAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self !== other)
            return false;
    }
    return true;
}

function sum(num, ...others) {
    for (const other of others) {
        num += other;
    }
    return num;
}
function addAll(num, ...others) {
    for (const other of others) {
        num += other;
    }
    return num;
}
function subAll(num, ...others) {
    for (const other of others) {
        num -= other;
    }
    return num;
}
function prod(num, ...others) {
    for (const other of others) {
        num *= other;
    }
    return num;
}
function mulAll(num, ...others) {
    for (const other of others) {
        num *= other;
    }
    return num;
}
function quot(num, ...others) {
    for (const other of others) {
        num /= other;
    }
    return num;
}
function divAll(num, ...others) {
    for (const other of others) {
        num /= other;
    }
    return num;
}
function modAll(num, ...others) {
    for (const other of others) {
        num %= other;
    }
    return num;
}
function powAll(num, ...others) {
    for (const other of others) {
        num **= other;
    }
    return num;
}

function typeofOr(type, ...objs) {
    if (objs.length == 0)
        return false;
    for (const o of objs) {
        if (typeof o === type)
            return true;
    }
    return false;
}
function typeofAnd(type, ...objs) {
    if (objs.length == 0)
        return false;
    for (const o of objs) {
        if (typeof o !== type)
            return false;
    }
    return true;
}

function or(...bool) {
    for (const item of bool) {
        if (item)
            return true;
    }
    return false;
}
function and(...bool) {
    for (const item of bool) {
        if (!item)
            return false;
    }
    return true;
}
function orFn(...bool) {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item)
            return true;
    }
    return false;
}
function andFn(...bool) {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item))
            return false;
    }
    return true;
}

function instanceofOr(type, ...objs) {
    for (const o of objs) {
        if (o instanceof type)
            return true;
    }
    return false;
}
function instanceofAnd(type, ...objs) {
    for (const o of objs) {
        if (!(o instanceof type))
            return false;
    }
    return true;
}

function leftShiftAll(num, ...others) {
    for (const other of others) {
        num <<= other;
    }
    return num;
}
function rightShiftAll(num, ...others) {
    for (const other of others) {
        num >>= other;
    }
    return num;
}
function uRightShiftAll(num, ...others) {
    for (const other of others) {
        num >>>= other;
    }
    return num;
}
function bitAndAll(num, ...others) {
    for (const other of others) {
        num &= other;
    }
    return num;
}
function bitXorAll(num, ...others) {
    for (const other of others) {
        num ^= other;
    }
    return num;
}
function bitOrAll(num, ...others) {
    for (const other of others) {
        num |= other;
    }
    return num;
}

exports.eqOr = eqOr;
exports.eqAnd = eqAnd;
exports.fEqOr = fEqOr;
exports.fEqAnd = fEqAnd;
exports.sum = sum;
exports.addAll = addAll;
exports.subAll = subAll;
exports.prod = prod;
exports.mulAll = mulAll;
exports.quot = quot;
exports.divAll = divAll;
exports.modAll = modAll;
exports.powAll = powAll;
exports.typeofOr = typeofOr;
exports.typeofAnd = typeofAnd;
exports.or = or;
exports.and = and;
exports.orFn = orFn;
exports.andFn = andFn;
exports.instanceofOr = instanceofOr;
exports.instanceofAnd = instanceofAnd;
exports.leftShiftAll = leftShiftAll;
exports.rightShiftAll = rightShiftAll;
exports.uRightShiftAll = uRightShiftAll;
exports.bitAndAll = bitAndAll;
exports.bitXorAll = bitXorAll;
exports.bitOrAll = bitOrAll;

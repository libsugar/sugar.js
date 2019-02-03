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

function nEqOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self != other)
            return true;
    }
    return false;
}
function nEqAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self == other)
            return false;
    }
    return true;
}
function fNEqOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self !== other)
            return true;
    }
    return false;
}
function fNEqAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self === other)
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

function instanceofOr(obj, ...types) {
    for (const type of types) {
        if (obj instanceof type)
            return true;
    }
    return false;
}
function instanceofAnd(obj, ...types) {
    for (const type of types) {
        if (!(obj instanceof type))
            return false;
    }
    return true;
}
function AllInstanceofOr(type, ...objs) {
    for (const o of objs) {
        if (o instanceof type)
            return true;
    }
    return false;
}
function AllInstanceofAnd(type, ...objs) {
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

function inOr(obj, ...keys) {
    if (keys.length == 0)
        return false;
    for (const key of keys) {
        if (key in obj)
            return true;
    }
    return false;
}
function inAnd(obj, ...keys) {
    if (keys.length == 0)
        return false;
    for (const key of keys) {
        if (!(key in obj))
            return false;
    }
    return true;
}

function deleteAll(obj, ...keys) {
    for (const key of keys) {
        if (!(delete obj[key]))
            return false;
    }
    return true;
}

export { eqOr, eqAnd, fEqOr, fEqAnd, nEqOr, nEqAnd, fNEqOr, fNEqAnd, sum, addAll, subAll, prod, mulAll, quot, divAll, modAll, powAll, typeofOr, typeofAnd, or, and, orFn, andFn, instanceofOr, instanceofAnd, AllInstanceofOr, AllInstanceofAnd, leftShiftAll, rightShiftAll, uRightShiftAll, bitAndAll, bitXorAll, bitOrAll, inOr, inAnd, deleteAll };

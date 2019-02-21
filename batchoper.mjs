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

function neOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self != other)
            return true;
    }
    return false;
}
function neAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self == other)
            return false;
    }
    return true;
}
function fNeOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self !== other)
            return true;
    }
    return false;
}
function fNeAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self === other)
            return false;
    }
    return true;
}

function gtOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self > other)
            return true;
    }
    return false;
}
function gtAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self > other))
            return false;
    }
    return true;
}

function ltOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self < other)
            return true;
    }
    return false;
}
function ltAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self > other))
            return false;
    }
    return true;
}

function geOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self >= other)
            return true;
    }
    return false;
}
function geAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self >= other))
            return false;
    }
    return true;
}

function leOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self <= other)
            return true;
    }
    return false;
}
function leAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self >= other))
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

function deleteAll(obj, ...keys) {
    for (const key of keys) {
        if (!(delete obj[key]))
            return false;
    }
    return true;
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

function or(...bool) {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item)
            return true;
    }
    return false;
}
function and(...bool) {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item))
            return false;
    }
    return true;
}
function* take2(arr) {
    let tuple = [];
    for (const item of arr) {
        tuple.push(item);
        if (tuple.length == 2) {
            yield tuple;
            tuple = [];
        }
    }
}
function orGroup(logic, ...items) {
    for (const [a, b] of take2(items)) {
        if (logic(a, b))
            return true;
    }
    return false;
}
function andGroup(logic, ...items) {
    for (const [a, b] of take2(items)) {
        if (!logic(a, b))
            return false;
    }
    return true;
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

export { eqOr, eqAnd, fEqOr, fEqAnd, neOr, neAnd, fNeOr, fNeAnd, gtOr, gtAnd, ltOr, ltAnd, geOr, geAnd, leOr, leAnd, sum, addAll, subAll, prod, mulAll, quot, divAll, modAll, powAll, leftShiftAll, rightShiftAll, uRightShiftAll, bitAndAll, bitXorAll, bitOrAll, deleteAll, inOr, inAnd, instanceofOr, instanceofAnd, AllInstanceofOr, AllInstanceofAnd, or, and, orGroup, andGroup, typeofOr, typeofAnd };

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
function allGtOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other > self)
            return true;
    }
    return false;
}
function allGtAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other > self))
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
function allLtOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other < self)
            return true;
    }
    return false;
}
function allLtAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other > self))
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
function allGeOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other >= self)
            return true;
    }
    return false;
}
function allGeAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other >= self))
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
function allLeOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other <= self)
            return true;
    }
    return false;
}
function allLeAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other >= self))
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
    let ret = true;
    for (const key of keys) {
        if (!(delete obj[key]))
            ret = false;
    }
    return ret;
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

/** or
 *
 * Equivalent `a || b || c ....`
 *
 * @param bool The value to be judged or the function that returns value to be judged
 */
function or(...bool) {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item)
            return true;
    }
    return false;
}
/** and
 *
 * Equivalent `a && b && c ....`
 *
 * @param bool The value to be judged or the function that returns value to be judged
 */
function and(...bool) {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item))
            return false;
    }
    return true;
}
/**
 * Throttling the array
 *
 * Every 2 is a set of outputs
 * @param arr The array to be throttled
 */
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
function orDo(logic, ...items) {
    for (const item of items) {
        if (logic(item))
            return true;
    }
    return false;
}
function andDo(logic, ...items) {
    for (const item of items) {
        if (!logic(item))
            return false;
    }
    return true;
}
/** orDoGet
 *
 * Equivalent `logic(a()) || logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
function orDoGet(logic, ...items) {
    for (const item of items) {
        if (logic(item()))
            return true;
    }
    return false;
}
/** andDoGet
 *
 * Equivalent `logic(a()) && logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
function andDoGet(logic, ...items) {
    for (const item of items) {
        if (!logic(item()))
            return false;
    }
    return true;
}
function orDoAll(item, ...logics) {
    for (const logic of logics) {
        if (logic(item))
            return true;
    }
    return false;
}
function andDoAll(item, ...logics) {
    for (const logic of logics) {
        if (!logic(item))
            return false;
    }
    return true;
}
function orDoGetAll(item, ...logics) {
    for (const logic of logics) {
        if (logic(item()))
            return true;
    }
    return false;
}
function andDoGetAll(item, ...logics) {
    for (const logic of logics) {
        if (!logic(item()))
            return false;
    }
    return true;
}

/**
 * Wrap a value into a function that returns it
 * @param value The value to be wrapped
 */
function fnOf(value) {
    return () => value;
}
/**
 * Wrap a value into a constructor that constructs it
 * @param value The value to be wrapped
 */
function classOf(value) {
    value = Object(value);
    return new Proxy({}, {
        construct() {
            return value;
        }
    });
}
/**
 * Wrap a value so that its prototype is `proto``proto`
 * @param value The value to be wrapped
 * @param proto Prototype value
 */
function protoOf(value, proto) {
    proto = Object(proto);
    return new Proxy(Object(value), {
        getPrototypeOf() {
            return proto;
        }
    });
}
function promiseOf(value) {
    return Promise.resolve(value);
}
/**
 * Box a value
 * @param boxof Wrapper function
 * @param value Value
 */
function boxOf(boxof, value) {
    return boxof(value);
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
function typeofAny(obj, ...types) {
    if (types.length == 0)
        return false;
    const type = typeof obj;
    for (const t of types) {
        if (type === t)
            return true;
    }
    return false;
}

export { eqOr, eqAnd, fEqOr, fEqAnd, neOr, neAnd, fNeOr, fNeAnd, gtOr, gtAnd, allGtOr, allGtAnd, ltOr, ltAnd, allLtOr, allLtAnd, geOr, geAnd, allGeOr, allGeAnd, leOr, leAnd, allLeOr, allLeAnd, sum, addAll, subAll, prod, mulAll, quot, divAll, modAll, powAll, leftShiftAll, rightShiftAll, uRightShiftAll, bitAndAll, bitXorAll, bitOrAll, deleteAll, inOr, inAnd, instanceofOr, instanceofAnd, AllInstanceofOr, AllInstanceofAnd, or, and, orGroup, andGroup, orDo, andDo, orDoGet, andDoGet, orDoAll, andDoAll, orDoGetAll, andDoGetAll, fnOf, classOf, protoOf, promiseOf, boxOf, typeofOr, typeofAnd, typeofAny };

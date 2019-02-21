(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.uid = {}));
}(this, function (exports) { 'use strict';

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

    exports.eqOr = eqOr;
    exports.eqAnd = eqAnd;
    exports.fEqOr = fEqOr;
    exports.fEqAnd = fEqAnd;
    exports.neOr = neOr;
    exports.neAnd = neAnd;
    exports.fNeOr = fNeOr;
    exports.fNeAnd = fNeAnd;
    exports.gtOr = gtOr;
    exports.gtAnd = gtAnd;
    exports.ltOr = ltOr;
    exports.ltAnd = ltAnd;
    exports.geOr = geOr;
    exports.geAnd = geAnd;
    exports.leOr = leOr;
    exports.leAnd = leAnd;
    exports.sum = sum;
    exports.addAll = addAll;
    exports.subAll = subAll;
    exports.prod = prod;
    exports.mulAll = mulAll;
    exports.quot = quot;
    exports.divAll = divAll;
    exports.modAll = modAll;
    exports.powAll = powAll;
    exports.leftShiftAll = leftShiftAll;
    exports.rightShiftAll = rightShiftAll;
    exports.uRightShiftAll = uRightShiftAll;
    exports.bitAndAll = bitAndAll;
    exports.bitXorAll = bitXorAll;
    exports.bitOrAll = bitOrAll;
    exports.deleteAll = deleteAll;
    exports.inOr = inOr;
    exports.inAnd = inAnd;
    exports.instanceofOr = instanceofOr;
    exports.instanceofAnd = instanceofAnd;
    exports.AllInstanceofOr = AllInstanceofOr;
    exports.AllInstanceofAnd = AllInstanceofAnd;
    exports.or = or;
    exports.and = and;
    exports.orGroup = orGroup;
    exports.andGroup = andGroup;
    exports.typeofOr = typeofOr;
    exports.typeofAnd = typeofAnd;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

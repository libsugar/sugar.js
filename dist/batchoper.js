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
     * 等价于 `a || b || c ....`
     *
     * @param bool 需要判断的值或者返回需要判断的值的函数
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
     * 等价于 `a && b && c ....`
     *
     * @param bool 需要判断的值或者返回需要判断的值的函数
     */
    function and(...bool) {
        for (const item of bool) {
            if (!(typeof item == 'function' ? item() : item))
                return false;
        }
        return true;
    }
    /**
     * 对数组节流
     *
     * 每2个为一组输出
     * @param arr 要被节流的数组
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

    /**
     * 将一个值包装成返回它的函数
     * @param value 要包装的值
     */
    function fnOf(value) {
        return () => value;
    }
    /**
     * 将一个值包装成生成它的构造函数
     * @param value 要包装的值
     */
    function classOf(value) {
        value = Object(value);
        return new Proxy(null, {
            construct() {
                return value;
            }
        });
    }
    /**
     * 包装一个值使其的原型为`proto`
     * @param value 要包装的值
     * @param proto 原型值
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
     * 将一个值装箱
     * @param boxof 包装函数
     * @param value 值
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
    exports.allGtOr = allGtOr;
    exports.allGtAnd = allGtAnd;
    exports.ltOr = ltOr;
    exports.ltAnd = ltAnd;
    exports.allLtOr = allLtOr;
    exports.allLtAnd = allLtAnd;
    exports.geOr = geOr;
    exports.geAnd = geAnd;
    exports.allGeOr = allGeOr;
    exports.allGeAnd = allGeAnd;
    exports.leOr = leOr;
    exports.leAnd = leAnd;
    exports.allLeOr = allLeOr;
    exports.allLeAnd = allLeAnd;
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
    exports.fnOf = fnOf;
    exports.classOf = classOf;
    exports.protoOf = protoOf;
    exports.promiseOf = promiseOf;
    exports.boxOf = boxOf;
    exports.typeofOr = typeofOr;
    exports.typeofAnd = typeofAnd;
    exports.typeofAny = typeofAny;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function or(...bool) {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item)
            return true;
    }
    return false;
}
exports.or = or;
function and(...bool) {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item))
            return false;
    }
    return true;
}
exports.and = and;
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
exports.orGroup = orGroup;
function andGroup(logic, ...items) {
    for (const [a, b] of take2(items)) {
        if (!logic(a, b))
            return false;
    }
    return true;
}
exports.andGroup = andGroup;

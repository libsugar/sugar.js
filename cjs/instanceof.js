"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function instanceofOr(type, ...objs) {
    for (const o of objs) {
        if (o instanceof type)
            return true;
    }
    return false;
}
exports.instanceofOr = instanceofOr;
function instanceofAnd(type, ...objs) {
    for (const o of objs) {
        if (!(o instanceof type))
            return false;
    }
    return true;
}
exports.instanceofAnd = instanceofAnd;

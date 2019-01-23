"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function leftShiftAll(num, ...others) {
    for (const other of others) {
        num <<= other;
    }
    return num;
}
exports.leftShiftAll = leftShiftAll;
function rightShiftAll(num, ...others) {
    for (const other of others) {
        num >>= other;
    }
    return num;
}
exports.rightShiftAll = rightShiftAll;
function uRightShiftAll(num, ...others) {
    for (const other of others) {
        num >>>= other;
    }
    return num;
}
exports.uRightShiftAll = uRightShiftAll;
function bitAndAll(num, ...others) {
    for (const other of others) {
        num &= other;
    }
    return num;
}
exports.bitAndAll = bitAndAll;
function bitXorAll(num, ...others) {
    for (const other of others) {
        num ^= other;
    }
    return num;
}
exports.bitXorAll = bitXorAll;
function bitOrAll(num, ...others) {
    for (const other of others) {
        num |= other;
    }
    return num;
}
exports.bitOrAll = bitOrAll;

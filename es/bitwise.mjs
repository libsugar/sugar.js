export function leftShiftAll(num, ...others) {
    for (const other of others) {
        num <<= other;
    }
    return num;
}
export function rightShiftAll(num, ...others) {
    for (const other of others) {
        num >>= other;
    }
    return num;
}
export function uRightShiftAll(num, ...others) {
    for (const other of others) {
        num >>>= other;
    }
    return num;
}
export function bitAndAll(num, ...others) {
    for (const other of others) {
        num &= other;
    }
    return num;
}
export function bitXorAll(num, ...others) {
    for (const other of others) {
        num ^= other;
    }
    return num;
}
export function bitOrAll(num, ...others) {
    for (const other of others) {
        num |= other;
    }
    return num;
}

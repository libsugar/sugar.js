export function sum(num, ...others) {
    for (const other of others) {
        num += other;
    }
    return num;
}
export function addAll(num, ...others) {
    for (const other of others) {
        num += other;
    }
    return num;
}
export function subAll(num, ...others) {
    for (const other of others) {
        num -= other;
    }
    return num;
}
export function prod(num, ...others) {
    for (const other of others) {
        num *= other;
    }
    return num;
}
export function mulAll(num, ...others) {
    for (const other of others) {
        num *= other;
    }
    return num;
}
export function quot(num, ...others) {
    for (const other of others) {
        num /= other;
    }
    return num;
}
export function divAll(num, ...others) {
    for (const other of others) {
        num /= other;
    }
    return num;
}
export function modAll(num, ...others) {
    for (const other of others) {
        num %= other;
    }
    return num;
}
export function powAll(num, ...others) {
    for (const other of others) {
        num **= other;
    }
    return num;
}

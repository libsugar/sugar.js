export function sum<N extends number>(num: N): N
export function sum(num: number, ...numbers: number[]): number
export function sum(num: number, ...others: number[]) {
    for (const other of others) {
        num += other
    }
    return num
}
export function addAll<N extends number>(num: N): N
export function addAll(num: number, ...numbers: number[]): number
export function addAll(num: number, ...others: number[]) {
    for (const other of others) {
        num += other
    }
    return num
}
export function subAll<N extends number>(num: N): N
export function subAll(num: number, ...numbers: number[]): number
export function subAll(num: number, ...others: number[]) {
    for (const other of others) {
        num -= other
    }
    return num
}
export function prod<N extends number>(num: N): N
export function prod(num: number, ...numbers: number[]): number
export function prod(num: number, ...others: number[]) {
    for (const other of others) {
        num *= other
    }
    return num
}
export function mulAll<N extends number>(num: N): N
export function mulAll(num: number, ...numbers: number[]): number
export function mulAll(num: number, ...others: number[]) {
    for (const other of others) {
        num *= other
    }
    return num
}
export function quot<N extends number>(num: N): N
export function quot(num: number, ...numbers: number[]): number
export function quot(num: number, ...others: number[]) {
    for (const other of others) {
        num /= other
    }
    return num
}
export function divAll<N extends number>(num: N): N
export function divAll(num: number, ...numbers: number[]): number
export function divAll(num: number, ...others: number[]) {
    for (const other of others) {
        num /= other
    }
    return num
}
export function modAll<N extends number>(num: N): N
export function modAll(num: number, ...numbers: number[]): number
export function modAll(num: number, ...others: number[]) {
    for (const other of others) {
        num %= other
    }
    return num
}
export function powAll<N extends number>(num: N): N
export function powAll(num: number, ...numbers: number[]): number
export function powAll(num: number, ...others: number[]) {
    for (const other of others) {
        num **= other
    }
    return num
}
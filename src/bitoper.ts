export function leftShiftAll<N extends number>(num: N): N
export function leftShiftAll(num: number, ...numbers: number[]): number
export function leftShiftAll(num: number, ...others: number[]) {
    for (const other of others) {
        num <<= other
    }
    return num
}
export function rightShiftAll<N extends number>(num: N): N
export function rightShiftAll(num: number, ...numbers: number[]): number
export function rightShiftAll(num: number, ...others: number[]) {
    for (const other of others) {
        num >>= other
    }
    return num
}
export function uRightShiftAll<N extends number>(num: N): N
export function uRightShiftAll(num: number, ...numbers: number[]): number
export function uRightShiftAll(num: number, ...others: number[]) {
    for (const other of others) {
        num >>>= other
    }
    return num
}
export function bitAndAll<N extends number>(num: N): N
export function bitAndAll(num: number, ...numbers: number[]): number
export function bitAndAll(num: number, ...others: number[]) {
    for (const other of others) {
        num &= other
    }
    return num
}
export function bitXorAll<N extends number>(num: N): N
export function bitXorAll(num: number, ...numbers: number[]): number
export function bitXorAll(num: number, ...others: number[]) {
    for (const other of others) {
        num ^= other
    }
    return num
}
export function bitOrAll<N extends number>(num: N): N
export function bitOrAll(num: number, ...numbers: number[]): number
export function bitOrAll(num: number, ...others: number[]) {
    for (const other of others) {
        num |= other
    }
    return num
}
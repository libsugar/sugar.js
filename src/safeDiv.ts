
export function safeDiv(a: number, b: number): number {
    return b == 0 ? 0 : a / b
}

export function asitDiv(a: number, b: number): number {
    return b == 0 ? a : a / b
}

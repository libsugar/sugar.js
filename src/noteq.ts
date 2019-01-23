export function nEqOr<T>(self: T): T
export function nEqOr<T>(self: T, Other: T, ...others: T[]): boolean
export function nEqOr<T>(self: T, Other: T, ...others: any[]): boolean
export function nEqOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self != other) return true
    }
    return false
}
export function nEqAnd<T>(self: T): T
export function nEqAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function nEqAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function nEqAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self == other) return false
    }
    return true
}
export function fNEqOr<T>(self: T): T
export function fNEqOr<T>(self: T, Other: T, ...others: T[]): boolean
export function fNEqOr<T>(self: T, Other: T, ...others: any[]): boolean
export function fNEqOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self !== other) return true
    }
    return false
}
export function fNEqAnd<T>(self: T): T
export function fNEqAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function fNEqAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function fNEqAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self === other) return false
    }
    return true
}
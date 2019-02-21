export function neOr<T>(self: T): T
export function neOr<T>(self: T, Other: T, ...others: T[]): boolean
export function neOr<T>(self: T, Other: T, ...others: any[]): boolean
export function neOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self != other) return true
    }
    return false
}
export function neAnd<T>(self: T): T
export function neAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function neAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function neAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self == other) return false
    }
    return true
}
export function fNeOr<T>(self: T): T
export function fNeOr<T>(self: T, Other: T, ...others: T[]): boolean
export function fNeOr<T>(self: T, Other: T, ...others: any[]): boolean
export function fNeOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self !== other) return true
    }
    return false
}
export function fNeAnd<T>(self: T): T
export function fNeAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function fNeAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function fNeAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self === other) return false
    }
    return true
}
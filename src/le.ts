export function leOr<T>(self: T): T
export function leOr<T>(self: T, Other: T, ...others: T[]): boolean
export function leOr<T>(self: T, Other: T, ...others: any[]): boolean
export function leOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self <= other) return true
    }
    return false
}
export function leAnd<T>(self: T): T
export function leAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function leAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function leAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(self >= other)) return false
    }
    return true
}
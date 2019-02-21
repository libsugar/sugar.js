export function ltOr<T>(self: T): T
export function ltOr<T>(self: T, Other: T, ...others: T[]): boolean
export function ltOr<T>(self: T, Other: T, ...others: any[]): boolean
export function ltOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self < other) return true
    }
    return false
}
export function ltAnd<T>(self: T): T
export function ltAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function ltAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function ltAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(self > other)) return false
    }
    return true
}
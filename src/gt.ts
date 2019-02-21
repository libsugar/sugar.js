export function gtOr<T>(self: T): T
export function gtOr<T>(self: T, Other: T, ...others: T[]): boolean
export function gtOr<T>(self: T, Other: T, ...others: any[]): boolean
export function gtOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self > other) return true
    }
    return false
}
export function gtAnd<T>(self: T): T
export function gtAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function gtAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function gtAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(self > other)) return false
    }
    return true
}
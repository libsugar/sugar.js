export function geOr<T>(self: T): T
export function geOr<T>(self: T, Other: T, ...others: T[]): boolean
export function geOr<T>(self: T, Other: T, ...others: any[]): boolean
export function geOr(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (self >= other) return true
    }
    return false
}
export function geAnd<T>(self: T): T
export function geAnd<T>(self: T, Other: T, ...others: T[]): boolean
export function geAnd<T>(self: T, Other: T, ...others: any[]): boolean
export function geAnd(self: any, ...others: any[]) {
    if (others.length == 0) return self
    for (const other of others) {
        if (!(self >= other)) return false
    }
    return true
}
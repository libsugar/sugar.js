export function instanceofOr<T, O>(obj: O, type: new (...args: any[]) => T): O extends T ? true : false
export function instanceofOr<O>(obj: O, ...types: (new (...args: any[]) => any)[]): boolean
export function instanceofOr(obj: any, ...types: (new (...args: any[]) => any)[]): boolean
export function instanceofOr(obj: any, ...types: (new (...args: any[]) => any)[]) {
    for (const type of types) {
        if (obj instanceof type) return true
    }
    return false
}
export function instanceofAnd<T, O>(obj: O, type: new (...args: any[]) => T): O extends T ? true : false
export function instanceofAnd<O>(obj: O, ...types: (new (...args: any[]) => any)[]): boolean
export function instanceofAnd(obj: any, ...types: (new (...args: any[]) => any)[]): boolean
export function instanceofAnd(obj: any, ...types: (new (...args: any[]) => any)[]) {
    for (const type of types) {
        if (!(obj instanceof type)) return false
    }
    return true
}
export function AllInstanceofOr<T, O>(type: new (...args: any[]) => T, obj: O): O extends T ? true : false
export function AllInstanceofOr<T>(type: new (...args: any[]) => T, ...objs: any[]): boolean
export function AllInstanceofOr(type: new (...args: any[]) => any, ...objs: any[]): boolean
export function AllInstanceofOr(type: new (...args: any[]) => any, ...objs: any[]) {
    for (const o of objs) {
        if(o instanceof type) return true
    }
    return false
}
export function AllInstanceofAnd<T, O>(type: new (...args: any[]) => T, obj: O): O extends T ? true : false
export function AllInstanceofAnd<T>(type: new (...args: any[]) => T, ...objs: any[]): boolean
export function AllInstanceofAnd(type: new (...args: any[]) => any, ...objs: any[]): boolean
export function AllInstanceofAnd(type: new (...args: any[]) => any, ...objs: any[]) {
    for (const o of objs) {
        if (!(o instanceof type)) return false
    }
    return true
}
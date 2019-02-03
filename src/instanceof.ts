export function instanceofOr<T, O>(obj: O, type: new () => T): O extends T ? true : false
export function instanceofOr<O>(obj: O, ...types: (new () => any)[]): boolean
export function instanceofOr(obj: any, ...types: (new () => any)[]): boolean
export function instanceofOr(obj: any, ...types: (new () => any)[]) {
    for (const type of types) {
        if (obj instanceof type) return true
    }
    return false
}
export function instanceofAnd<T, O>(obj: O, type: new () => T): O extends T ? true : false
export function instanceofAnd<O>(obj: O, ...types: (new () => any)[]): boolean
export function instanceofAnd(obj: any, ...types: (new () => any)[]): boolean
export function instanceofAnd(obj: any, ...types: (new () => any)[]) {
    for (const type of types) {
        if (!(obj instanceof type)) return false
    }
    return true
}
export function AllInstanceofOr<T, O>(type: new () => T, obj: O): O extends T ? true : false
export function AllInstanceofOr<T>(type: new () => T, ...objs: any[]): boolean
export function AllInstanceofOr(type: new () => any, ...objs: any[]): boolean
export function AllInstanceofOr(type: new () => any, ...objs: any[]) {
    for (const o of objs) {
        if(o instanceof type) return true
    }
    return false
}
export function AllInstanceofAnd<T, O>(type: new () => T, obj: O): O extends T ? true : false
export function AllInstanceofAnd<T>(type: new () => T, ...objs: any[]): boolean
export function AllInstanceofAnd(type: new () => any, ...objs: any[]): boolean
export function AllInstanceofAnd(type: new () => any, ...objs: any[]) {
    for (const o of objs) {
        if (!(o instanceof type)) return false
    }
    return true
}
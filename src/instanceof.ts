export function instanceofOr<T, O>(type: new () => T, obj: O): O extends T ? true : false
export function instanceofOr<T>(type: new () => T, ...objs: any[]): boolean
export function instanceofOr<T>(type: new () => T, ...objs: any[]) {
    for (const o of objs) {
        if(o instanceof type) return true
    }
    return false
}
export function instanceofAnd<T, O>(type: new () => T, obj: O): O extends T ? true : false
export function instanceofAnd<T>(type: new () => T, ...objs: any[]): boolean
export function instanceofAnd<T>(type: new () => T, ...objs: any[]) {
    for (const o of objs) {
        if (!(o instanceof type)) return false
    }
    return true
}
export type TypeString = 'bigint' | 'number' | 'string' | 'boolean' | 'symbol' | 'function' | 'object' | 'undefined'
export function typeofOr(type: 'bigint', obj: any): obj is bigint
export function typeofOr(type: 'number', obj: any): obj is number
export function typeofOr(type: 'string', obj: any): obj is string
export function typeofOr(type: 'boolean', obj: any): obj is boolean
export function typeofOr(type: 'symbol', obj: any): obj is symbol
export function typeofOr(type: 'object', obj: any): obj is object
export function typeofOr(type: 'undefined', obj: any): obj is undefined
export function typeofOr(type: 'function', obj: any): obj is Function
export function typeofOr(type: TypeString, obj: any): boolean
export function typeofOr(type: TypeString, obj: any, ...objs: any[]): boolean
export function typeofOr(type: TypeString, ...objs: any[]) {
    if (objs.length == 0) return false
    for (const o of objs) {
        if (typeof o === type) return true
    }
    return false
}
export function typeofAnd(type: 'bigint', obj: any): obj is bigint
export function typeofAnd(type: 'number', obj: any): obj is number
export function typeofAnd(type: 'string', obj: any): obj is string
export function typeofAnd(type: 'boolean', obj: any): obj is boolean
export function typeofAnd(type: 'symbol', obj: any): obj is symbol
export function typeofAnd(type: 'object', obj: any): obj is object
export function typeofAnd(type: 'undefined', obj: any): obj is undefined
export function typeofAnd(type: 'function', obj: any): obj is Function
export function typeofAnd(type: TypeString, obj: any): boolean
export function typeofAnd(type: TypeString, obj: any, ...objs: any[]): boolean
export function typeofAnd(type: TypeString, ...objs: any[]) {
    if (objs.length == 0) return false
    for (const o of objs) {
        if (typeof o !== type) return false
    }
    return true
}
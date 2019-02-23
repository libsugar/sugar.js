/** `typeof` 运算可能返回字符串 */
export type TypeString = 'bigint' | 'number' | 'string' | 'boolean' | 'symbol' | 'function' | 'object' | 'undefined'
/** typeofOr
 *
 * 等价于 `typoef a === 'bigint' || typeof b === 'bigint' ...`
 *
 * 判断一堆对象是否至少有一个是 `bigint`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: 'bigint', obj: any): obj is bigint
/** typeofOr
 *
 * 等价于 `typoef a === 'bigint' || typeof b === 'bigint' ...`
 *
 * 判断一堆对象是否至少有一个是 `bigint`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: 'bigint', obj: any, ...objs: any[]): boolean
/** typeofOr
 *
 * 等价于 `typoef a === 'number' || typeof b === 'number' ...`
 *
 * 判断一堆对象是否至少有一个是 `number`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: 'number', obj: any): obj is number
/** typeofOr
 *
 * 等价于 `typoef a === 'number' || typeof b === 'number' ...`
 *
 * 判断一堆对象是否至少有一个是 `number`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: 'number', obj: any, ...objs: any[]): boolean
/** typeofOr
 *
 * 等价于 `typoef a === 'string' || typeof b === 'string' ...`
 *
 * 判断一堆对象是否至少有一个是 `string`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: 'string', obj: any): obj is string
/** typeofOr
 *
 * 等价于 `typoef a === 'string' || typeof b === 'string' ...`
 *
 * 判断一堆对象是否至少有一个是 `string`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: 'string', obj: any, ...objs: any[]): boolean
/** typeofOr
 *
 * 等价于 `typoef a === 'boolean' || typeof b === 'boolean' ...`
 *
 * 判断一堆对象是否至少有一个是 `boolean`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: 'boolean', obj: any): obj is boolean
/** typeofOr
 *
 * 等价于 `typoef a === 'boolean' || typeof b === 'boolean' ...`
 *
 * 判断一堆对象是否至少有一个是 `boolean`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: 'boolean', obj: any, ...objs: any[]): boolean
/** typeofOr
 *
 * 等价于 `typoef a === 'symbol' || typeof b === 'symbol' ...`
 *
 * 判断一堆对象是否至少有一个是 `symbol`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: 'symbol', obj: any): obj is symbol
/** typeofOr
 *
 * 等价于 `typoef a === 'symbol' || typeof b === 'symbol' ...`
 *
 * 判断一堆对象是否至少有一个是 `symbol`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: 'symbol', obj: any, ...objs: any[]): boolean
/** typeofOr
 *
 * 等价于 `typoef a === 'object' || typeof b === 'object' ...`
 *
 * 判断一堆对象是否至少有一个是 `object`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: 'object', obj: any): obj is object
/** typeofOr
 *
 * 等价于 `typoef a === 'object' || typeof b === 'object' ...`
 *
 * 判断一堆对象是否至少有一个是 `object`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: 'object', obj: any, ...objs: any[]): boolean
/** typeofOr
 *
 * 等价于 `typoef a === 'undefined' || typeof b === 'undefined' ...`
 *
 * 判断一堆对象是否至少有一个是 `undefined`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: 'undefined', obj: any): obj is undefined
/** typeofOr
 *
 * 等价于 `typoef a === 'undefined' || typeof b === 'undefined' ...`
 *
 * 判断一堆对象是否至少有一个是 `undefined`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: 'undefined', obj: any, ...objs: any[]): boolean
/** typeofOr
 *
 * 等价于 `typoef a === 'function' || typeof b === 'function' ...`
 *
 * 判断一堆对象是否至少有一个是 `function`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: 'function', obj: any): obj is Function
/** typeofOr
 *
 * 等价于 `typoef a === 'function' || typeof b === 'function' ...`
 *
 * 判断一堆对象是否至少有一个是 `function`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: 'function', obj: any, ...objs: any[]): boolean
/** typeofOr
 *
 * 等价于 `typoef a === type || typeof b === type ...`
 *
 * 判断一堆对象是否至少有一个是某个类型
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofOr(type: TypeString, obj: any): boolean
/** typeofOr
 * 
 * 等价于 `typoef a === type || typeof b === type ...`
 * 
 * 判断一堆对象是否至少有一个是某个类型
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofOr(type: TypeString, obj: any, ...objs: any[]): boolean
export function typeofOr(type: TypeString, ...objs: any[]) {
    if (objs.length == 0) return false
    for (const o of objs) {
        if (typeof o === type) return true
    }
    return false
}
/** typeofAnd
 *
 * 等价于 `typoef a === 'bigint' && typeof b === 'bigint' ...`
 *
 * 判断一堆对象是否全部是 `bigint`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: 'bigint', obj: any): obj is bigint
/** typeofAnd
 *
 * 等价于 `typoef a === 'bigint' && typeof b === 'bigint' ...`
 *
 * 判断一堆对象是否至全部是 `bigint`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: 'bigint', ...objs: any[]): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === 'number' && typeof b === 'number' ...`
 *
 * 判断一堆对象是否全部是 `number`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: 'number', obj: any): obj is number
/** typeofAnd
 *
 * 等价于 `typoef a === 'number' && typeof b === 'number' ...`
 *
 * 判断一堆对象是否至全部是 `number`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: 'number', ...objs: any[]): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === 'string' && typeof b === 'string' ...`
 *
 * 判断一堆对象是否全部是 `string`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: 'string', obj: any): obj is string
/** typeofAnd
 *
 * 等价于 `typoef a === 'string' && typeof b === 'string' ...`
 *
 * 判断一堆对象是否全部是 `string`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: 'string', ...objs: any[]): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === 'boolean' && typeof b === 'boolean' ...`
 *
 * 判断一堆对象是否全部是 `boolean`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: 'boolean', obj: any): obj is boolean
/** typeofAnd
 *
 * 等价于 `typoef a === 'boolean' && typeof b === 'boolean' ...`
 *
 * 判断一堆对象是否全部是 `boolean`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: 'boolean', ...objs: any[]): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === 'symbol' && typeof b === 'symbol' ...`
 *
 * 判断一堆对象是否全部是 `symbol`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: 'symbol', obj: any): obj is symbol
/** typeofAnd
 *
 * 等价于 `typoef a === 'symbol' && typeof b === 'symbol' ...`
 *
 * 判断一堆对象是否全部是 `symbol`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: 'symbol', ...objs: any[]): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === 'object' && typeof b === 'object' ...`
 *
 * 判断一堆对象是否全部是 `object`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: 'object', obj: any): obj is object
/** typeofAnd
 *
 * 等价于 `typoef a === 'object' && typeof b === 'object' ...`
 *
 * 判断一堆对象是否全部是 `object`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: 'object', ...objs: any[]): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === 'undefined' && typeof b === 'undefined' ...`
 *
 * 判断一堆对象是否全部是 `undefined`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: 'undefined', obj: any): obj is undefined
/** typeofAnd
 *
 * 等价于 `typoef a === 'undefined' && typeof b === 'undefined' ...`
 *
 * 判断一堆对象是否全部是 `undefined`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: 'undefined', ...objs: any[]): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === 'function' && typeof b === 'function' ...`
 *
 * 判断一堆对象是否全部是 `function`
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: 'function', obj: any): obj is Function
/** typeofAnd
 *
 * 等价于 `typoef a === 'function' && typeof b === 'function' ...`
 *
 * 判断一堆对象是否全部是 `function`
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: 'function', ...objs: any[]): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === type && typeof b === type ...`
 *
 * 判断一堆对象是否全部是某个类型
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function typeofAnd(type: TypeString, obj: any): boolean
/** typeofAnd
 *
 * 等价于 `typoef a === type && typeof b === type ...`
 *
 * 判断一堆对象是否至全部是某个类型
 * @param type 目标类型
 * @param obj 要判断的对象
 * @param objs 其他要判断的对象
 */
export function typeofAnd(type: TypeString, obj: any, ...objs: any[]): boolean
export function typeofAnd(type: TypeString, ...objs: any[]) {
    if (objs.length == 0) return false
    for (const o of objs) {
        if (typeof o !== type) return false
    }
    return true
}
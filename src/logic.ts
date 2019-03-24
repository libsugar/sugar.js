/** or
 * 
 * 等价于 `a || b || c ....`
 * 
 * @param bool 需要判断的值或者返回需要判断的值的函数
 */
export function or(...bool: (boolean | ((...p: any[]) => boolean))[]): boolean {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item) return true
    }
    return false
}
/** and
 *
 * 等价于 `a && b && c ....`
 *
 * @param bool 需要判断的值或者返回需要判断的值的函数
 */
export function and(...bool: (boolean | ((...p: any[]) => boolean))[]): boolean {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item)) return false
    }
    return true
}
/**
 * 对数组节流
 * 
 * 每2个为一组输出
 * @param arr 要被节流的数组
 */
function* take2<T>(arr: T[]): IterableIterator<[T, T][]> {
    let tuple = []
    for (const item of arr) {
        tuple.push(item)
        if (tuple.length == 2) {
            yield tuple
            tuple = []
        }
    }
}
/** orGroup
 * 
 * 等价于 `logic(a, b) || logic(c, d) ....`
 * 
 * 对输入的项每2个做logic函数运算
 * 
 * 并将结果 `||` 起来
 * 
 * @param logic 2个值之间的关系运算函数
 * @param items 要输入的项
 */
export function orGroup<A, B>(logic: ((a: A, b: B) => boolean), ...items: (A | B)[]): boolean
/** orGroup
 *
 * 等价于 `logic(a, b) || logic(c, d) ....`
 *
 * 对输入的项每2个做logic函数运算
 *
 * 并将结果 `||` 起来
 *
 * @param logic 2个值之间的关系运算函数
 * @param items 要输入的项
 */
export function orGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean
/** orGroup
 *
 * 等价于 `logic(a, b) || logic(c, d) ....`
 *
 * 对输入的项每2个做logic函数运算
 *
 * 并将结果 `||` 起来
 *
 * @param logic 2个值之间的关系运算函数
 * @param items 要输入的项
 */
export function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean
export function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean {
    for (const [a, b] of take2(items)) {
        if (logic(a, b)) return true
    }
    return false
}
/** andGroup
 *
 * 等价于 `logic(a, b) && logic(c, d) ....`
 *
 * 对输入的项每2个做logic函数运算
 *
 * 并将结果 `&&` 起来
 *
 * @param logic 2个值之间的关系运算函数
 * @param items 要输入的项
 */
export function andGroup<A, B>(logic: ((a: A, b: B) => boolean), ...items: (A | B)[]): boolean
/** andGroup
 *
 * 等价于 `logic(a, b) && logic(c, d) ....`
 *
 * 对输入的项每2个做logic函数运算
 *
 * 并将结果 `&&` 起来
 *
 * @param logic 2个值之间的关系运算函数
 * @param items 要输入的项
 */
export function andGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean
/** andGroup
 *
 * 等价于 `logic(a, b) && logic(c, d) ....`
 *
 * 对输入的项每2个做logic函数运算
 *
 * 并将结果 `&&` 起来
 *
 * @param logic 2个值之间的关系运算函数
 * @param items 要输入的项
 */
export function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean
export function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean {
    for (const [a, b] of take2(items)) {
        if (!logic(a, b)) return false
    }
    return true
}
/** orDo
 * 
 * 等价于 `logic(item)`
 * 
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 */
export function orDo<T>(logic: (v: T) => boolean, item: T | ((...p: any[]) => T)): boolean
/** orDo
 * 
 * 等价于 `logic(a) || logic(b) ....`
 * 
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export function orDo<T>(logic: (v: T) => boolean, item: T, ...items: T[]): boolean
/** orDo
 * 
 * 等价于 `logic(a) || logic(b) ....`
 * 
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export function orDo(logic: (v: any) => boolean, item: any, ...items: any[]): boolean
export function orDo(logic: (v: any) => boolean, ...items: any[]): boolean {
    for (const item of items) {
        if (logic(item)) return true
    }
    return false
}
/** andDo
 *
 * 等价于 `logic(item)`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 */
export function andDo<T>(logic: (v: T) => boolean, item: T): boolean
/** andDo
 *
 * 等价于 `logic(a) && logic(b) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export function andDo<T>(logic: (v: T) => boolean, item: T, ...items: T[]): boolean
/** andDo
 *
 * 等价于 `logic(a) && logic(b) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export function andDo(logic: (v: any) => boolean, item: any, ...items: any[]): boolean
export function andDo(logic: (v: any) => boolean, ...items: any[]): boolean {
    for (const item of items) {
        if (!logic(item)) return false
    }
    return true
}
/** orDoGet
 *
 * 等价于 `logic(item())`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 */
export function orDoGet<T>(logic: (v: T) => boolean, item: (...p: any[]) => T): boolean
/** orDoGet
 *
 * 等价于 `logic(a()) || logic(b()) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export function orDoGet<T>(logic: (v: T) => boolean, item: (...p: any[]) => T, ...items: ((...p: any[]) => T)[]): boolean
/** orDoGet
 *
 * 等价于 `logic(a()) || logic(b()) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export function orDoGet<T>(logic: (v: T) => boolean, ...items: ((...p: any[]) => T)[]): boolean{
    for (const item of items) {
        if (logic(item())) return true
    }
    return false
}
/** andDoGet
 *
 * 等价于 `logic(item())`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 */
export function andDoGet<T>(logic: (v: T) => boolean, item: (...p: any[]) => T): boolean
/** andDoGet
 *
 * 等价于 `logic(a()) && logic(b()) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export function andDoGet<T>(logic: (v: T) => boolean, item: (...p: any[]) => T, ...items: ((...p: any[]) => T)[]): boolean
/** andDoGet
 *
 * 等价于 `logic(a()) && logic(b()) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export function andDoGet<T>(logic: (v: T) => boolean, ...items: ((...p: any[]) => T)[]): boolean {
    for (const item of items) {
        if (!logic(item())) return false
    }
    return true
}
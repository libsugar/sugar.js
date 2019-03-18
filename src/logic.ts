/** or
 * 
 * 等价于 `a || b || c ....`
 * 
 * @param bool 需要判断的值或者返回需要判断的值的函数
 */
export function or(...bool: (boolean | (() => boolean))[]): boolean {
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
export function and(...bool: (boolean | (() => boolean))[]): boolean {
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
export function orGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean
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
export function andGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean
export function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean
export function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean {
    for (const [a, b] of take2(items)) {
        if (!logic(a, b)) return false
    }
    return true
}

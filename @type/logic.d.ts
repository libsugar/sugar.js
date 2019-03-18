/** or
 *
 * 等价于 `a || b || c ....`
 *
 * @param bool 需要判断的值或者返回需要判断的值的函数
 */
export declare function or(...bool: (boolean | (() => boolean))[]): boolean;
/** and
 *
 * 等价于 `a && b && c ....`
 *
 * @param bool 需要判断的值或者返回需要判断的值的函数
 */
export declare function and(...bool: (boolean | (() => boolean))[]): boolean;
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
export declare function orGroup<A, B>(logic: ((a: A, b: B) => boolean), ...items: (A | B)[]): boolean;
export declare function orGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean;
export declare function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean;
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
export declare function andGroup<A, B>(logic: ((a: A, b: B) => boolean), ...items: (A | B)[]): boolean;
export declare function andGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean;
export declare function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean;

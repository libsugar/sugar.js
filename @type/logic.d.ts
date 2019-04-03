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
export declare function orGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean;
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
export declare function andGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean;
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
export declare function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean;
/** orDo
 *
 * 等价于 `logic(item)`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 */
export declare function orDo<T>(logic: (v: T) => boolean, item: T): boolean;
/** orDo
 *
 * 等价于 `logic(a) || logic(b) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export declare function orDo<T>(logic: (v: T) => boolean, item: T, ...items: T[]): boolean;
/** orDo
 *
 * 等价于 `logic(a) || logic(b) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export declare function orDo(logic: (v: any) => boolean, item: any, ...items: any[]): boolean;
/** andDo
 *
 * 等价于 `logic(item)`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 */
export declare function andDo<T>(logic: (v: T) => boolean, item: T): boolean;
/** andDo
 *
 * 等价于 `logic(a) && logic(b) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export declare function andDo<T>(logic: (v: T) => boolean, item: T, ...items: T[]): boolean;
/** andDo
 *
 * 等价于 `logic(a) && logic(b) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export declare function andDo(logic: (v: any) => boolean, item: any, ...items: any[]): boolean;
/** orDoGet
 *
 * 等价于 `logic(item())`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 */
export declare function orDoGet<T>(logic: (v: T) => boolean, item: () => T): boolean;
/** orDoGet
 *
 * 等价于 `logic(a()) || logic(b()) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export declare function orDoGet<T>(logic: (v: T) => boolean, item: () => T, ...items: (() => T)[]): boolean;
/** andDoGet
 *
 * 等价于 `logic(item())`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 */
export declare function andDoGet<T>(logic: (v: T) => boolean, item: () => T): boolean;
/** andDoGet
 *
 * 等价于 `logic(a()) && logic(b()) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
 */
export declare function andDoGet<T>(logic: (v: T) => boolean, item: () => T, ...items: (() => T)[]): boolean;
export declare function orDoAll<T>(item: T, logic: (v: T) => boolean): boolean;
export declare function orDoAll<T>(item: T, logic: (v: T) => boolean, ...logics: ((v: T) => boolean)[]): boolean;
export declare function andDoAll<T>(item: T, logic: (v: T) => boolean): boolean;
export declare function andDoAll<T>(item: T, logic: (v: T) => boolean, ...logics: ((v: T) => boolean)[]): boolean;
export declare function orDoGetAll<T>(item: () => T, logic: (v: T) => boolean): boolean;
export declare function orDoGetAll<T>(item: () => T, logic: (v: T) => boolean, ...logics: ((v: T) => boolean)[]): boolean;
export declare function andDoGetAll<T>(item: () => T, logic: (v: T) => boolean): boolean;
export declare function andDoGetAll<T>(item: () => T, logic: (v: T) => boolean, ...logics: ((v: T) => boolean)[]): boolean;

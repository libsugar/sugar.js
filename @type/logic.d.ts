/** or
 *
 * Equivalent `a || b || c ....`
 *
 * @param bool The value to be judged or the function that returns value to be judged
 */
export declare function or(...bool: (boolean | (() => boolean))[]): boolean;
/** and
 *
 * Equivalent `a && b && c ....`
 *
 * @param bool The value to be judged or the function that returns value to be judged
 */
export declare function and(...bool: (boolean | (() => boolean))[]): boolean;
/** orGroup
 *
 * Equivalent `logic(a, b) || logic(c, d) ....`
 *
 * Do logic function operation for every 2 items entered
 *
 * And connect the results with `||`
 *
 * @param logic Function that calculates relationship between two values
 * @param items The item to be entered
 */
export declare function orGroup<A, B>(logic: ((a: A, b: B) => boolean), ...items: (A | B)[]): boolean;
/** orGroup
 *
 * Equivalent `logic(a, b) || logic(c, d) ....`
 *
 * Do logic function operation for every 2 items entered
 *
 * And connect the results with `||`
 *
 * @param logic Function that calculates relationship between two values
 * @param items The item to be entered
 */
export declare function orGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean;
/** orGroup
 *
 * Equivalent `logic(a, b) || logic(c, d) ....`
 *
 * Do logic function operation for every 2 items entered
 *
 * And connect the results with `||`
 *
 * @param logic Function that calculates relationship between two values
 * @param items The item to be entered
 */
export declare function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean;
/** andGroup
 *
 * Equivalent `logic(a, b) && logic(c, d) ....`
 *
 * Do logic function operation for every 2 items entered
 *
 * And connect the results with `&&`
 *
 * @param logic Function that calculates relationship between two values
 * @param items The item to be entered
 */
export declare function andGroup<A, B>(logic: ((a: A, b: B) => boolean), ...items: (A | B)[]): boolean;
/** andGroup
 *
 * Equivalent `logic(a, b) && logic(c, d) ....`
 *
 * Do logic function operation for every 2 items entered
 *
 * And connect the results with `&&`
 *
 * @param logic Function that calculates relationship between two values
 * @param items The item to be entered
 */
export declare function andGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean;
/** andGroup
 *
 * Equivalent `logic(a, b) && logic(c, d) ....`
 *
 * Do logic function operation for every 2 items entered
 *
 * And connect the results with `&&`
 *
 * @param logic Function that calculates relationship between two values
 * @param items The item to be entered
 */
export declare function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean;
/** orDo
 *
 * Equivalent `logic(item)`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 */
export declare function orDo<T>(logic: (v: T) => boolean, item: T): boolean;
/** orDo
 *
 * Equivalent `logic(a) || logic(b) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export declare function orDo<T>(logic: (v: T) => boolean, item: T, ...items: T[]): boolean;
/** orDo
 *
 * Equivalent `logic(a) || logic(b) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export declare function orDo(logic: (v: any) => boolean, item: any, ...items: any[]): boolean;
/** andDo
 *
 * Equivalent `logic(item)`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 */
export declare function andDo<T>(logic: (v: T) => boolean, item: T): boolean;
/** andDo
 *
 * Equivalent `logic(a) && logic(b) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export declare function andDo<T>(logic: (v: T) => boolean, item: T, ...items: T[]): boolean;
/** andDo
 *
 * Equivalent `logic(a) && logic(b) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export declare function andDo(logic: (v: any) => boolean, item: any, ...items: any[]): boolean;
/** orDoGet
 *
 * Equivalent `logic(item())`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 */
export declare function orDoGet<T>(logic: (v: T) => boolean, item: () => T): boolean;
/** orDoGet
 *
 * Equivalent `logic(a()) || logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export declare function orDoGet<T>(logic: (v: T) => boolean, item: () => T, ...items: (() => T)[]): boolean;
/** andDoGet
 *
 * Equivalent `logic(item())`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 */
export declare function andDoGet<T>(logic: (v: T) => boolean, item: () => T): boolean;
/** andDoGet
 *
 * Equivalent `logic(a()) && logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
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

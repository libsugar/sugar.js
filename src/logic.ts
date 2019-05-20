/** or
 * 
 * Equivalent `a || b || c ....`
 * 
 * @param bool The value to be judged or the function that returns value to be judged
 */
export function or(...bool: (boolean | (() => boolean))[]): boolean {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item) return true
    }
    return false
}
/** and
 *
 * Equivalent `a && b && c ....`
 *
 * @param bool The value to be judged or the function that returns value to be judged
 */
export function and(...bool: (boolean | (() => boolean))[]): boolean {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item)) return false
    }
    return true
}
/**
 * Throttling the array
 * 
 * Every 2 is a set of outputs
 * @param arr The array to be throttled
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
 * Equivalent `logic(a, b) || logic(c, d) ....`
 * 
 * Do logic function operation for every 2 items entered
 * 
 * And connect the results with `||`
 * 
 * @param logic Function that calculates relationship between two values
 * @param items The item to be entered
 */
export function orGroup<A, B>(logic: ((a: A, b: B) => boolean), ...items: (A | B)[]): boolean
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
export function orGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean
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
export function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean
export function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean {
    for (const [a, b] of take2(items)) {
        if (logic(a, b)) return true
    }
    return false
}
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
export function andGroup<A, B>(logic: ((a: A, b: B) => boolean), ...items: (A | B)[]): boolean
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
export function andGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean
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
export function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean
export function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean {
    for (const [a, b] of take2(items)) {
        if (!logic(a, b)) return false
    }
    return true
}
/** orDo
 * 
 * Equivalent `logic(item)`
 * 
 * @param logic Logical judgment function
 * @param item Item to be judged
 */
export function orDo<T>(logic: (v: T) => boolean, item: T): boolean
/** orDo
 * 
 * Equivalent `logic(a) || logic(b) ....`
 * 
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export function orDo<T>(logic: (v: T) => boolean, item: T, ...items: T[]): boolean
/** orDo
 * 
 * Equivalent `logic(a) || logic(b) ....`
 * 
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
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
 * Equivalent `logic(item)`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 */
export function andDo<T>(logic: (v: T) => boolean, item: T): boolean
/** andDo
 *
 * Equivalent `logic(a) && logic(b) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export function andDo<T>(logic: (v: T) => boolean, item: T, ...items: T[]): boolean
/** andDo
 *
 * Equivalent `logic(a) && logic(b) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
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
 * Equivalent `logic(item())`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 */
export function orDoGet<T>(logic: (v: T) => boolean, item: () => T): boolean
/** orDoGet
 *
 * Equivalent `logic(a()) || logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export function orDoGet<T>(logic: (v: T) => boolean, item: () => T, ...items: (() => T)[]): boolean
/** orDoGet
 *
 * Equivalent `logic(a()) || logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export function orDoGet<T>(logic: (v: T) => boolean, ...items: (() => T)[]): boolean{
    for (const item of items) {
        if (logic(item())) return true
    }
    return false
}
/** andDoGet
 *
 * Equivalent `logic(item())`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 */
export function andDoGet<T>(logic: (v: T) => boolean, item: () => T): boolean
/** andDoGet
 *
 * Equivalent `logic(a()) && logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export function andDoGet<T>(logic: (v: T) => boolean, item: () => T, ...items: (() => T)[]): boolean
/** andDoGet
 *
 * Equivalent `logic(a()) && logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export function andDoGet<T>(logic: (v: T) => boolean, ...items: (() => T)[]): boolean {
    for (const item of items) {
        if (!logic(item())) return false
    }
    return true
}
export function orDoAll<T>(item: T, logic: (v: T) => boolean): boolean
export function orDoAll<T>(item: T, logic: (v: T) => boolean, ...logics: ((v: T) => boolean)[]): boolean
export function orDoAll<T>(item: T, ...logics: ((v: T) => boolean)[]): boolean{
    for (const logic of logics) {
        if(logic(item)) return true
    }
    return false
}
export function andDoAll<T>(item: T, logic: (v: T) => boolean): boolean
export function andDoAll<T>(item: T, logic: (v: T) => boolean, ...logics: ((v: T) => boolean)[]): boolean
export function andDoAll<T>(item: T, ...logics: ((v: T) => boolean)[]): boolean {
    for (const logic of logics) {
        if (!logic(item)) return false
    }
    return true
}
export function orDoGetAll<T>(item: () => T, logic: (v: T) => boolean): boolean
export function orDoGetAll<T>(item: () => T, logic: (v: T) => boolean, ...logics: ((v: T) => boolean)[]): boolean
export function orDoGetAll<T>(item: () => T, ...logics: ((v: T) => boolean)[]): boolean {
    for (const logic of logics) {
        if (logic(item())) return true
    }
    return false
}
export function andDoGetAll<T>(item: () => T, logic: (v: T) => boolean): boolean
export function andDoGetAll<T>(item: () => T, logic: (v: T) => boolean, ...logics: ((v: T) => boolean)[]): boolean
export function andDoGetAll<T>(item: () => T, ...logics: ((v: T) => boolean)[]): boolean {
    for (const logic of logics) {
        if (!logic(item())) return false
    }
    return true
}
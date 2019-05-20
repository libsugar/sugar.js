/** or
 *
 * Equivalent `a || b || c ....`
 *
 * @param bool The value to be judged or the function that returns value to be judged
 */
export function or(...bool) {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item)
            return true;
    }
    return false;
}
/** and
 *
 * Equivalent `a && b && c ....`
 *
 * @param bool The value to be judged or the function that returns value to be judged
 */
export function and(...bool) {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item))
            return false;
    }
    return true;
}
/**
 * Throttling the array
 *
 * Every 2 is a set of outputs
 * @param arr The array to be throttled
 */
function* take2(arr) {
    let tuple = [];
    for (const item of arr) {
        tuple.push(item);
        if (tuple.length == 2) {
            yield tuple;
            tuple = [];
        }
    }
}
export function orGroup(logic, ...items) {
    for (const [a, b] of take2(items)) {
        if (logic(a, b))
            return true;
    }
    return false;
}
export function andGroup(logic, ...items) {
    for (const [a, b] of take2(items)) {
        if (!logic(a, b))
            return false;
    }
    return true;
}
export function orDo(logic, ...items) {
    for (const item of items) {
        if (logic(item))
            return true;
    }
    return false;
}
export function andDo(logic, ...items) {
    for (const item of items) {
        if (!logic(item))
            return false;
    }
    return true;
}
/** orDoGet
 *
 * Equivalent `logic(a()) || logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export function orDoGet(logic, ...items) {
    for (const item of items) {
        if (logic(item()))
            return true;
    }
    return false;
}
/** andDoGet
 *
 * Equivalent `logic(a()) && logic(b()) ....`
 *
 * @param logic Logical judgment function
 * @param item Item to be judged
 * @param items Other items to judge
 */
export function andDoGet(logic, ...items) {
    for (const item of items) {
        if (!logic(item()))
            return false;
    }
    return true;
}
export function orDoAll(item, ...logics) {
    for (const logic of logics) {
        if (logic(item))
            return true;
    }
    return false;
}
export function andDoAll(item, ...logics) {
    for (const logic of logics) {
        if (!logic(item))
            return false;
    }
    return true;
}
export function orDoGetAll(item, ...logics) {
    for (const logic of logics) {
        if (logic(item()))
            return true;
    }
    return false;
}
export function andDoGetAll(item, ...logics) {
    for (const logic of logics) {
        if (!logic(item()))
            return false;
    }
    return true;
}

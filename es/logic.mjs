/** or
 *
 * 等价于 `a || b || c ....`
 *
 * @param bool 需要判断的值或者返回需要判断的值的函数
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
 * 等价于 `a && b && c ....`
 *
 * @param bool 需要判断的值或者返回需要判断的值的函数
 */
export function and(...bool) {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item))
            return false;
    }
    return true;
}
/**
 * 对数组节流
 *
 * 每2个为一组输出
 * @param arr 要被节流的数组
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
 * 等价于 `logic(a()) || logic(b()) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
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
 * 等价于 `logic(a()) && logic(b()) ....`
 *
 * @param logic 逻辑判断函数
 * @param item 要判断的项
 * @param items 其他要判断的项
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

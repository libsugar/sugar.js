export function or(...bool) {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item)
            return true;
    }
    return false;
}
export function and(...bool) {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item))
            return false;
    }
    return true;
}
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

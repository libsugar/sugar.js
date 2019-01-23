export function or(...bool) {
    for (const item of bool) {
        if (item)
            return true;
    }
    return false;
}
export function and(...bool) {
    for (const item of bool) {
        if (!item)
            return false;
    }
    return true;
}
export function orFn(...bool) {
    for (const item of bool) {
        if (typeof item == 'function' ? item() : item)
            return true;
    }
    return false;
}
export function andFn(...bool) {
    for (const item of bool) {
        if (!(typeof item == 'function' ? item() : item))
            return false;
    }
    return true;
}

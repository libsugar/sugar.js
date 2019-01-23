export function typeofOr(type, ...objs) {
    if (objs.length == 0)
        return false;
    for (const o of objs) {
        if (typeof o === type)
            return true;
    }
    return false;
}
export function typeofAnd(type, ...objs) {
    if (objs.length == 0)
        return false;
    for (const o of objs) {
        if (typeof o !== type)
            return false;
    }
    return true;
}

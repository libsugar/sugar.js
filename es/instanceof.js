export function instanceofOr(type, ...objs) {
    for (const o of objs) {
        if (o instanceof type)
            return true;
    }
    return false;
}
export function instanceofAnd(type, ...objs) {
    for (const o of objs) {
        if (!(o instanceof type))
            return false;
    }
    return true;
}

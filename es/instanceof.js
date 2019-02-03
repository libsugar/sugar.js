export function instanceofOr(obj, ...types) {
    for (const type of types) {
        if (obj instanceof type)
            return true;
    }
    return false;
}
export function instanceofAnd(obj, ...types) {
    for (const type of types) {
        if (!(obj instanceof type))
            return false;
    }
    return true;
}
export function AllInstanceofOr(type, ...objs) {
    for (const o of objs) {
        if (o instanceof type)
            return true;
    }
    return false;
}
export function AllInstanceofAnd(type, ...objs) {
    for (const o of objs) {
        if (!(o instanceof type))
            return false;
    }
    return true;
}

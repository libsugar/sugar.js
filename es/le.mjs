export function leOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self <= other)
            return true;
    }
    return false;
}
export function leAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self >= other))
            return false;
    }
    return true;
}
export function allLeOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other <= self)
            return true;
    }
    return false;
}
export function allLeAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other >= self))
            return false;
    }
    return true;
}

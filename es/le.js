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

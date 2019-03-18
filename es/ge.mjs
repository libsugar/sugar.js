export function geOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self >= other)
            return true;
    }
    return false;
}
export function geAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self >= other))
            return false;
    }
    return true;
}
export function allGeOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other >= self)
            return true;
    }
    return false;
}
export function allGeAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other >= self))
            return false;
    }
    return true;
}

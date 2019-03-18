export function ltOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self < other)
            return true;
    }
    return false;
}
export function ltAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self > other))
            return false;
    }
    return true;
}
export function allLtOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (other < self)
            return true;
    }
    return false;
}
export function allLtAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(other > self))
            return false;
    }
    return true;
}

export function gtOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self > other)
            return true;
    }
    return false;
}
export function gtAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (!(self > other))
            return false;
    }
    return true;
}

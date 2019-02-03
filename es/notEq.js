export function nEqOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self != other)
            return true;
    }
    return false;
}
export function nEqAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self == other)
            return false;
    }
    return true;
}
export function fNEqOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self !== other)
            return true;
    }
    return false;
}
export function fNEqAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self === other)
            return false;
    }
    return true;
}

export function neOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self != other)
            return true;
    }
    return false;
}
export function neAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self == other)
            return false;
    }
    return true;
}
export function fNeOr(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self !== other)
            return true;
    }
    return false;
}
export function fNeAnd(self, ...others) {
    if (others.length == 0)
        return self;
    for (const other of others) {
        if (self === other)
            return false;
    }
    return true;
}

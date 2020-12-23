
/** Run now */
export function run<U>(f: () => U): U {
    return f()
}

/** Use a value and make a mapping */
export function used<T, U>(v: T, f: (v: T) => U): U {
    return f(v)
}

/** Use value and do something extra */
export function also<T>(v: T, f: (v: T) => void): T {
    f(v)
    return v
}

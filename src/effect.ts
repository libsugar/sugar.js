
export function run<U>(f: () => U): U {
    return f()
}

export function used<T, U>(v: T, f: (v: T) => U): U {
    return f(v)
}

export function also<T>(v: T, f: (v: T) => void): T {
    f(v)
    return v
}

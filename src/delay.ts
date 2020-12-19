
export function microtask(): Promise<void> {
    return new Promise(res => queueMicrotask(() => res()))
}

export function delay(ms?: number): Promise<void> {
    return new Promise(res => setTimeout(() => res(), ms))
}

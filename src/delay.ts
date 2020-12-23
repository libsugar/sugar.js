
/** Wait for the next Microtask */
export function microtask(): Promise<void> {
    return new Promise(res => queueMicrotask(() => res()))
}

/** Wait for time */
export function delay(ms?: number): Promise<void> {
    return new Promise(res => setTimeout(() => res(), ms))
}

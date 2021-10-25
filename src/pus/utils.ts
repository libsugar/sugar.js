import { PusherResult } from "./core";

export function trans<T>(then: (v: PusherResult<T, any>) => void, result: PusherResult<T>) {
    then(result)
}

export function next<T>(then: (v: PusherResult<T, any>) => void, value: T) {
    then({ done: false, value })
}

export function down<T>(then: (v: PusherResult<T, any>) => void, value?: T) {
    then({ done: true, value })
}

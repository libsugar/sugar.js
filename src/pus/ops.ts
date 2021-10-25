import { Pushable } from "./core";
import { trans, next, down } from "./utils";

export function chain<T>(a: Pushable<T>, b: Pushable<T>): Pushable<T, void> {
    return {
        apply(then) {
            a.apply(r => {
                if (r.done) b.apply(then)
                else trans(then, r)
            })
        }
    }
}

export function map<T, R>(u: Pushable<T>, f: (v: T, index: number) => R): Pushable<R> {
    return {
        apply(then) {
            let i = 0
            u.apply(r => {
                if (r.done) return down(then)
                else next(then, f(r.value, i++))
            })
        }
    }
}

export function forEach<T>(u: Pushable<T>, f: (v: T) => void): Promise<void> {
    return new Promise(res => {
        u.apply(r => {
            if (r.done) res(r.value)
            else f(r.value)
        })
    })
}

export function filter<T>(u: Pushable<T>, f: (v: T) => unknown): Pushable<T> {
    return {
        apply(then) {
            u.apply(r => {
                if (r.done) down(then)
                else if (f(r.value)) next(then, r.value)
            })
        }
    }
}

export function flatMap<T>(u: Pushable<T>, f: (v: T) => Pushable<T>): Pushable<T> {
    return {
        apply(then) {
            let rc = 1
            function whenDown() {
                if (--rc <= 0) down(then)
            }
            u.apply(r => {
                if (r.done) whenDown()
                else {
                    const su = f(r.value)
                    rc++
                    su.apply(r => {
                        if (r.done) whenDown()
                        else {
                            next(then, r.value)
                        }
                    })
                }
            })
        }
    }
}

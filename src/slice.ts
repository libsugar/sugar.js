import { Ranges, rangeAll } from "./range";

export interface Span<A extends ArrayLike<any>> extends ArrayLike<A[number]> { }
export class Span<A extends ArrayLike<any>> {
    readonly #arr: A
    #from: number
    #to: number
    private constructor(arr: A, from: number, to: number) {
        this.#arr = arr
        this.#from = from
        this.#to = to
        return new Proxy(this, {
            has(target, property) {
                if (typeof property === 'number') return target.has(property)
                return Reflect.has(target, property)
            },
            get(target, property, receiver) {
                if (typeof property === 'number') return target.get(property)
                return Reflect.get(target, property, receiver)
            },
            set(target, property, value, receiver) {
                if (typeof property === 'number') return target.set(property, value)
                return Reflect.set(target, property, value, receiver)
            },
        })
    }

    static from<A extends ArrayLike<any>>(arr: Span<A>, range?: Ranges<number>): Span<A>
    static from<A extends ArrayLike<any>>(arr: A, range?: Ranges<number>): Span<A>
    static from<A extends ArrayLike<any>>(arr: A | Span<A>, range?: Ranges<number>): Span<A> {
        if (arr instanceof Span) {
            let [from = 0, to = arr.#to - arr.#from] = Ranges.toTuple(range ?? rangeAll())
            return new Span<A>(arr.#arr, arr.#from + from, arr.#from + to)
        } else {
            let [from = 0, to = arr.length - 1] = Ranges.toTuple(range ?? rangeAll())
            return new Span<A>(arr, from, to)
        }
    }

    has(i: number): boolean {
        return i > 0 && i < this.length
    }

    get(i: number): A[number] {
        if (i >= this.length) return
        return this.#arr[this.#from + i]
    }
    set(i: number, v: A[number]) {
        if (i >= this.length) return false;
        (this.#arr as any)[this.#from + i] = v
        return true
    }

    get length() {
        return this.#to - this.#from
    }
}



export namespace Slice {

    export function get<T>(arr: T[], range: Ranges<number>): T[] {
        return Array.prototype.slice.call(arr, ...Ranges.toTuple(range))
    }
}

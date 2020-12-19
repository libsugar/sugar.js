import { also } from "./effect"

/** `from..to` */
export class TRange<T> {
    constructor(public from: T, public to: T) { }
}
/** `..to` */
export class TRangeTo<T> {
    constructor(public to: T) { }
}
/** `from..` */
export class TRangeFrom<T> {
    constructor(public from: T) { }
}
/** `from..=to` */
export class TRangeEq<T> {
    constructor(public from: T, public to: T) { }
}
/** `..=to` */
export class TRangeToEq<T> {
    constructor(public to: T) { }
}



function rangeIter(step: number, from: number, to: number) {
    if (from === -Infinity) from = Number.MIN_SAFE_INTEGER
    if (to === Infinity) to = Number.MAX_SAFE_INTEGER
    if (from > to) step = -step
    return {
        [Symbol.iterator](): IterableIterator<number> {
            return this
        },
        next(): IteratorResult<number> {
            if (from < to)
                return also({ done: false, value: from }, () => from += step)
            return { done: true } as IteratorResult<number>
        }
    }
}

function rangeEqIter(step: number, from: number, to: number) {
    if (from === -Infinity) from = Number.MIN_SAFE_INTEGER
    if (to === Infinity) to = Number.MAX_SAFE_INTEGER
    if (from > to) step = -step
    return {
        [Symbol.iterator](): IterableIterator<number> {
            return this
        },
        next(): IteratorResult<number> {
            if (from <= to)
                return also({ done: false, value: from }, () => from += step)
            return { done: true } as IteratorResult<number>
        }
    }
}

/** `from..to` */
export class NRange extends TRange<number> implements Iterable<number> {
    constructor(from: number, to: number) { super(from, to) }

    [Symbol.iterator]() {
        return rangeIter(1, this.from, this.to)
    }
}
/** `..to` */
export class NRangeTo extends TRangeTo<number> implements Iterable<number> {
    constructor(to: number) { super(to) }

    [Symbol.iterator]() {
        return rangeIter(1, -Infinity, this.to)
    }
}
/** `from..` */
export class NRangeFrom extends TRangeFrom<number> implements Iterable<number> {
    constructor(from: number) { super(from) }

    [Symbol.iterator]() {
        return rangeIter(1, this.from, Infinity)
    }
}
/** `from..=to` */
export class NRangeEq extends TRangeEq<number> implements Iterable<number> {
    constructor(from: number, to: number) { super(from, to) }

    [Symbol.iterator]() {
        return rangeEqIter(1, this.from, this.to)
    }
}
/** `..=to` */
export class NRangeToEq extends TRangeToEq<number> implements Iterable<number>{
    constructor(to: number) { super(to) }

    [Symbol.iterator]() {
        return rangeEqIter(1, -Infinity, this.to)
    }
}



function rangeIntIter(step: bigint, from: bigint, to?: bigint) {
    if (to == null) {
        return {
            next(): IteratorResult<bigint> {
                return also({ done: false, value: from }, () => from += step)
            }
        }
    }
    if (from > to) step = -step
    return {
        [Symbol.iterator](): IterableIterator<bigint> {
            return this
        },
        next(): IteratorResult<bigint> {
            if (from < to)
                return also({ done: false, value: from }, () => from += step)
            return { done: true } as IteratorResult<bigint>
        }
    }
}

function rangeIntEqIter(step: bigint, from: bigint, to: bigint) {
    if (from > to) step = -step
    return {
        [Symbol.iterator](): IterableIterator<bigint> {
            return this
        },
        next(): IteratorResult<bigint> {
            if (from <= to)
                return also({ done: false, value: from }, () => from += step)
            return { done: true } as IteratorResult<bigint>
        }
    }
}

/** `from..to` */
export class IRange extends TRange<bigint> implements Iterable<bigint> {
    constructor(from: bigint, to: bigint) { super(from, to) }

    [Symbol.iterator]() {
        return rangeIntIter(1n, this.from, this.to)
    }
}
/** `..to` */
export class IRangeTo extends TRangeTo<bigint> {
    constructor(to: bigint) { super(to) }
}
/** `from..` */
export class IRangeFrom extends TRangeFrom<bigint> implements Iterable<bigint>{
    constructor(from: bigint) { super(from) }

    [Symbol.iterator]() {
        return rangeIntIter(1n, this.from)
    }
}
/** `from..=to` */
export class IRangeEq extends TRangeEq<bigint> implements Iterable<bigint>{
    constructor(from: bigint, to: bigint) { super(from, to) }

    [Symbol.iterator]() {
        return rangeIntEqIter(1n, this.from, this.to)
    }
}
/** `..=to` */
export class IRangeToEq extends TRangeToEq<bigint> {
    constructor(to: bigint) { super(to) }
}

export function range(from: number, to: number): NRange
export function range(from: bigint, to: bigint): IRange
export function range<T>(from: T, to: T): TRange<T>
export function range(from: any, to: any): TRange<any> {
    if (typeof from === 'number') return new NRange(from, to)
    else if (typeof from === 'bigint') return new IRange(from, to)
    return new TRange(from, to)
}

export function rangeTo(to: number): NRangeTo
export function rangeTo(to: bigint): IRangeTo
export function rangeTo<T>(to: T): TRangeTo<T>
export function rangeTo(to: any): TRangeTo<any> {
    if (typeof to === 'number') return new NRangeTo(to)
    else if (typeof to === 'bigint') return new IRangeTo(to)
    return new TRangeTo(to)
}

export function rangeFrom(from: number): NRangeFrom
export function rangeFrom(from: bigint): IRangeFrom
export function rangeFrom<T>(from: T): TRangeFrom<T>
export function rangeFrom(from: any): TRangeFrom<any> {
    if (typeof from === 'number') return new NRangeFrom(from)
    else if (typeof from === 'bigint') return new IRangeFrom(from)
    return new TRangeFrom(from)
}

export function rangeEq(from: number, to: number): NRangeEq
export function rangeEq(from: bigint, to: bigint): IRangeEq
export function rangeEq<T>(from: T, to: T): TRangeEq<T>
export function rangeEq(from: any, to: any): TRangeEq<any> {
    if (typeof from === 'number') return new NRangeEq(from, to)
    else if (typeof from === 'bigint') return new IRangeEq(from, to)
    return new TRangeEq(from, to)
}

export function rangeToEq(to: number): NRangeToEq
export function rangeToEq(to: bigint): IRangeToEq
export function rangeToEq<T>(to: T): TRangeToEq<T>
export function rangeToEq(to: any): TRangeToEq<any> {
    if (typeof to === 'number') return new NRangeToEq(to)
    else if (typeof to === 'bigint') return new IRangeToEq(to)
    return new TRangeToEq(to)
}


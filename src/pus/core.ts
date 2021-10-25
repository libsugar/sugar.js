export interface Pushable<T, TReturn = any> {
    apply(then: (v: PusherResult<T, TReturn>) => void): void
}

export interface PusherYieldResult<TYield> {
    done?: false;
    value: TYield;
}

export interface PusherReturnResult<TReturn> {
    done: true;
    value: TReturn;
}

export type PusherResult<T, TReturn = any> = PusherYieldResult<T> | PusherReturnResult<TReturn>

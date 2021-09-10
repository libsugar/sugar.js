import { IEvent, TEvent } from "./event";

export class Pus<T> implements IEvent<[T]> {

    readonly event = new TEvent<[T]>()

    emit(v: T): void {
        this.event.emit(v)
    }
    on(f: (v: T) => void): void {
        this.event.on(f)
    }
    once(f: (v: T) => void): void {
        this.event.once(f)
    }
    off(f: (v: T) => void): void {
        this.event.off(f)
    }
   
}
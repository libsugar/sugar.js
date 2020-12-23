import { Box } from "./box";
import { DefaultOrFunc, getDefault } from "./fn";
import { isSome } from "./maybe";
import { Option } from "./option";
import { MapKey, MutableMapLike, MapValue, MapLike } from "./types";

/** Extended Map */
export function MapEx<M extends MapLike<any, any>>(map: M) {
    return new ExMap(map)
}

/** Mutable Extended Map */
export function MutMapEx<M extends MutableMapLike<any, any>>(map: M) {
    return new MutableExMap(map)
}

/** Extended Map */
export class ExMap<M extends MapLike<any, any>> implements Box<M>, MapLike<MapKey<M>, MapValue<M>> {
    constructor(public val: M) { }

    get(key: MapKey<M>): MapValue<M> | undefined {
        return this.val.get(key)
    }
    has(key: MapKey<M>): boolean {
        return this.val.has(key)
    }

    /** If it does not exist, return to the default value */
    getOrDefault(key: MapKey<M>, defv: DefaultOrFunc<MapValue<M>>): MapValue<M> {
        if (this.has(key)) {
            return this.get(key)!
        } else {
            return getDefault(defv)
        }
    }

    /** Get and pass to the callback */
    getAndThen(key: MapKey<M>, then: (val: MapValue<M>) => any): void
    /** Get as Promise*/
    getAndThen(key: MapKey<M>): Promise<MapValue<M>>
    getAndThen(key: MapKey<M>, then?: (val: MapValue<M>) => any): void | Promise<MapValue<M>> {
        if (isSome(then)) {
            return new Promise(res => this.getAndThen(key, res))
        }
        if (this.has(key)) {
            then!(this.get(key)!)
        }
    }

    /** Try to get  
     * Option instead of Maybe to ensure that the value of None can be distinguished */
    tryGet(key: MapKey<M>): Option<MapValue<M>> {
        if (this.has(key)) {
            return Option.some(this.get(key)!)
        } else return Option.none()
    }
}

/** Mutable Extended Map */
export class MutableExMap<M extends MutableMapLike<any, any>> extends ExMap<M> implements MutableMapLike<MapKey<M>, MapValue<M>> {
    constructor(val: M) { super(val) }

    set(key: MapKey<M>, value: MapValue<M>): this {
        this.val.set(key, value)
        return this
    }
    delete(key: MapKey<M>): boolean {
        return this.val.delete(key)
    }

    /** Get if has, add if not */
    getOrAdd(key: MapKey<M>, init: () => MapValue<M>): MapValue<M> {
        if (this.has(key)) {
            return this.get(key)!
        } else {
            const r = init()
            this.set(key, r)
            return r
        }
    }
}

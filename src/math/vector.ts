import { range } from "../range";
import { map, zip, reduce } from "../seq";
import { TupleN } from "../types";

export type Vector<N extends number, T = number> = TupleN<T, N>

export type Vector2<T = number> = Vector<2, T>
export type Vector3<T = number> = Vector<3, T>
export type Vector4<T = number> = Vector<4, T>

export function vector2<T>(v: T): Vector2<T>
export function vector2<T>(x: T, y: T): Vector2<T>
export function vector2<T>(...val: T[]): any {
    if (val.length == 1) return [...map(range(1, 2), _ => val[0])]
    return val
}

export function vector3<T>(v: T): Vector3<T>
export function vector3<T>(x: T, y: T, z: T): Vector3<T>
export function vector3<T>(...val: T[]): any {
    if (val.length == 1) return [...map(range(1, 3), _ => val[0])]
    return val
}

export function vector4<T>(v: T): Vector4<T>
export function vector4<T>(x: T, y: T, z: T, w: T): Vector4<T>
export function vector4<T>(...val: T[]): any {
    if (val.length == 1) return [...map(range(1, 4), _ => val[0])]
    return val
}

export function vector<T>(x: T, y: T): Vector2<T>
export function vector<T>(x: T, y: T, z: T): Vector3<T>
export function vector<T>(x: T, y: T, z: T, w: T): Vector4<T>
export function vector<A extends any[]>(...args: A): Vector<A['length'], A[0]>
export function vector(...args: any[]): any {
    return args
}

export namespace Vector {
    export function add<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, number>
    export function add<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, bigint>
    export function add<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, any> {
        return [...map(zip(a, b), ([a, b]: any) => a + b)] as any
    }

    export function sub<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, number>
    export function sub<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, bigint>
    export function sub<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, any> {
        return [...map(zip(a, b), ([a, b]: any) => a - b)] as any
    }

    export function mul<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, number>
    export function mul<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, bigint>
    export function mul<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, any> {
        return [...map(zip(a, b), ([a, b]: any) => a * b)] as any
    }

    export function div<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, number>
    export function div<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, bigint>
    export function div<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, any> {
        return [...map(zip(a, b), ([a, b]: any) => a / b)] as any
    }

    export function mod<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, number>
    export function mod<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, bigint>
    export function mod<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, any> {
        return [...map(zip(a, b), ([a, b]: any) => a % b)] as any
    }

    export function pow<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, number>
    export function pow<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, bigint>
    export function pow<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, any> {
        return [...map(zip(a, b), ([a, b]: any) => a ** b)] as any
    }


    export function addBy<N extends number>(a: Vector<N, number>, b: number): Vector<N, number>
    export function addBy<N extends number>(a: Vector<N, bigint>, b: bigint): Vector<N, bigint>
    export function addBy<N extends number>(a: Vector<N, any>, b: any): Vector<N, any> {
        return [...map(a, (a: any) => a + b)] as any
    }

    export function subBy<N extends number>(a: Vector<N, number>, b: number): Vector<N, number>
    export function subBy<N extends number>(a: Vector<N, bigint>, b: bigint): Vector<N, bigint>
    export function subBy<N extends number>(a: Vector<N, any>, b: any): Vector<N, any> {
        return [...map(a, (a: any) => a - b)] as any
    }

    export function mulBy<N extends number>(a: Vector<N, number>, b: number): Vector<N, number>
    export function mulBy<N extends number>(a: Vector<N, bigint>, b: bigint): Vector<N, bigint>
    export function mulBy<N extends number>(a: Vector<N, any>, b: any): Vector<N, any> {
        return [...map(a, (a: any) => a * b)] as any
    }

    export function divBy<N extends number>(a: Vector<N, number>, b: number): Vector<N, number>
    export function divBy<N extends number>(a: Vector<N, bigint>, b: bigint): Vector<N, bigint>
    export function divBy<N extends number>(a: Vector<N, any>, b: any): Vector<N, any> {
        return [...map(a, (a: any) => a / b)] as any
    }

    export function modBy<N extends number>(a: Vector<N, number>, b: number): Vector<N, number>
    export function modBy<N extends number>(a: Vector<N, bigint>, b: bigint): Vector<N, bigint>
    export function modBy<N extends number>(a: Vector<N, any>, b: any): Vector<N, any> {
        return [...map(a, (a: any) => a % b)] as any
    }

    export function powBy<N extends number>(a: Vector<N, number>, b: number): Vector<N, number>
    export function powBy<N extends number>(a: Vector<N, bigint>, b: bigint): Vector<N, bigint>
    export function powBy<N extends number>(a: Vector<N, any>, b: any): Vector<N, any> {
        return [...map(a, (a: any) => a ** b)] as any
    }


    export function eq<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, boolean>
    export function eq<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, boolean>
    export function eq<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, boolean> {
        return [...map(zip(a, b), ([a, b]: any) => a == b)] as any
    }

    export function ne<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, boolean>
    export function ne<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, boolean>
    export function ne<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, boolean> {
        return [...map(zip(a, b), ([a, b]: any) => a != b)] as any
    }

    export function lt<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, boolean>
    export function lt<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, boolean>
    export function lt<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, boolean> {
        return [...map(zip(a, b), ([a, b]: any) => a < b)] as any
    }

    export function gt<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, boolean>
    export function gt<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, boolean>
    export function gt<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, boolean> {
        return [...map(zip(a, b), ([a, b]: any) => a > b)] as any
    }

    export function le<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, boolean>
    export function le<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, boolean>
    export function le<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, boolean> {
        return [...map(zip(a, b), ([a, b]: any) => a <= b)] as any
    }

    export function ge<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, boolean>
    export function ge<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, boolean>
    export function ge<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, boolean> {
        return [...map(zip(a, b), ([a, b]: any) => a >= b)] as any
    }

    export function neg<N extends number>(a: Vector<N, bigint>): Vector<N, bigint>
    export function neg<N extends number>(a: Vector<N, unknown>): Vector<N, number>
    export function neg<N extends number>(a: Vector<N, any>): Vector<N, any> {
        return [...map(a, (v: any) => -v)] as any
    }

    export function pos<N extends number>(a: Vector<N, bigint>): Vector<N, bigint>
    export function pos<N extends number>(a: Vector<N, unknown>): Vector<N, number>
    export function pos<N extends number>(a: Vector<N, any>): Vector<N, any> {
        return [...map(a, (v: any) => +v)] as any
    }

    export function dot<N extends number>(a: Vector<N, number>, b: Vector<N, number>): Vector<N, number>
    export function dot<N extends number>(a: Vector<N, bigint>, b: Vector<N, bigint>): Vector<N, bigint>
    export function dot<N extends number>(a: Vector<N, any>, b: Vector<N, any>): Vector<N, any> {
        return reduce(map(zip(a, b), ([a, b]: any) => a * b), (a, i) => a + i) as any
    }

}


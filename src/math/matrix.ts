import { range } from "../range";
import { map, zip } from "../seq";
import { FlatTuple, TupleN } from "../types";
import { Vector } from "./vector";

export type Matrix<N extends number, M extends number, T = number> = TupleN<TupleN<T, M>, N>

export type Matrix2x2<T = number> = Matrix<2, 2, T>
export type Matrix2x3<T = number> = Matrix<2, 3, T>
export type Matrix2x4<T = number> = Matrix<2, 4, T>

export type Matrix3x2<T = number> = Matrix<3, 2, T>
export type Matrix3x3<T = number> = Matrix<3, 3, T>
export type Matrix3x4<T = number> = Matrix<3, 4, T>

export type Matrix4x2<T = number> = Matrix<4, 2, T>
export type Matrix4x3<T = number> = Matrix<4, 3, T>
export type Matrix4x4<T = number> = Matrix<4, 4, T>

export function matrix2x2<T>(val: T): Matrix<2, 2, T>
export function matrix2x2<T>(...val: FlatTuple<Matrix<2, 2, T>>): Matrix<2, 2, T> {
    if (val.length == 1) return (matrixN(2, 2) as any)(...(map(range(1, 2 * 2), _ => val[0])))
    return matrixN(2, 2)(...val)
}

export function matrix2x3<T>(val: T): Matrix<2, 3, T>
export function matrix2x3<T>(...val: FlatTuple<Matrix<2, 3, T>>): Matrix<2, 3, T> {
    if (val.length == 1) return (matrixN(2, 3) as any)(...(map(range(1, 2 * 3), _ => val[0])))
    return matrixN(2, 3)(...val)
}

export function matrix2x4<T>(val: T): Matrix<2, 4, T>
export function matrix2x4<T>(...val: FlatTuple<Matrix<2, 4, T>>): Matrix<2, 4, T> {
    if (val.length == 1) return (matrixN(2, 4) as any)(...(map(range(1, 2 * 4), _ => val[0])))
    return matrixN(2, 4)(...val)
}

export function matrix3x2<T>(val: T): Matrix<3, 2, T>
export function matrix3x2<T>(...val: FlatTuple<Matrix<3, 2, T>>): Matrix<3, 2, T> {
    if (val.length == 1) return (matrixN(3, 2) as any)(...(map(range(1, 3 * 2), _ => val[0])))
    return matrixN(3, 2)(...val)
}

export function matrix3x3<T>(val: T): Matrix<3, 3, T>
export function matrix3x3<T>(...val: FlatTuple<Matrix<3, 3, T>>): Matrix<3, 3, T> {
    if (val.length == 1) return (matrixN(3, 3) as any)(...(map(range(1, 3 * 3), _ => val[0])))
    return matrixN(3, 3)(...val)
}

export function matrix3x4<T>(val: T): Matrix<3, 4, T>
export function matrix3x4<T>(...val: FlatTuple<Matrix<3, 4, T>>): Matrix<3, 4, T> {
    if (val.length == 1) return (matrixN(3, 4) as any)(...(map(range(1, 3 * 4), _ => val[0])))
    return matrixN(3, 4)(...val)
}

export function matrix4x2<T>(val: T): Matrix<4, 2, T>
export function matrix4x2<T>(...val: FlatTuple<Matrix<4, 2, T>>): Matrix<4, 2, T> {
    if (val.length == 1) return (matrixN(4, 2) as any)(...(map(range(1, 4 * 2), _ => val[0])))
    return matrixN(4, 2)(...val)
}

export function matrix4x3<T>(val: T): Matrix<4, 3, T>
export function matrix4x3<T>(...val: FlatTuple<Matrix<4, 3, T>>): Matrix<4, 3, T> {
    if (val.length == 1) return (matrixN(4, 3) as any)(...(map(range(1, 4 * 3), _ => val[0])))
    return matrixN(4, 3)(...val)
}

export function matrix4x4<T>(val: T): Matrix<4, 4, T>
export function matrix4x4<T>(...val: FlatTuple<Matrix<4, 4, T>>): Matrix<4, 4, T> {
    if (val.length == 1) return (matrixN(4, 4) as any)(...(map(range(1, 4 * 4), _ => val[0])))
    return matrixN(4, 4)(...val)
}

export function matrixN<M extends number>(m: M): <T>(...val: T[]) => Matrix<number, M, T>
export function matrixN<N extends number, M extends number>(n: N, m: M): <T>(...val: FlatTuple<Matrix<N, M, T>>) => Matrix<N, M, T>
export function matrixN(n: number, m: number): <T>(...val: T[]) => Matrix<number, number, T>
export function matrixN(n: number, m?: number): any {
    let usem = false
    if (m == null) {
        m = n
        usem = true
    }
    return (...val: any[]) => {
        if (usem) if (val.length % m! != 0) throw new TypeError('params error')
        else if (val.length != n * m!) throw new TypeError('params error')
        let r = []
        while (val.length) {
            r.push(val.splice(0, m))
        }
        return r as any
    }
}

export namespace Matrix { 
    export function add<N extends number, M extends number>(a: Matrix<N, M, number>, b: Matrix<N, M, number>): Matrix<N, M, number>
    export function add<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: Matrix<N, M, bigint>): Matrix<N, M, bigint>
    export function add<N extends number, M extends number>(a: Matrix<N, M, any>, b: Matrix<N, M, any>): Matrix<N, M, any> {
        return [...map(zip(a, b), ([a, b]: any) => Vector.add(a, b))] as any
    }

    export function sub<N extends number, M extends number>(a: Matrix<N, M, number>, b: Matrix<N, M, number>): Matrix<N, M, number>
    export function sub<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: Matrix<N, M, bigint>): Matrix<N, M, bigint>
    export function sub<N extends number, M extends number>(a: Matrix<N, M, any>, b: Matrix<N, M, any>): Matrix<N, M, any> {
        return [...map(zip(a, b), ([a, b]: any) => Vector.sub(a, b))] as any
    }

    export function mul<N extends number, M extends number>(a: Matrix<N, M, number>, b: Matrix<N, M, number>): Matrix<N, M, number>
    export function mul<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: Matrix<N, M, bigint>): Matrix<N, M, bigint>
    export function mul<N extends number, M extends number>(a: Matrix<N, M, any>, b: Matrix<N, M, any>): Matrix<N, M, any> {
        return [...map(zip(a, b), ([a, b]: any) => Vector.mul(a, b))] as any
    }

    export function div<N extends number, M extends number>(a: Matrix<N, M, number>, b: Matrix<N, M, number>): Matrix<N, M, number>
    export function div<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: Matrix<N, M, bigint>): Matrix<N, M, bigint>
    export function div<N extends number, M extends number>(a: Matrix<N, M, any>, b: Matrix<N, M, any>): Matrix<N, M, any> {
        return [...map(zip(a, b), ([a, b]: any) => Vector.div(a, b))] as any
    }

    export function mod<N extends number, M extends number>(a: Matrix<N, M, number>, b: Matrix<N, M, number>): Matrix<N, M, number>
    export function mod<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: Matrix<N, M, bigint>): Matrix<N, M, bigint>
    export function mod<N extends number, M extends number>(a: Matrix<N, M, any>, b: Matrix<N, M, any>): Matrix<N, M, any> {
        return [...map(zip(a, b), ([a, b]: any) => Vector.mod(a, b))] as any
    }

    export function pow<N extends number, M extends number>(a: Matrix<N, M, number>, b: Matrix<N, M, number>): Matrix<N, M, number>
    export function pow<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: Matrix<N, M, bigint>): Matrix<N, M, bigint>
    export function pow<N extends number, M extends number>(a: Matrix<N, M, any>, b: Matrix<N, M, any>): Matrix<N, M, any> {
        return [...map(zip(a, b), ([a, b]: any) => Vector.pow(a, b))] as any
    }


    export function addBy<N extends number, M extends number>(a: Matrix<N, M, number>, b: number): Matrix<N, M, number>
    export function addBy<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: bigint): Matrix<N, M, bigint>
    export function addBy<N extends number, M extends number>(a: Matrix<N, M, any>, b: any): Matrix<N, M, any> {
        return [...map(a, (a: any) => Vector.addBy(a, b))] as any
    }

    export function subBy<N extends number, M extends number>(a: Matrix<N, M, number>, b: number): Matrix<N, M, number>
    export function subBy<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: bigint): Matrix<N, M, bigint>
    export function subBy<N extends number, M extends number>(a: Matrix<N, M, any>, b: any): Matrix<N, M, any> {
        return [...map(a, (a: any) => Vector.subBy(a, b))] as any
    }

    export function mulBy<N extends number, M extends number>(a: Matrix<N, M, number>, b: number): Matrix<N, M, number>
    export function mulBy<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: bigint): Matrix<N, M, bigint>
    export function mulBy<N extends number, M extends number>(a: Matrix<N, M, any>, b: any): Matrix<N, M, any> {
        return [...map(a, (a: any) => Vector.mulBy(a, b))] as any
    }

    export function divBy<N extends number, M extends number>(a: Matrix<N, M, number>, b: number): Matrix<N, M, number>
    export function divBy<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: bigint): Matrix<N, M, bigint>
    export function divBy<N extends number, M extends number>(a: Matrix<N, M, any>, b: any): Matrix<N, M, any> {
        return [...map(a, (a: any) => Vector.divBy(a, b))] as any
    }

    export function modBy<N extends number, M extends number>(a: Matrix<N, M, number>, b: number): Matrix<N, M, number>
    export function modBy<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: bigint): Matrix<N, M, bigint>
    export function modBy<N extends number, M extends number>(a: Matrix<N, M, any>, b: any): Matrix<N, M, any> {
        return [...map(a, (a: any) => Vector.modBy(a, b))] as any
    }

    export function powBy<N extends number, M extends number>(a: Matrix<N, M, number>, b: number): Matrix<N, M, number>
    export function powBy<N extends number, M extends number>(a: Matrix<N, M, bigint>, b: bigint): Matrix<N, M, bigint>
    export function powBy<N extends number, M extends number>(a: Matrix<N, M, any>, b: any): Matrix<N, M, any> {
        return [...map(a, (a: any) => Vector.powBy(a, b))] as any
    }
}

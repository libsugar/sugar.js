
export namespace Nums {
    /** `0` */
    export function zero(sample: number): 0
    /** `0n` */
    export function zero(sample: bigint): 0n
    /** `0` | `0n` */
    export function zero(v: number | bigint): 0 | 0n
    export function zero(v: number | bigint): 0 | 0n {
        if (typeof v === 'bigint') return 0n
        return 0
    }
    /** `1` */
    export function one(sample: number): 1
    /** `1n` */
    export function one(sample: bigint): 1n
    /** `1` | `1n` */
    export function one(v: number | bigint): 1 | 1n
    export function one(v: number | bigint): 1 | 1n {
        if (typeof v === 'bigint') return 1n
        return 1
    }
}

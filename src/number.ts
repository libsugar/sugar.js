
export namespace Nums {
    export function zero(sample: number): number
    export function zero(sample: bigint): bigint
    export function zero(v: number | bigint): number | bigint {
        if (typeof v === 'bigint') return 0n
        return 0
    }
    export function one(sample: number): number
    export function one(sample: bigint): bigint
    export function one(v: number | bigint): number | bigint {
        if (typeof v === 'bigint') return 1n
        return 1
    }
}

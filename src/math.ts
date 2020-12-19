export namespace MathEx {

    export function abs(value: number): number
    export function abs(value: bigint): bigint
    export function abs(value: any): any {
        return max(value, -value)
    }

    export function min(a: number, ...args: number[]): number
    export function min(a: bigint, ...args: bigint[]): bigint
    export function min(a: any, ...args: any[]): any {
        let min = a
        for (const i of args) {
            if (i < min) min = i
        }
        return min
    }

    export function max(a: number, ...args: number[]): number
    export function max(a: bigint, ...args: bigint[]): bigint
    export function max(a: any, ...args: any[]): any {
        let max = a
        for (const i of args) {
            if (i > max) max = i
        }
        return max
    }

    export function pow(base: number, exponent: number): number
    export function pow(base: bigint, exponent: bigint): bigint
    export function pow(base: any, exponent: any): any {
        return base ** exponent
    }

    export function remap(value: number, inLow: number, inHigh: number, outLow: number, outHigh: number): number
    export function remap(value: bigint, inLow: bigint, inHigh: bigint, outLow: bigint, outHigh: bigint): bigint
    export function remap(value: any, inLow: any, inHigh: any, outLow: any, outHigh: any): any {
        return outLow + (value - inLow) * (outHigh - outLow) / (inHigh - inLow)
    }

    export function clamp(value: number, lower: number, upper: number): number
    export function clamp(value: bigint, lower: bigint, upper: bigint): bigint
    export function clamp(value: any, lower: any, upper: any): any {
        if (value < lower) return lower
        if (value > upper) return upper
        return value
    }

    export function radians(degrees: number): number {
        return degrees * DEG_PER_RAD
    }

    export function degrees(radians: number): number {
        return radians * RAD_PER_DEG
    }

    export const RAD_PER_DEG = 180 / Math.PI
    export const DEG_PER_RAD = Math.PI / 180
}

/** Extended Math */
export namespace MathEx {

    /** `2π` */
    export const PI2 = 6.283185307179586476925286766559

    /** `180 ÷ π` */
    export const DEG_PER_RAD = 57.295779513082320876798154814105
    
    /** `π ÷ 180` */
    export const RAD_PER_DEG = 0.01745329251994329576923690768489

    /** Get absolute value */
    export function abs(value: number): number
    /** Get absolute value */
    export function abs(value: bigint): bigint
    export function abs(value: any): any {
        return max(value, -value)
    }

    /** Find the smallest number */
    export function min(a: number, ...args: number[]): number
    /** Find the smallest number */
    export function min(a: bigint, ...args: bigint[]): bigint
    export function min(a: any, ...args: any[]): any {
        let min = a
        for (const i of args) {
            if (i < min) min = i
        }
        return min
    }

    /** Find the largest number */
    export function max(a: number, ...args: number[]): number
    /** Find the largest number */
    export function max(a: bigint, ...args: bigint[]): bigint
    export function max(a: any, ...args: any[]): any {
        let max = a
        for (const i of args) {
            if (i > max) max = i
        }
        return max
    }

    /** Power */
    export function pow(base: number, exponent: number): number
    /** Power */
    export function pow(base: bigint, exponent: bigint): bigint
    export function pow(base: any, exponent: any): any {
        return base ** exponent
    }

    /** Remap numbers from a range to another range */
    export function remap(value: number, inLow: number, inHigh: number, outLow: number, outHigh: number): number
    /** Remap numbers from a range to another range */
    export function remap(value: bigint, inLow: bigint, inHigh: bigint, outLow: bigint, outHigh: bigint): bigint
    export function remap(value: any, inLow: any, inHigh: any, outLow: any, outHigh: any): any {
        return outLow + (value - inLow) * (outHigh - outLow) / (inHigh - inLow)
    }

    /** Limit number range, numbers outside the range will be cropped */
    export function clamp(value: number, lower: number, upper: number): number
    /** Limit number range, numbers outside the range will be cropped */
    export function clamp(value: bigint, lower: bigint, upper: bigint): bigint
    export function clamp(value: any, lower: any, upper: any): any {
        if (value < lower) return lower
        if (value > upper) return upper
        return value
    }

    /** Degrees to Radians */
    export function radians(degrees: number): number {
        return degrees * RAD_PER_DEG
    }

    /** Radians to Degrees */
    export function degrees(radians: number): number {
        return radians * DEG_PER_RAD
    }

    /** Positive number returns `1`, Negative number returns `-1`   
     * - `n` => `1`  
     * - `-n` => `-1`  
     * - `0` => `1`  
     * -`-0` => `-1`  
     * - `NaN` => `NaN`  
    */
    export function unit(value: number): -1 | 1
    /** Negative number returns `-1`, other returns `1`   
     * - `n` => `1`
     * - `-n` => `-1`  
     * - `0` => `1`
    */
    export function unit(value: bigint): -1n | 1n
    export function unit(v: any): any {
        if (typeof v === 'bigint') return v < 0n ? -1n : 1n
        return isNaN(v) ? NaN : v < 0 ? -1 : v > 0 ? 1 : 1 / v < 0 ? -1 : 1
    }

    /** Returns the sign of the x, indicating whether x is positive, negative or zero. 
     * - `n` => `1`  
     * - `-n` => `-1`  
     * - `0` => `0`  
     * - `-0` => `-0`  
     * - `NaN` => `NaN`  
    */
    export function sign(value: number): -1 | 1 | 0 | -0
    /** Returns the sign of the x, indicating whether x is positive, negative or zero. 
     * - `n` => `1`  
     * - `-n` => `-1`  
     * - `0` => `0`  
    */
    export function sign(value: bigint): -1n | 1n | 0n
    export function sign(v: any): any {
        if (typeof v === 'bigint') return v < 0n ? -1n : v > 0n ? 1n : 0n
        return Math.sign(v)
    }

    /** Compare 2 numbers
     * - `a > b` => `1`
     * - `a < b` => `-1`
     * - `a == b` => `0`
     */
    export function cmp(a: number, b: number): -1 | 0 | 1
    /** Compare 2 numbers
     * - `a > b` => `1`
     * - `a < b` => `-1`
     * - `a == b` => `0`
     */
    export function cmp(a: bigint, b: bigint): -1n | 0n | 1n
    export function cmp(a: any, b: any): any {
        if (typeof a === 'bigint') return a > b ? 1n : a < b ? -1n : 0n
        return a > b ? 1 : a < b ? -1 : 0
    }
}

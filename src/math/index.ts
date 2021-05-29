export * from './number'
export * from './linear'
export * from './safeDiv'

import { Matrix } from './matrix'

/** Extended Math */
export namespace MathEx {

    /** `2π` */
    export const PI2 = 6.2831853071795864769252867665590057683943387987502116419498891846

    /** `180 ÷ π` */
    export const DEG_PER_RAD = 57.295779513082320876798154814105170332405472466564321549160243861

    /** `π ÷ 180` */
    export const RAD_PER_DEG = 0.0174532925199432957692369076848861271344287188854172545609719144

    /** √1 */
    export const Sqrt1 = 1

    /** √2 */
    export const Sqrt2 = 1.4142135623730950488016887242096980785696718753769480731766797379

    /** √3 */
    export const Sqrt3 = 1.7320508075688772935274463415058723669428052538103806280558069794

    /** √4 */
    export const Sqrt4 = 2

    /** √5 */
    export const Sqrt5 = 2.2360679774997896964091736687312762354406183596115257242708972454

    /** √6 */
    export const Sqrt6 = 2.4494897427831780981972840747058913919659474806566701284326925672

    /** √7 */
    export const Sqrt7 = 2.6457513110645905905016157536392604257102591830824501803683344592

    /** √8 */
    export const Sqrt8 = 2.8284271247461900976033774484193961571393437507538961463533594759

    /** √9 */
    export const Sqrt9 = 3

    /** √10 */
    export const Sqrt10 = 3.1622776601683793319988935444327185337195551393252168268575048527

    /** ϕ | φ */
    export const GoldenRatio = 1.6180339887498948482045868343656381177203091798057628621354486227

    /** K */
    export const Khinchin = 2.6854520010653064453097148354817956938203822939944629530511523455

    /** λ */
    export const Conway = 1.3035772690342963912570991121525518907307025046594048757548613906

    /** C10 */
    export const Champernowne = 0.1234567891011121314151617181920212223242526272829303132333435363

    /** γ */
    export const Euler = 0.5772156649015328606065120900824024310421593359399235988057672348

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

/** Fibonacci sequence in `O(1)` */
export function fibonacci(n: number): number {
    return ((-1) ** (1 - n) * MathEx.GoldenRatio ** (-n) + MathEx.GoldenRatio ** n) / MathEx.Sqrt5 | 0
}

/** Fibonacci sequence in `O(2ⁿ)` */
export function fibonacciRecur(n: number): number
export function fibonacciRecur(n: bigint): bigint
export function fibonacciRecur(n: any): any {
    if (typeof n === 'bigint') return n <= 1n ? n : fibonacciRecur(n - 1n) + fibonacciRecur(n - 2n)
    return n <= 1 ? n : fibonacciRecur(n - 1) + fibonacciRecur(n - 2)
}

/** Fibonacci sequence in `O(n)` */
export function fibonacciTailRecur(n: number): number
export function fibonacciTailRecur(n: bigint): bigint
export function fibonacciTailRecur(n: any): any {
    if (typeof n === 'bigint') return (function f(n: any, a: any, b: any): any {
        return n == 0n ? a : f(n - 1n, b, a + b)
    })(n, 1n, 1n)
    return (function f(n: any, a: any, b: any): any {
        return n == 0 ? a : f(n - 1, b, a + b)
    })(n, 1, 1)
}

/** Fibonacci sequence in `O(n)` */
export function fibonacciLoop(n: number): number
export function fibonacciLoop(n: bigint): bigint
export function fibonacciLoop(n: any): any {
    if (typeof n === 'bigint') {
        if (n <= 1n) return n
        let [a, b] = [0n, 1n]
        for (let i = 2n; i < n + 1n; i++) {
            [a, b] = [b, a + b]
        }
        return b
    }
    if (n <= 1) return n
    let [a, b] = [0, 1]
    for (let i = 2; i < n + 1; i++) {
        [a, b] = [b, a + b]
    }
    return b
}

/** Fibonacci sequence in `O(logₙ)` */
export function fibonacciMatrix(n: number): number
export function fibonacciMatrix(n: any): any {
    if (n <= 1) return n
    let base = [[1, 1], [1, 0]]
    let res = [[1, 0], [0, 1]]
    while (n) {
        if (n & 1) {
            res = Matrix.mul(res, base)
        }
        base = Matrix.powBy(base, 2)
        n >>= 1
    }
    return res[0][1]
}

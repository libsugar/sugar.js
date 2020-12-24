import { Nums } from "./number"

/** if b is 0 return 0  
 * `a / b`
*/
export function safeDiv(a: number, b: number): number
/** if b is 0 return 0  
 * `a / b`
*/
export function safeDiv(a: bigint, b: bigint): bigint
export function safeDiv(a: any, b: any): any {
    return b == Nums.zero(b) ? b : a / b
}

/** if b is 0 return a  
 * `a / b`
*/
export function asitDiv(a: number, b: number): number
/** if b is 0 return a  
 * `a / b`
*/
export function asitDiv(a: bigint, b: bigint): bigint
export function asitDiv(a: any, b: any): any {
    return b == Nums.zero(b) ? a : a / b
}

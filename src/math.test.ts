import { MathEx } from "./math"

test('abs', () => {
    expect(MathEx.abs(-1)).toBe(1)
    expect(MathEx.abs(-1n)).toBe(1n)
})

test('min', () => {
    expect(MathEx.min(1, 2, 3)).toBe(1)
    expect(MathEx.min(1n, 2n, 3n)).toBe(1n)
})

test('max', () => {
    expect(MathEx.max(1, 2, 3)).toBe(3)
    expect(MathEx.max(1n, 2n, 3n)).toBe(3n)
})

test('pow', () => {
    expect(MathEx.pow(5, 6)).toBe(5 ** 6)
    expect(MathEx.pow(5n, 6n)).toBe(5n ** 6n)
    expect(MathEx.pow(5, 6)).toBe(Math.pow(5, 6))
})

test('remap', () => {
    expect(MathEx.remap(5, 0, 10, 0, 100)).toBe(50)
    expect(MathEx.remap(5n, 0n, 10n, 0n, 100n)).toBe(50n)
})

test('clamp', () => {
    expect(MathEx.clamp(5, 0, 10)).toBe(5)
    expect(MathEx.clamp(5n, 0n, 10n)).toBe(5n)
    expect(MathEx.clamp(-5, 0, 10)).toBe(0)
    expect(MathEx.clamp(-5n, 0n, 10n)).toBe(0n)
    expect(MathEx.clamp(15, 0, 10)).toBe(10)
    expect(MathEx.clamp(15n, 0n, 10n)).toBe(10n)
})

test('radians', () => {
    expect(MathEx.radians(90)).toBe(Math.asin(1))
})

test('degrees', () => {
    expect(MathEx.degrees(Math.asin(1))).toBe(90)
})

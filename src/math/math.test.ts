import { MathEx } from "."

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

test('sign', () => {
    expect(MathEx.sign(1)).toBe(1)
    expect(MathEx.sign(5)).toBe(1)
    expect(MathEx.sign(-1)).toBe(-1)
    expect(MathEx.sign(-5)).toBe(-1)
    expect(MathEx.sign(0)).toBe(0)
    expect(MathEx.sign(-0)).toBe(-0)
    expect(MathEx.sign(NaN)).toBeNaN()
    expect(MathEx.sign(1n)).toBe(1n)
    expect(MathEx.sign(5n)).toBe(1n)
    expect(MathEx.sign(-1n)).toBe(-1n)
    expect(MathEx.sign(-5n)).toBe(-1n)
    expect(MathEx.sign(0n)).toBe(0n)
})

test('unit', () => {
    expect(MathEx.unit(1)).toBe(1)
    expect(MathEx.unit(5)).toBe(1)
    expect(MathEx.unit(-1)).toBe(-1)
    expect(MathEx.unit(-5)).toBe(-1)
    expect(MathEx.unit(0)).toBe(1)
    expect(MathEx.unit(-0)).toBe(-1)
    expect(MathEx.unit(Infinity)).toBe(1)
    expect(MathEx.unit(-Infinity)).toBe(-1)
    expect(MathEx.unit(NaN)).toBeNaN()
    expect(MathEx.unit(1n)).toBe(1n)
    expect(MathEx.unit(5n)).toBe(1n)
    expect(MathEx.unit(-1n)).toBe(-1n)
    expect(MathEx.unit(-5n)).toBe(-1n)
    expect(MathEx.unit(0n)).toBe(1n)
})

test('cmp', () => {
    expect(MathEx.cmp(1, 2)).toBe(-1)
    expect(MathEx.cmp(2, 1)).toBe(1)
    expect(MathEx.cmp(1, 1)).toBe(0)
    expect(MathEx.cmp(1n, 2n)).toBe(-1n)
    expect(MathEx.cmp(2n, 1n)).toBe(1n)
    expect(MathEx.cmp(1n, 1n)).toBe(0n)
})

import { pipe } from './pipe'

test('pipe1', () => {
    const f = pipe(
        (a: number) => a + 1,
    )
    expect(f(1)).toBe(2)
})

test('pipe2', () => {
    const f = pipe(
        (a: number) => a + 1,
        (a: number) => a + 2,
    )
    expect(f(1)).toBe(4)
})

test('pipe3', () => {
    const f = pipe(
        (a: number) => a + 1,
        (a: number) => a + 2,
        (a: number) => a + 3,
        (a: number) => a + 4,
        (a: number) => a + 5,
        (a: number) => a + 6,
    )
    expect(f(1)).toBe(1 + 1 + 2 + 3 + 4 + 5 + 6)
})

test('pipe4', () => {
    const f = pipe(
        (a: number, b: number) => a + b,
        (a: number) => a + 2,
    )
    expect(f(1, 2)).toBe(5)
})

test('pipe5', () => {
    const f = pipe(
        (a: number) => `${a}`,
        (a) => a.length > 1,
    )
    expect(f(123)).toBe(true)
})

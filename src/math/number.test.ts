import { Nums } from "../number"

test('zero', () => {
    expect(Nums.zero(5)).toBe(0)
    expect(Nums.zero(5n)).toBe(0n)
})

test('one', () => {
    expect(Nums.one(5)).toBe(1)
    expect(Nums.one(5n)).toBe(1n)
})

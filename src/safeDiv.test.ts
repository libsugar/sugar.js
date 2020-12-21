import { asitDiv, safeDiv } from './safeDiv'

test('safeDiv', () => {
    expect(safeDiv(1, 2)).toBe(1 / 2)
    expect(safeDiv(1, 0)).toBe(0)
})

test('asitDiv', () => {
    expect(asitDiv(1, 2)).toBe(1 / 2)
    expect(asitDiv(1, 0)).toBe(1)
})

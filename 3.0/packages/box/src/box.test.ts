import { box, Box } from './box'

test('box', () => {
    expect(box(1)).toEqual({ value: 1 })
})

test('getVal', () => {
    expect(Box.get(box(1))).toBe(1)
})

test('setVal', () => {
    const val = box(1)
    expect(Box.get(val)).toBe(1)
    Box.set(val, 2)
    expect(Box.get(val)).toBe(2)
})
import { box, getVal, setVal } from './box'

test('box', () => {
    expect(box(1)).toEqual({ val: 1 })
})

test('getVal', () => {
    expect(getVal(box(1))).toBe(1)
})

test('setVal', () => {
    const val = box(1)
    expect(getVal(val)).toBe(1)
    setVal(val, 2)
    expect(getVal(val)).toBe(2)
})
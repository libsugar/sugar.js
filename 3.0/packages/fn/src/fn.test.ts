import { empty, getDefault, identity, raise, TODO } from './fn'

test('identity', () => {
    const v = identity(1)
    expect(v).toBe(1)
})

test('empty', () => {
    const v = empty()
    expect(v).toBe(void 0)
})

test('TODO', () => {
    expect(() => TODO()).toThrow('todo')
})

test('raise', () => {
    expect(() => raise('123')).toThrow('123')
})

test('getDefault', () => {
    expect(getDefault(1)).toBe(1)
    expect(getDefault(() => 1)).toBe(1)
})

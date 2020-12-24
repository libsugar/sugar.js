
import { box } from './box'
import { run, call, used, also, collect } from './effect'

test('run', () => {
    const v = run(() => 1)
    expect(v).toBe(1)
})

test('used', () => {
    const v = used(1, v => v + 1)
    expect(v).toBe(2)
})

test('also', () => {
    const v = also(1, v => {
        expect(v).toBe(1)
    })
    expect(v).toBe(1)
})

test('also box', () => {
    const v = also(box(1), v => {
        v.val += 1
    })
    expect(v.val).toBe(2)
})

test('call', () => {
    expect(call()).toBeUndefined()
    expect(call(() => 0)).toBe(0)
    expect(call(1, v => v)).toBe(1)
    expect(call(1, 2, (a, b) => a + b)).toBe(3)
})

test('collect', () => {
    expect(collect()).toBeUndefined()
    expect(collect(function* () { yield 1 })).toEqual([1])
    expect(collect(1, 2, 3, function* (a, b, c) { yield* [a, b, c] })).toEqual([1, 2, 3])
})

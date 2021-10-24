import { OnceIter } from './onceiter'

test('onceiter', () => {
    let i = 0
    const a = new OnceIter(function* () {
        yield 1
        i++
        yield 2
        i++
        yield 3
        i++
    }())
    expect([...a]).toEqual([1, 2, 3])
    expect([...a]).toEqual([1, 2, 3])
    expect([...a]).toEqual([1, 2, 3])
    expect(i).toBe(3)
})

test('onceiter2', () => {
    const a = new OnceIter(function* () {
        yield 1
        yield 2
        yield 3
    }())
    const b = a[Symbol.iterator]()
    const c = a[Symbol.iterator]()
    expect(b.next()).toMatchObject({ done: false, value: 1 })
    expect(c.next()).toMatchObject({ done: false, value: 1 })
    expect(b.next()).toMatchObject({ done: false, value: 2 })
    expect(b.next()).toMatchObject({ done: false, value: 3 })
    expect(c.next()).toMatchObject({ done: false, value: 2 })
    expect(c.next()).toMatchObject({ done: false, value: 3 })
    expect(c.next()).toMatchObject({ done: true, value: undefined })
    expect(b.next()).toMatchObject({ done: true, value: undefined })
})

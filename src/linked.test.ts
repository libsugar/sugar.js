import { Linked } from './linked'

test('linked from', () => {
    const l = Linked.from([1, 2, 3])
    expect([...l]).toStrictEqual([1, 2, 3])
    expect([...l.backItems()]).toStrictEqual([3, 2, 1])
    expect(l.size).toBe(3)
})

test('linked of', () => {
    const l = Linked.of(1, 2, 3)
    expect([...l]).toStrictEqual([1, 2, 3])
    expect([...l.backItems()]).toStrictEqual([3, 2, 1])
    expect(l.size).toBe(3)
})

test('linked push', () => {
    const l = new Linked<number>()
    l.push(1)
    l.push(2)
    l.push(3)
    expect([...l]).toStrictEqual([1, 2, 3])
    expect([...l.backItems()]).toStrictEqual([3, 2, 1])
    expect(l.size).toBe(3)
})

test('linked pop', () => {
    const l = new Linked<number>()
    l.push(1)
    l.push(2)
    expect(l.size).toBe(2)
    const v = l.pop()
    expect([...l]).toStrictEqual([1])
    expect(v).toBe(2)
    expect(l.size).toBe(1)
})

test('linked unshift', () => {
    const l = new Linked<number>()
    l.unshift(1)
    l.unshift(2)
    l.unshift(3)
    expect([...l]).toStrictEqual([3, 2, 1])
    expect([...l.backItems()]).toStrictEqual([1, 2, 3])
    expect(l.size).toBe(3)
})

test('linked shift', () => {
    const l = new Linked<number>()
    l.push(1)
    l.push(2)
    expect(l.size).toBe(2)
    const v = l.shift()
    expect([...l]).toStrictEqual([2])
    expect(v).toBe(1)
    expect(l.size).toBe(1)
})

test('linked push multi', () => {
    const l = new Linked<number>()
    l.push(1, 2, 3)
    expect([...l]).toStrictEqual([1, 2, 3])
    expect([...l.backItems()]).toStrictEqual([3, 2, 1])
    expect(l.size).toBe(3)
})


test('linked unshift multi', () => {
    const l = new Linked<number>()
    l.unshift(1, 2, 3)
    expect([...l]).toStrictEqual([1, 2, 3])
    expect([...l.backItems()]).toStrictEqual([3, 2, 1])
    expect(l.size).toBe(3)
})

test('linked add after', () => {
    const l = new Linked<number>()
    const n = l.push(1)
    l.push(2)
    l.addAfter(n, 3)
    expect([...l]).toStrictEqual([1, 3, 2])
    expect([...l.backItems()]).toStrictEqual([2, 3, 1])
    expect(l.size).toBe(3)
})

test('linked add before', () => {
    const l = new Linked<number>()
    l.push(1)
    const n = l.push(2)
    l.addBefore(n, 3)
    expect([...l]).toStrictEqual([1, 3, 2])
    expect([...l.backItems()]).toStrictEqual([2, 3, 1])
    expect(l.size).toBe(3)
})

test('linked remove', () => {
    const l = new Linked<number>()
    l.push(1)
    const n = l.push(2)
    l.push(3)
    l.remove(n)
    expect([...l]).toStrictEqual([1, 3])
    expect([...l.backItems()]).toStrictEqual([3, 1])
    expect(l.size).toBe(2)
})

test('linked clear', () => {
    const l = Linked.of(1, 2, 3)
    l.clear()
    expect([...l]).toStrictEqual([])
    expect([...l.backItems()]).toStrictEqual([])
    expect(l.size).toBe(0)
    expect(l.isEmpty).toBe(true)
})

test('linked one', () => {
    const l = Linked.of(1)
    expect(l.onlyOne).toBe(true)
})

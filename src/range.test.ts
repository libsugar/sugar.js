import { range, rangeEq, rangeFrom, rangeTo, rangeToEq } from './range'

test('range iter', () => {
    let r = range(0, 10)
    let a = [...r]
    expect(a).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('irange iter', () => {
    let r = range(0n, 10n)
    let a = [...r]
    expect(a).toEqual([0n, 1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n])
})

test('range iter 2', () => {
    let r = range(10, 0)
    let a = [...r]
    expect(a).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
})

test('irange iter 2', () => {
    let r = range(10n, 0n)
    let a = [...r]
    expect(a).toEqual([10n, 9n, 8n, 7n, 6n, 5n, 4n, 3n, 2n, 1n])
})

test('range iter 3', () => {
    let r = range(0, 0)
    let a = [...r]
    expect(a).toEqual([])
})

test('irange iter 3', () => {
    let r = range(0n, 0n)
    let a = [...r]
    expect(a).toEqual([])
})

test('range iter 4', () => {
    let r = range(0, 1)
    let a = [...r]
    expect(a).toEqual([0])
})

test('irange iter 4', () => {
    let r = range(0n, 1n)
    let a = [...r]
    expect(a).toEqual([0n])
})

test('range eq iter', () => {
    let r = rangeEq(0, 10)
    let a = [...r]
    expect(a).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('irange eq iter', () => {
    let r = rangeEq(0n, 10n)
    let a = [...r]
    expect(a).toEqual([0n, 1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n, 10n])
})

test('range eq iter 2', () => {
    let r = rangeEq(10, 0)
    let a = [...r]
    expect(a).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
})

test('irange eq iter 2', () => {
    let r = rangeEq(10n, 0n)
    let a = [...r]
    expect(a).toEqual([10n, 9n, 8n, 7n, 6n, 5n, 4n, 3n, 2n, 1n, 0n])
})

test('range eq iter 3', () => {
    let r = rangeEq(0, 0)
    let a = [...r]
    expect(a).toEqual([0])
})

test('irange eq iter 3', () => {
    let r = rangeEq(0n, 0n)
    let a = [...r]
    expect(a).toEqual([0n])
})


test('range eq iter 4', () => {
    let r = rangeEq(0, 1)
    let a = [...r]
    expect(a).toEqual([0, 1])
})

test('irange eq iter 4', () => {
    let r = rangeEq(0n, 1n)
    let a = [...r]
    expect(a).toEqual([0n, 1n])
})

test('range to iter', () => {
    let r = rangeTo(5)
    let a = [...r]
    expect(a).toEqual([0, 1, 2, 3, 4])
})

test('irange to iter', () => {
    let r = rangeTo(5n)
    let a = [...r]
    expect(a).toEqual([0n, 1n, 2n, 3n, 4n])
})

test('range to iter 2', () => {
    let r = rangeTo(-5)
    let a = [...r]
    expect(a).toEqual([0, -1, -2, -3, -4])
})

test('irange to iter 2', () => {
    let r = rangeTo(-5n)
    let a = [...r]
    expect(a).toEqual([0n, -1n, -2n, -3n, -4n])
})

test('range from iter', () => {
    let r = rangeFrom(5)
    let i = r[Symbol.iterator]()
    expect(i.next().value).toBe(5)
    expect(i.next().value).toBe(6)
    expect(i.next().value).toBe(7)
})

test('irange from iter', () => {
    let r = rangeFrom(5n)
    let i = r[Symbol.iterator]()
    expect(i.next().value).toBe(5n)
    expect(i.next().value).toBe(6n)
    expect(i.next().value).toBe(7n)
})

test('range to eq iter', () => {
    let r = rangeToEq(5)
    let a = [...r]
    expect(a).toEqual([0, 1, 2, 3, 4, 5])
})

test('irange to eq iter', () => {
    let r = rangeToEq(5n)
    let a = [...r]
    expect(a).toEqual([0n, 1n, 2n, 3n, 4n, 5n])
})

test('range to eq iter 2', () => {
    let r = rangeToEq(-5)
    let a = [...r]
    expect(a).toEqual([0, -1, -2, -3, -4, -5])
})

test('irange to eq iter 2', () => {
    let r = rangeToEq(-5n)
    let a = [...r]
    expect(a).toEqual([0n, -1n, -2n, -3n, -4n, -5n])
})

import { range } from "./range"
import { Span } from "./slice"

test('span', () => {
    const s = Span.from([1, 2, 3])
    expect(s.get(0)).toBe(1)
    expect(s.get(1)).toBe(2)
    expect(s.get(2)).toBe(3)
    expect(s.get(3)).toBeUndefined()
    expect(s.get(-1)).toBeUndefined()
    expect(s.length).toBe(3)
})

test('span 1', () => {
    const s = Span.from([1, 2, 3, 4, 5], range(0, 3))
    expect(s.get(0)).toBe(1)
    expect(s.get(1)).toBe(2)
    expect(s.get(2)).toBe(3)
    expect(s.get(3)).toBeUndefined()
    expect(s.get(-1)).toBeUndefined()
    expect(s.length).toBe(3)
})

test('span 2', () => {
    const s = Span.from([1, 2, 3, 4, 5], range(2, 5))
    expect(s.get(0)).toBe(3)
    expect(s.get(1)).toBe(4)
    expect(s.get(2)).toBe(5)
    expect(s.get(3)).toBeUndefined()
    expect(s.get(-1)).toBeUndefined()
    expect(s.length).toBe(3)
})

test('span span', () => {
    const s1 = Span.from([1, 2, 3])
    const s = Span.from(s1)
    expect(s.get(0)).toBe(1)
    expect(s.get(1)).toBe(2)
    expect(s.get(2)).toBe(3)
    expect(s.get(3)).toBeUndefined()
    expect(s.get(-1)).toBeUndefined()
    expect(s.length).toBe(3)
})

test('span span 1', () => {
    const s1 = Span.from([1, 2, 3, 4, 5])
    const s = Span.from(s1, range(0, 3))
    expect(s.get(0)).toBe(1)
    expect(s.get(1)).toBe(2)
    expect(s.get(2)).toBe(3)
    expect(s.get(3)).toBeUndefined()
    expect(s.get(-1)).toBeUndefined()
    expect(s.length).toBe(3)
})

test('span span 2', () => {
    const s1 = Span.from([1, 2, 3, 4, 5])
    const s = Span.from(s1, range(2, 5))
    expect(s.get(0)).toBe(3)
    expect(s.get(1)).toBe(4)
    expect(s.get(2)).toBe(5)
    expect(s.get(3)).toBeUndefined()
    expect(s.get(-1)).toBeUndefined()
    expect(s.length).toBe(3)
})

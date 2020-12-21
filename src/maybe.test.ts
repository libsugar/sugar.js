import { box } from "./box"
import { isNone, isSome, Maybe } from "./maybe"
import { err, ok } from "./result"

test('isSome', () => {
    expect(isSome(1)).toBeTruthy()
    expect(isSome(null)).toBeFalsy()
    expect(isSome(void 0)).toBeFalsy()
})

test('isNone', () => {
    expect(isNone(1)).toBeFalsy()
    expect(isNone(null)).toBeTruthy()
    expect(isNone(void 0)).toBeTruthy()
})

test('map', () => {
    expect(Maybe.map(1, v => v + 1)).toBe(2)
    expect(Maybe.map<number, number>(null, v => v + 1)).toBeUndefined()
})

test('mapOr', () => {
    expect(Maybe.mapOr(1, 3, v => v + 1)).toBe(2)
    expect(Maybe.mapOr(null, 3, (v: number) => v + 1)).toBe(3)
})

test('okOr', () => {
    expect(Maybe.okOr(1, 2)).toEqual(ok(1))
    expect(Maybe.okOr(null, 2)).toEqual(err(2))
})

test('and', () => {
    expect(Maybe.and(1, 2)).toBe(2)
    expect(Maybe.and(null, 1)).toBeUndefined()
})

test('then', () => {
    expect(Maybe.then(1, v => v + 1)).toBe(2)
    expect(Maybe.then<number, number>(null, v => v + 1)).toBeUndefined()
})

test('or', () => {
    expect(Maybe.or(1, 2)).toBe(1)
    expect(Maybe.or(null, 1)).toBe(1)
})

test('xor', () => {
    expect(Maybe.xor(1, 2)).toBeUndefined()
    expect(Maybe.xor(1, null)).toBe(1)
    expect(Maybe.xor(null, 1)).toBe(1)
    expect(Maybe.xor(null, null)).toBeUndefined()
})

test('transpose', () => {
    expect(Maybe.transpose(ok(1))).toEqual(ok(1))
    expect(Maybe.transpose(null)).toEqual(ok(void 0))
})

test('take', () => {
    const v = box(1)
    expect(v).toEqual(box(1))
    expect(Maybe.take(v)).toBe(1)
    expect(v).toEqual(box(void 0))
    expect(Maybe.take(v)).toBeUndefined()
})

test('replace', () => {
    const v = box(1)
    expect(v).toEqual(box(1))
    expect(Maybe.replace(v, 2)).toBe(1)
    expect(v).toEqual(box(2))
})

test('zip', () => {
    expect(Maybe.zip(1, 2, 3)).toEqual([1, 2, 3])
    expect(Maybe.zip(1, null, 3)).toBeUndefined()
})

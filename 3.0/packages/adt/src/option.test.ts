import { none, Option, some } from './option'
import { err, ok } from './result'

test('isSome', () => {
    expect(Option.isSome(some(1))).toBeTruthy()
    expect(Option.isSome(some(null))).toBeTruthy()
    expect(Option.isSome(some(void 0))).toBeTruthy()
    expect(Option.isSome(none())).toBeFalsy()
})

test('isNone', () => {
    expect(Option.isNone(some(1))).toBeFalsy()
    expect(Option.isNone(some(null))).toBeFalsy()
    expect(Option.isNone(some(void 0))).toBeFalsy()
    expect(Option.isNone(none())).toBeTruthy()
})

test('map', () => {
    expect(Option.map(some(1), v => v + 1)).toEqual(some(2))
    expect(Option.map(none<number>(), v => v + 1)).toEqual(none())
})

test('mapOr', () => {
    expect(Option.mapOr(some(1), 3, v => v + 1)).toEqual(some(2))
    expect(Option.mapOr(none<number>(), 3, (v: number) => v + 1)).toEqual(some(3))
})

test('okOr', () => {
    expect(Option.okOr(some(1), 2)).toEqual(ok(1))
    expect(Option.okOr(none(), 2)).toEqual(err(2))
})

test('and', () => {
    expect(Option.and(some(1), some(2))).toEqual(some(2))
    expect(Option.and(none(), some(1))).toEqual(none())
})

test('then', () => {
    expect(Option.then(some(1), v => some(v + 1))).toEqual(some(2))
    expect(Option.then(none<number>(), v => some(v + 1))).toEqual(none())
})

test('or', () => {
    expect(Option.or(some(1), some(2))).toEqual(some(1))
    expect(Option.or(none(), some(1))).toEqual(some(1))
})

test('xor', () => {
    expect(Option.xor(some(1), some(2))).toEqual(none())
    expect(Option.xor(some(1), none())).toEqual(some(1))
    expect(Option.xor(none(), some(1))).toEqual(some(1))
    expect(Option.xor(none(), none())).toEqual(none())
})

test('transpose', () => {
    expect(Option.transpose(some(ok(1)))).toEqual(ok(some(1)))
    expect(Option.transpose(none())).toEqual(ok(none()))
})

test('take', () => {
    const v = some(1)
    expect(Option.take(v)).toEqual(some(1))
    expect(v).toEqual(none())
    expect(Option.take(v)).toEqual(none())
})

test('fill', () => {
    const v = some(1)
    const s = some(2)
    Option.fill(v, s)
    expect(v).toEqual(some(2))
    expect(s).toEqual(none())
})

test('fill2', () => {
    const v = none()
    const s = some(2)
    Option.fill(v, s)
    expect(v).toEqual(some(2))
    expect(s).toEqual(none())
})

test('fill3', () => {
    const v = some(1)
    const s = none()
    Option.fill(v, s)
    expect(v).toEqual(some(1))
    expect(s).toEqual(none())
})

test('set', () => {
    const v = some(1)
    expect(Option.set(v, 2)).toEqual(some(1))
    expect(v).toEqual(some(2))
})

test('set2', () => {
    const v = none()
    expect(Option.set(v, 2)).toEqual(none())
    expect(v).toEqual(some(2))
})

test('replace', () => {
    const v = some(1)
    const s = some(2)
    expect(Option.replace(v, s)).toEqual(some(1))
    expect(v).toEqual(some(2))
    expect(s).toEqual(none())
})

test('replace2', () => {
    const v = none()
    const s = some(2)
    expect(Option.replace(v, s)).toEqual(none())
    expect(v).toEqual(some(2))
    expect(s).toEqual(none())
})

test('replace3', () => {
    const v = some(1)
    const s = none()
    expect(Option.replace(v, s)).toEqual(some(1))
    expect(v).toEqual(some(1))
    expect(s).toEqual(none())
})

test('swap', () => {
    const a = some(1)
    const b = some(2)
    Option.swap(a, b)
    expect(a).toEqual(some(2))
    expect(b).toEqual(some(1))
})

test('swap2', () => {
    const a = none()
    const b = some(2)
    Option.swap(a, b)
    expect(a).toEqual(some(2))
    expect(b).toEqual(none())
})

test('swap3', () => {
    const a = some(1)
    const b = none()
    Option.swap(a, b)
    expect(a).toEqual(none())
    expect(b).toEqual(some(1))
})

test('zip', () => {
    expect(Option.zip(some(1), some(2), some(3))).toEqual(some([1, 2, 3]))
    expect(Option.zip(some(1), none(), some(3))).toEqual(none())
})

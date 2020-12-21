import { Option } from './option'

test('option', () => {
    expect(Option.some(1).val).toBe(1)
    expect(Option.none().val).toBeUndefined()
    expect(Option.some(1).has).toBeTruthy()
    expect(Option.none().has).toBeFalsy()
})

test('map', () => {
    expect(Option.some(1).map(v => v + 1).val).toBe(2)
    expect(Option.none<number>().map(v => v + 1).val).toBeUndefined()
})

test('then', () => {
    expect(Option.some(1).then(v => Option.some(v + 1)).val).toBe(2)
    expect(Option.none<number>().then(v => Option.some(v + 1)).val).toBeUndefined()
    expect(Option.some(1).then(() => Option.none()).val).toBeUndefined()
})

test('or', () => {
    expect(Option.some(1).or(Option.some(2)).val).toBe(1)
    expect(Option.none().or(Option.some(2)).val).toBe(2)
    expect(Option.some(1).or(Option.none()).val).toBe(1)
    expect(Option.none().or(Option.none()).val).toBeUndefined()
})

test('xor', () => {
    expect(Option.some(1).xor(Option.some(2)).val).toBeUndefined()
    expect(Option.none().xor(Option.some(2)).val).toBe(2)
    expect(Option.some(1).xor(Option.none()).val).toBe(1)
    expect(Option.none().xor(Option.none()).val).toBeUndefined()
})

test('and', () => {
    expect(Option.some(1).and(Option.some(2)).val).toBe(2)
    expect(Option.none().and(Option.some(2)).val).toBeUndefined()
    expect(Option.some(1).and(Option.none()).val).toBeUndefined()
    expect(Option.none().and(Option.none()).val).toBeUndefined()
})

test('take', () => {
    let v = Option.some(1)
    expect(v.has).toBeTruthy()
    expect(v.take().val).toBe(1)
    expect(v.has).toBeFalsy()
    expect(v.take().val).toBeUndefined()
})
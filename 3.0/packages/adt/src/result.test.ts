import { err, ok, Result } from './result'

test('ok', () => {
    expect(ok(1)).toEqual({ res: 1 })
})

test('err', () => {
    expect(err(1)).toEqual({ err: 1 })
})

test('isOk', () => {
    expect(Result.isOk(ok(1))).toBeTruthy()
    expect(Result.isOk(err(1))).toBeFalsy()
})

test('isErr', () => {
    expect(Result.isErr(ok(1))).toBeFalsy()
    expect(Result.isErr(err(1))).toBeTruthy()
})

test('isResult', () => {
    expect(Result.isResult(ok(1))).toBeTruthy()
    expect(Result.isResult(err(1))).toBeTruthy()
})

test('getOk', () => {
    expect(Result.getOk(ok(1))).toBe(1)
    expect(Result.getOk(err(1))).toBeUndefined()
})

test('getErr', () => {
    expect(Result.getErr(ok(1))).toBeUndefined()
    expect(Result.getErr(err(1))).toBe(1)
})

test('mapOk', () => {
    expect(Result.mapOk(ok(1), v => v + 1)).toEqual(ok(2))
    expect(Result.mapOk(err(1), (v: number) => v + 1)).toEqual(err(1))
})

test('mapErr', () => {
    expect(Result.mapErr(ok(1), (v: number) => v + 1)).toEqual(ok(1))
    expect(Result.mapErr(err(1), v => v + 1)).toEqual(err(2))
})

test('and', () => {
    expect(Result.and(ok(1), ok(2))).toEqual(ok(2))
    expect(Result.and(ok(1), err(2))).toEqual(err(2))
    expect(Result.and(err(1), ok(2))).toEqual(err(1))
    expect(Result.and(err(1), err(2))).toEqual(err(1))
})

test('or', () => {
    expect(Result.or(ok(1), ok(2))).toEqual(ok(1))
    expect(Result.or(ok(1), err(2))).toEqual(ok(1))
    expect(Result.or(err(1), ok(2))).toEqual(ok(2))
    expect(Result.or(err(1), err(2))).toEqual(err(2))
})

test('transpose', () => {
    expect(Result.transpose(ok(1))).toEqual(ok(1))
    expect(Result.transpose(ok(null))).toBeUndefined()
})

test('flatten', () => {
    expect(Result.flatten(ok(ok(ok(1))))).toEqual(ok(1))
    expect(Result.flatten(ok(ok(err(1))))).toEqual(err(1))
    expect(Result.flatten(ok(1))).toEqual(ok(1))
    expect(Result.flatten(err(1))).toEqual(err(1))
    expect(Result.flatten(err(ok(ok(1))))).toEqual(err(ok(ok(1))))
    expect(Result.flatten(ok(err(ok(1))))).toEqual(err(ok(1)))
})

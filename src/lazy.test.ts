import { lazy } from './lazy'

test('lazy', () => {
    const v = lazy(() => 1)
    expect(v.got()).toBeFalsy()
    expect(v.get()).toBe(1)
    expect(v.got()).toBeTruthy()
})

test('reget', () => {
    let i = 1
    const v = lazy(() => i++)
    expect(v.get()).toBe(1)
    expect(v.reget()).toBe(2)
    expect(v.reget()).toBe(3)
})

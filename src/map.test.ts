import { MutMapEx } from './map'

test('getOrDefault', () => {
    let map = MutMapEx(new Map)
    expect(map.getOrDefault(1, 2)).toBe(2)
    map.set(1, 3)
    expect(map.getOrDefault(1, 2)).toBe(3)
})

test('tryGet', () => {
    let map = MutMapEx(new Map)
    expect(map.tryGet(1).has).toBeFalsy()
    map.set(1, 3)
    expect(map.tryGet(1).val).toBe(3)
})

test('getOrAdd', () => {
    let map = MutMapEx(new Map)
    expect(map.get(1)).toBeUndefined()
    expect(map.getOrAdd(1, () => 2)).toBe(2)
    expect(map.get(1)).toBe(2)
})

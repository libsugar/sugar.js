import { flu, Flu } from './flu'
import { Option } from './option'

test('flu1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5])
        .map(v => v * 2)
        .take(3)
        .collect()
    expect(r).toEqual([2, 4, 6])
})


test('flu count1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).count()
    expect(r).toBe(5)
})

test('flu count2', async () => {
    const r = await flu(Flu.from([1, 2, 3, 4, 5])).count()
    expect(r).toBe(5)
})

test('flu isEmpty1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).isEmpty()
    expect(r).toBe(false)
})

test('flu isEmpty2', async () => {
    const r = await Flu.from([]).isEmpty()
    expect(r).toBe(true)
})

test('flu isEmpty3', async () => {
    const r = await flu(Flu.from([1, 2, 3, 4, 5])).isEmpty()
    expect(r).toBe(false)
})

test('flu isEmpty4', async () => {
    const r = await flu(Flu.from([])).isEmpty()
    expect(r).toBe(true)
})

test('flu first', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).first()
    expect(r).toBe(1)
})

test('flu last', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).last()
    expect(r).toBe(5)
})

test('flu nth', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).nth(2)
    expect(r).toBe(3)
})

test('flu stepBy', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).stepBy(2).collect()
    expect(r).toEqual([1, 3, 5, 7, 9])
    const r2 = await Flu.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).stepBy(2).collect()
    expect(r2).toEqual([0, 2, 4, 6, 8])
})

test('flu chain', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).chain(Flu.from([6, 7, 8, 9, 10])).collect()
    expect(r).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('flu zip', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).zip(Flu.from(['a', 'b', 'c', 'd', 'e'])).collect()
    expect(r).toEqual([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e']])
})

test('flu unzip', async () => {
    const r = await Flu.from([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e']]).unzip()
    expect(r).toEqual([[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']])
})

test('flu map', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).map(v => v * 2).collect()
    expect(r).toEqual([2, 4, 6, 8, 10])
})

test('flu fill', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).fill(0).collect()
    expect(r).toEqual([0, 0, 0, 0, 0])
})

test('flu forEach', async () => {
    await Flu.from([1, 1, 1]).forEach(v => expect(v).toBe(1))
})

test('flu filter', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).filter(v => v > 2).collect()
    expect(r).toEqual([3, 4, 5])
})

test('flu enumerate', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).enumerate().collect()
    expect(r).toEqual([[1, 0], [2, 1], [3, 2], [4, 3], [5, 4]])
})

test('flu skip', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).skip(2).collect()
    expect(r).toEqual([3, 4, 5])
})

test('flu take', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).take(3).collect()
    expect(r).toEqual([1, 2, 3])
})

test('flu slice', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).slice(2, 3).collect()
    expect(r).toEqual([3])
})

test('flu sub', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).sub(2, 3).collect()
    expect(r).toEqual([3, 4, 5])
})

test('flu scan', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).scan(10, a => a + 1).collect()
    expect(r).toEqual([11, 12, 13, 14, 15])
})

test('flu flatMap', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).flatMap(a => Flu.from([a, a + 1])).collect()
    expect(r).toEqual([1, 2, 2, 3, 3, 4, 4, 5, 5, 6])
})

test('flu flatten', async () => {
    const r = await Flu.from([[1], [2, 3], [4, 5, 6]]).flatten().collect()
    expect(r).toEqual([1, 2, 3, 4, 5, 6])
})

test('flu also', async () => {
    const arr: number[] = []
    await Flu.from([1, 2, 3, 4, 5]).also(a => arr.push(a)).run()
    expect(arr).toEqual([1, 2, 3, 4, 5])
})

test('flu fold1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).fold(0, (a, v) => a + v)
    expect(r).toBe(15)
})

test('flu fold2', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).fold(1, (a, v) => a + v)
    expect(r).toBe(16)
})

test('flu reduce', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).reduce((a, v) => a + v)
    expect(r).toBe(15)
})

test('flu all1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).all(a => a > 3)
    expect(r).toBe(false)
})

test('flu all2', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).all(a => a > 0)
    expect(r).toBe(true)
})

test('flu any1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).any(a => a > 3)
    expect(r).toBe(true)
})

test('flu any2', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).any(a => a > 5)
    expect(r).toBe(false)
})

test('flu find1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).find(a => a > 1)
    expect(r).toBe(2)
})

test('flu find2', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).find(a => a > 5)
    expect(r).toBe(void 0)
})

test('flu findO1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).findO(a => a > 1)
    expect(r).toEqual(Option.some(2))
})

test('flu findO2', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).findO(a => a > 5)
    expect(r).toEqual(Option.none())
})

test('flu position1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).position(a => a > 1)
    expect(r).toBe(1)
})

test('flu position2', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).position(a => a > 5)
    expect(r).toBe(-1)
})

test('flu indexOf1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).indexOf(2)
    expect(r).toBe(1)
})

test('flu indexOf2', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).indexOf(0)
    expect(r).toBe(-1)
})

test('flu max', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).max()
    expect(r).toBe(5)
})

test('flu min', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5]).min()
    expect(r).toBe(1)
})

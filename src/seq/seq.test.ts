import { seq } from '.'
import { Option } from '../option'

test('seq1', () => {
    const r = seq([1, 2, 3, 4, 5])
        .map(v => v * 2)
        .take(3)
        .collect()
    expect(r).toEqual([2, 4, 6])
})

test('seq count1', () => {
    const r = seq([1, 2, 3, 4, 5]).count()
    expect(r).toBe(5)
})

test('seq count2', () => {
    const r = seq(seq([1, 2, 3, 4, 5])).count()
    expect(r).toBe(5)
})

test('seq isEmpty1', () => {
    const r = seq([1, 2, 3, 4, 5]).isEmpty()
    expect(r).toBe(false)
})

test('seq isEmpty2', () => {
    const r = seq([]).isEmpty()
    expect(r).toBe(true)
})

test('seq isEmpty3', () => {
    const r = seq(seq([1, 2, 3, 4, 5])).isEmpty()
    expect(r).toBe(false)
})

test('seq isEmpty4', () => {
    const r = seq(seq([])).isEmpty()
    expect(r).toBe(true)
})

test('seq first', () => {
    const r = seq([1, 2, 3, 4, 5]).first()
    expect(r).toBe(1)
})

test('seq last', () => {
    const r = seq([1, 2, 3, 4, 5]).last()
    expect(r).toBe(5)
})

test('seq nth', () => {
    const r = seq([1, 2, 3, 4, 5]).nth(2)
    expect(r).toBe(3)
})

test('seq stepBy', () => {
    const r = seq([1, 2, 3, 4, 5, 6, 7, 8, 9]).stepBy(2).collect()
    expect(r).toEqual([1, 3, 5, 7, 9])
    const r2 = seq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).stepBy(2).collect()
    expect(r2).toEqual([0, 2, 4, 6, 8])
})

test('seq chain', () => {
    const r = seq([1, 2, 3, 4, 5]).chain([6, 7, 8, 9, 10]).collect()
    expect(r).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('seq zip', () => {
    const r = seq([1, 2, 3, 4, 5]).zip(['a', 'b', 'c', 'd', 'e']).collect()
    expect(r).toEqual([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e']])
})

test('seq unzip', () => {
    const r = seq([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e']]).unzip()
    expect(r).toEqual([[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']])
})

test('seq map', () => {
    const r = seq([1, 2, 3, 4, 5]).map(v => v * 2).collect()
    expect(r).toEqual([2, 4, 6, 8, 10])
})

test('seq fill', () => {
    const r = seq([1, 2, 3, 4, 5]).fill(0).collect()
    expect(r).toEqual([0, 0, 0, 0, 0])
})

test('seq forEach', () => {
    seq([1, 1, 1]).forEach(v => expect(v).toBe(1))
})

test('seq filter', () => {
    const r = seq([1, 2, 3, 4, 5]).filter(v => v > 2).collect()
    expect(r).toEqual([3, 4, 5])
})

test('seq enumerate', () => {
    const r = seq([1, 2, 3, 4, 5]).enumerate().collect()
    expect(r).toEqual([[1, 0], [2, 1], [3, 2], [4, 3], [5, 4]])
})

test('seq skip', () => {
    const r = seq([1, 2, 3, 4, 5]).skip(2).collect()
    expect(r).toEqual([3, 4, 5])
})

test('seq take', () => {
    const r = seq([1, 2, 3, 4, 5]).take(3).collect()
    expect(r).toEqual([1, 2, 3])
})

test('seq slice', () => {
    const r = seq([1, 2, 3, 4, 5]).slice(2, 3).collect()
    expect(r).toEqual([3])
})

test('seq sub', () => {
    const r = seq([1, 2, 3, 4, 5]).sub(2, 3).collect()
    expect(r).toEqual([3, 4, 5])
})

test('seq scan', () => {
    const r = seq([1, 2, 3, 4, 5]).scan(10, a => a + 1).collect()
    expect(r).toEqual([11, 12, 13, 14, 15])
})

test('seq flatMap', () => {
    const r = seq([1, 2, 3, 4, 5]).flatMap(a => [a, a + 1]).collect()
    expect(r).toEqual([1, 2, 2, 3, 3, 4, 4, 5, 5, 6])
})

test('seq flatten', () => {
    const r = seq([[1], [2, 3], [4, 5, 6]]).flatten().collect()
    expect(r).toEqual([1, 2, 3, 4, 5, 6])
})

test('seq also', () => {
    const arr: number[] = []
    seq([1, 2, 3, 4, 5]).also(a => arr.push(a)).run()
    expect(arr).toEqual([1, 2, 3, 4, 5])
})

test('seq fold1', () => {
    const r = seq([1, 2, 3, 4, 5]).fold(0, (a, v) => a + v)
    expect(r).toBe(15)
})

test('seq fold2', () => {
    const r = seq([1, 2, 3, 4, 5]).fold(1, (a, v) => a + v)
    expect(r).toBe(16)
})

test('seq reduce', () => {
    const r = seq([1, 2, 3, 4, 5]).reduce((a, v) => a + v)
    expect(r).toBe(15)
})

test('seq all1', () => {
    const r = seq([1, 2, 3, 4, 5]).all(a => a > 3)
    expect(r).toBe(false)
})

test('seq all2', () => {
    const r = seq([1, 2, 3, 4, 5]).all(a => a > 0)
    expect(r).toBe(true)
})

test('seq any1', () => {
    const r = seq([1, 2, 3, 4, 5]).any(a => a > 3)
    expect(r).toBe(true)
})

test('seq any2', () => {
    const r = seq([1, 2, 3, 4, 5]).any(a => a > 5)
    expect(r).toBe(false)
})

test('seq find1', () => {
    const r = seq([1, 2, 3, 4, 5]).find(a => a > 1)
    expect(r).toBe(2)
})

test('seq find2', () => {
    const r = seq([1, 2, 3, 4, 5]).find(a => a > 5)
    expect(r).toBe(void 0)
})

test('seq findO1', () => {
    const r = seq([1, 2, 3, 4, 5]).findO(a => a > 1)
    expect(r).toEqual(Option.some(2))
})

test('seq findO2', () => {
    const r = seq([1, 2, 3, 4, 5]).findO(a => a > 5)
    expect(r).toEqual(Option.none())
})

test('seq position1', () => {
    const r = seq([1, 2, 3, 4, 5]).position(a => a > 1)
    expect(r).toBe(1)
})

test('seq position2', () => {
    const r = seq([1, 2, 3, 4, 5]).position(a => a > 5)
    expect(r).toBe(-1)
})

test('seq indexOf1', () => {
    const r = seq([1, 2, 3, 4, 5]).indexOf(2)
    expect(r).toBe(1)
})

test('seq indexOf2', () => {
    const r = seq([1, 2, 3, 4, 5]).indexOf(0)
    expect(r).toBe(-1)
})

test('seq max', () => {
    const r = seq([1, 2, 3, 4, 5]).max()
    expect(r).toBe(5)
})

test('seq min', () => {
    const r = seq([1, 2, 3, 4, 5]).min()
    expect(r).toBe(1)
})

test('seq maxO', () => {
    const r = seq([1, 2, 3, 4, 5]).maxO()
    expect(r).toEqual(Option.some(5))
})

test('seq minO', () => {
    const r = seq([1, 2, 3, 4, 5]).minO()
    expect(r).toEqual(Option.some(1))
})

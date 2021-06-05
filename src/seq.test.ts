import { seq } from './seq'

test('seq1', () => {
    const r = seq([1, 2, 3, 4, 5])
        .map(v => v * 2)
        .take(3)
        .collect()
   expect(r).toEqual([2, 4, 6])
})


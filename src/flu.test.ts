import { Flu } from './flu'

test('flu1', async () => {
    const r = await Flu.from([1, 2, 3, 4, 5])
        .map(v => v * 2)
        .take(3)
        .collect()
    expect(r).toEqual([2, 4, 6])
})

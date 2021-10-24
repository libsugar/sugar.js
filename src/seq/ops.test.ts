import { groupBy, product, relate } from './ops'

test('product', () => {
    expect([...product([1, 2, 3], ['a', 'b'])]).toEqual([
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
        [3, 'a'],
        [3, 'b'],
    ])
})

test('product2', () => {
    expect([...product([1, 2, 3, 4, 5], ['a', 'b', 'c'], [true, false])]).toEqual([
        [1, 'a', true],
        [1, 'a', false],
        [1, 'b', true],
        [1, 'b', false],
        [1, 'c', true],
        [1, 'c', false],
        [2, 'a', true],
        [2, 'a', false],
        [2, 'b', true],
        [2, 'b', false],
        [2, 'c', true],
        [2, 'c', false],
        [3, 'a', true],
        [3, 'a', false],
        [3, 'b', true],
        [3, 'b', false],
        [3, 'c', true],
        [3, 'c', false],
        [4, 'a', true],
        [4, 'a', false],
        [4, 'b', true],
        [4, 'b', false],
        [4, 'c', true],
        [4, 'c', false],
        [5, 'a', true],
        [5, 'a', false],
        [5, 'b', true],
        [5, 'b', false],
        [5, 'c', true],
        [5, 'c', false],
    ])
})

test('groupBy', () => {
    expect([...groupBy([1, 1, 2, 2, 2, 3], a => a)])
        .toEqual([
            [1, [1, 1]],
            [2, [2, 2, 2]],
            [3, [3]],
        ])
})

test('relate', () => {
    expect([...relate([1, 2, 3], ['1', '2', '3'], a => a, b => +b)])
        .toEqual([
            [1, '1'],
            [2, '2'],
            [3, '3'],
        ])
})

test('relate2', () => {
    expect([...relate([1, 2, -2, 3], ['1', '-1', '2', '3'], a => Math.abs(a), b => Math.abs(+b))])
        .toEqual([
            [1, '1'],
            [1, '-1'],
            [2, '2'],
            [-2, '2'],
            [3, '3'],
        ])
})

test('relate3', () => {
    expect([...relate([1, 2, 3], ['1', '2', '3'], a => a, b => -b)])
        .toEqual([])
})

test('relate4', () => {
    expect([...relate([1, 2, 3], ['1', '-2', '3'], a => a, b => -b)])
        .toEqual([
            [2, '-2']
        ])
})

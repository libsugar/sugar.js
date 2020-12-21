
import { box } from './box'
import { run, used, also } from './effect'

test('run', () => {
    const v = run(() => 1)
    expect(v).toBe(1)
})

test('used', () => {
    const v = used(1, v => v + 1)
    expect(v).toBe(2)
})

test('also', () => {
    const v = also(1, v => {
        expect(v).toBe(1)
    })
    expect(v).toBe(1)
})

test('also box', () => {
    const v = also(box(1), v => {
        v.val += 1
    })
    expect(v.val).toBe(2)
})

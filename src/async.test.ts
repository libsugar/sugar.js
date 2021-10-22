import { AsyncPool } from './async'
import { delay, microtask } from './delay'
import { rangeTo } from './range'
import { seq } from './seq'

test('AsyncPool', async () => {
    const pool = new AsyncPool(10)
    const a = microtask().then(() => {
        expect(pool.size).toStrictEqual(10)
        console.log('expect', pool.size)
    })
    await Promise.all(seq(rangeTo(30)).map(i => pool.run(async () => {
        await delay(0)
        console.log(i)
    })).collect())
    expect(pool.size).toStrictEqual(0)
    console.log('end', pool.size)
    await a
})

test('AsyncPool2', async () => {
    const pool = new AsyncPool(10)
    const a = microtask().then(() => {
        expect(pool.size).toStrictEqual(5)
        console.log('expect', pool.size)
    })
    await Promise.all(seq(rangeTo(5)).map(i => pool.run(async () => {
        await delay(0)
        console.log(i)
    })).collect())
    await a
    expect(pool.size).toStrictEqual(0)
    console.log('end', pool.size)
})

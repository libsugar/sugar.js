import { microtask } from './delay'
import { raise } from './fn'
import { Task } from './task'

test('task', () => {
    return Task.delay(0)
})

test('task cancel', async () => {
    const task = Task.delay(1000)
    task.then(() => raise('never'))
    const res = Promise.race([task, task.reg()])
    task.cancel()
    await expect(res).resolves.toBeUndefined()
})

test('task not cancel', async () => {
    const task = Task.delay(100)
    await expect(task.then(() => raise('never'))).rejects.toBe('never')
})

test('nest task cancel', async () => {
    const task = new Task(async self => {
        return Task.run(self, async self => {
            await Task.delay(self, 1000)
            return raise('never')
        })
    })
    const res = Promise.race([task, task.reg()])
    task.cancel()
    await expect(res).resolves.toBeUndefined()
})

test('nest task not cancel', async () => {
    const task = new Task(async self => {
        return Task.run(self, async self => {
            await Task.delay(self, 100)
            return raise('never')
        })
    })
    await expect(task).rejects.toBe('never')
})

test('task guard', async () => {
    const task = new Task(async self => {
        while (true) {
            self.guard()
            await microtask()
        }
    })
    const res = Promise.race([task, task.reg()])
    task.cancel()
    await expect(res).resolves.toBeUndefined()
})

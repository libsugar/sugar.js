import { Box } from "./box"
import { count, map } from './seq'

/** Doubly Linked List */
export class Linked<T> implements Iterable<T> {
    static from<T>(iter: Iterable<T>): Linked<T> {
        const l = new Linked<T>()
        for (const item of iter) {
            l.push(item)
        }
        return l
    }
    static of<T>(...items: T[]): Linked<T> {
        return this.from(items)
    }

    head?: LinkedNode<T>
    last?: LinkedNode<T>

    get isEmpty() {
        return this.head == null || this.last == null
    }

    get onlyOne() {
        return !this.isEmpty && this.head === this.last
    }

    get size() {
        return count(this)
    }
    get length() {
        return count(this)
    }

    *[Symbol.iterator](): Iterator<T> {
        for (let node = this.head; node != null; node = node.next) {
            yield node.val
        }
    }

    *nodes(): Iterable<LinkedNode<T>> {
        for (let node = this.head; node != null; node = node.next) {
            yield node
        }
    }

    clear() {
        this.head = this.last = void 0
    }

    push(val: T): void
    push(val: T, ...vals: T[]): void
    push(...vals: T[]) {
        return this.pushNode(...map(vals, val => new LinkedNode(val)))
    }
    pushNode(...nodes: LinkedNode<T>[]) {
        if (nodes.length === 0) return
        if (nodes.length > 1) for (const node of nodes) this.pushNode(node)
        else {
            const node = nodes[0]
            if (this.isEmpty) {
                this.last = this.head = node
                node.prev = node.next = void 0
            } else {
                node.next = void 0
                node.prev = this.last
                this.last = this.last!.next = node
            }
        }
    }

    unshift(val: T): void
    unshift(val: T, ...vals: T[]): void
    unshift(...vals: T[]) {
        return this.unshiftNode(...map(vals, val => new LinkedNode(val)))
    }
    unshiftNode(...nodes: LinkedNode<T>[]) {
        if (nodes.length === 0) return
        if (nodes.length > 1) for (const node of nodes) this.unshiftNode(node)
        else {
            const node = nodes[0]
            if (this.isEmpty) {
                this.last = this.head = node
                node.prev = node.next = void 0
            } else {
                node.prev = void 0
                node.next = this.head
                this.head = this.head!.prev = node
            }
        }
    }

    pop(): T | undefined {
        return this.popNode()?.val
    }
    popNode(): LinkedNode<T> | undefined {
        if (this.isEmpty == null) return void 0
        const n = this.last!
        if (this.onlyOne) this.head = this.last = void 0
        else {
            this.last = n.prev
            this.last!.next = void 0
        }
        n.prev = n.next = void 0
        return n
    }

    shift(): T | undefined {
        return this.shiftNode()?.val
    }
    shiftNode(): LinkedNode<T> | undefined {
        if (this.isEmpty == null) return void 0
        const n = this.head!
        if (this.onlyOne) this.head = this.last = void 0
        else {
            this.head = n.next
            this.last!.prev = void 0
        }
        n.prev = n.next = void 0
        return n
    }

    addAfter(target: LinkedNode<T>, val: T) {
        return this.addAfterNode(target, new LinkedNode(val))
    }
    addAfterNode(target: LinkedNode<T>, node: LinkedNode<T>) {
        if (target === this.last) return this.pushNode(node)
        node.prev = target
        node.next = target.next
        target.next = node
    }

    addBefore(target: LinkedNode<T>, val: T) {
        return this.addBeforeNode(target, new LinkedNode(val))
    }
    addBeforeNode(target: LinkedNode<T>, node: LinkedNode<T>) {
        if (target === this.head) return this.unshiftNode(node)
        node.next = target
        node.prev = target.prev
        target.prev = node
    }

    remove(target: LinkedNode<T>) {
        if (this.isEmpty) return
        if (target === this.head) return this.shiftNode()
        if (target === this.last) return this.popNode()
        const prev = target.prev!
        const next = target.next!
        prev.next = next
        next.prev = prev
        target.prev = target.next = void 0
    }
}

export class LinkedNode<T> implements Box<T> {
    constructor(public val: T, public prev?: LinkedNode<T>, public next?: LinkedNode<T>) { }
}

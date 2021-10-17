import { Box } from "./box"
import { also } from "./effect"
import { count, map, skip } from './seq'

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
        return count(this.nodes())
    }
    get length() {
        return count(this.nodes())
    }

    *[Symbol.iterator](): Iterator<T> {
        for (let node = this.head; node != null; node = node.next) {
            yield node.val
        }
    }

    *backItems(): Iterable<T> {
        for (let node = this.last; node != null; node = node.prev) {
            yield node.val
        }
    }

    *nodes(): Iterable<LinkedNode<T>> {
        for (let node = this.head; node != null; node = node.next) {
            yield node
        }
    }

    *backNodes(): Iterable<LinkedNode<T>> {
        for (let node = this.last; node != null; node = node.prev) {
            yield node
        }
    }

    clear() {
        this.head = this.last = void 0
    }

    push(val: T): LinkedNode<T>
    push(...vals: T[]): void
    push(...vals: T[]) {
        if (vals.length == 1) return also(new LinkedNode(vals[0]), n => this.pushNode(n))
        else return this.pushNode(...map(vals, val => new LinkedNode(val)))
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
    unshift(...vals: T[]): void
    unshift(...vals: T[]) {
        if (vals.length == 1) return also(new LinkedNode(vals[0]), n => this.unshiftNode(n))
        else return this.unshiftNode(...map(vals, val => new LinkedNode(val)))
    }
    unshiftNode(...nodes: LinkedNode<T>[]) {
        if (nodes.length === 0) return
        if (nodes.length > 1) {
            let target = nodes[0]
            this.unshiftNode(target)
            for (const node of skip(nodes, 1)) {
                this.addAfterNode(target, node)
                target = node
            }
        }
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
        const n = new LinkedNode(val)
        return this.addAfterNode(target, n)
    }
    addAfterNode(target: LinkedNode<T>, node: LinkedNode<T>) {
        if (target === this.last) return this.pushNode(node)
        node.prev = target
        node.next = target.next
        if (node.next != null) node.next.prev = node
        target.next = node
    }

    addBefore(target: LinkedNode<T>, val: T) {
        const n = new LinkedNode(val)
        return this.addBeforeNode(target, n)
    }
    addBeforeNode(target: LinkedNode<T>, node: LinkedNode<T>) {
        if (target === this.head) return this.unshiftNode(node)
        node.next = target
        node.prev = target.prev
        if (node.prev != null) node.prev.next = node
        target.prev = node
    }

    remove(target: LinkedNode<T>) {
        if (this.isEmpty) return
        if (target === this.head) return (this.shiftNode(), target)
        if (target === this.last) return (this.popNode(), target)
        const prev = target.prev!
        const next = target.next!
        prev.next = next
        next.prev = prev
        target.prev = target.next = void 0
        return target
    }
}

export class LinkedNode<T> implements Box<T> {
    constructor(public val: T, public prev?: LinkedNode<T>, public next?: LinkedNode<T>) { }
}

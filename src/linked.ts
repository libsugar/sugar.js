import { Box } from "./box"
import { also } from "./effect"
import { count, map, skip } from './seq'

/** Doubly Linked List */
export class Linked<T> implements Iterable<T> {
    /** Create linked list from iterator  */
    static from<T>(iter: Iterable<T>): Linked<T> {
        const l = new Linked<T>()
        for (const item of iter) {
            l.push(item)
        }
        return l
    }
    /** Create linked list from params  */
    static of<T>(...items: T[]): Linked<T> {
        return this.from(items)
    }

    /** The first node of the linked list  
     * unsafe field */
    head?: LinkedNode<T>
    /** The last node of the linked list  
    * unsafe field */
    last?: LinkedNode<T>

    /** Check if the linked list is empty  */
    get isEmpty() {
        return this.head == null || this.last == null
    }

    /** Check if there is only one item in the linked list  */
    get onlyOne() {
        return !this.isEmpty && this.head === this.last
    }

    /** Get the length of the linked list  */
    get size() {
        return count(this.nodes())
    }
    /** Get the length of the linked list  */
    get length() {
        return count(this.nodes())
    }

    /** Get an iterator to traverse the list items  */
    [Symbol.iterator](): Iterator<T> {
        return this.items()
    }

    /** Get an iterator to traverse the list items  */
    *items(): IterableIterator<T> {
        for (let node = this.head; node != null; node = node.next) {
            yield node.val
        }
    }

    /** Get an iterator that traverses the list items in reverse  */
    *backItems(): IterableIterator<T> {
        for (let node = this.last; node != null; node = node.prev) {
            yield node.val
        }
    }

    /** Get an iterator to traverse the list nodes  */
    *nodes(): IterableIterator<LinkedNode<T>> {
        for (let node = this.head; node != null; node = node.next) {
            yield node
        }
    }

    /** Get an iterator that traverses the list nodes in reverse  */
    *backNodes(): IterableIterator<LinkedNode<T>> {
        for (let node = this.last; node != null; node = node.prev) {
            yield node
        }
    }

    /** Clear list items  */
    clear() {
        this.head = this.last = void 0
    }

    /** Add an item to the end of the linked list  */
    push(val: T): LinkedNode<T>
    /** Add many items to the end of the linked list  */
    push(...vals: T[]): void
    push(...vals: T[]) {
        if (vals.length == 1) return also(new LinkedNode(vals[0]), n => this.pushNode(n))
        else return this.pushNode(...map(vals, val => new LinkedNode(val)))
    }
    /** Add many nodes to the end of the linked list  
     * unsafe method, will not verify the node  */
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

    /** Add an item to the head of the linked list  */
    unshift(val: T): void
    /** Add many items to the head of the linked list  */
    unshift(...vals: T[]): void
    unshift(...vals: T[]) {
        if (vals.length == 1) return also(new LinkedNode(vals[0]), n => this.unshiftNode(n))
        else return this.unshiftNode(...map(vals, val => new LinkedNode(val)))
    }
    /** Add many nodes to the head of the linked list  
     * unsafe method, will not verify the node  */
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

    /** Remove an item from the end of the list  */
    pop(): T | undefined {
        return this.popNode()?.val
    }
    /** Remove a node from the end of the linked list  */
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

    /** Remove an item from the head of the list  */
    shift(): T | undefined {
        return this.shiftNode()?.val
    }
    /** Remove a node from the head of the list  */
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

    /** After adding an item to a node  
     * unsafe method, will not verify the node  */
    addAfter(target: LinkedNode<T>, val: T) {
        const n = new LinkedNode(val)
        return this.addAfterNode(target, n)
    }
    /** After adding a node to a node  
     * unsafe method, will not verify the node  */
    addAfterNode(target: LinkedNode<T>, node: LinkedNode<T>) {
        if (target === this.last) return this.pushNode(node)
        node.prev = target
        node.next = target.next
        if (node.next != null) node.next.prev = node
        target.next = node
    }

    /** Before adding an item to a node  
     * unsafe method, will not verify the node  */
    addBefore(target: LinkedNode<T>, val: T) {
        const n = new LinkedNode(val)
        return this.addBeforeNode(target, n)
    }
    /** Before adding a node to a node  
     * unsafe method, will not verify the node  */
    addBeforeNode(target: LinkedNode<T>, node: LinkedNode<T>) {
        if (target === this.head) return this.unshiftNode(node)
        node.next = target
        node.prev = target.prev
        if (node.prev != null) node.prev.next = node
        target.prev = node
    }

    /** Remove a node from the linked list  
     * unsafe method, will not verify the node  */
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

/** Linked list node  */
export class LinkedNode<T> implements Box<T> {
    constructor(/** Value in node */public val: T, /** Previous node  */public prev?: LinkedNode<T>, /** Next node  */ public next?: LinkedNode<T>) { }
}

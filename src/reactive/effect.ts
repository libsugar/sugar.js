import { TEvent } from "..";
import { MutableSetLike } from "../types";

/** Passive observer  */
export interface Sculk {
    /** Wake up the Sculk */
    wake(): void
}

/** Tracer */
export interface Tracer {
    /** The objects that uses this object  */
    users: MutableSetLike<Sculk> & Iterable<Sculk>

    /** Trace this object */
    trace(o: Sculk): void

    /** Stop trace this object  */
    forget(o: Sculk): void
}

export const Tracer = Symbol('Trace')

/** Traceable  */
export interface Traceable {
    [Tracer](): Tracer
}

/** Tracer impl */
export class SculkTracer implements Tracer, Sculk {
    users = new Set<Sculk>()

    trace(o: Sculk): void {
        this.users.add(o)
    }

    forget(o: Sculk): void {
        this.users.delete(o)
    }

    traceInCurrentScope() {
        traceInCurrentScope(this)
    }

    wake() {
        for (const user of this.users) {
            try {
                user.wake()
            } catch (e) {
                Promise.reject(e)
            }
        }
    }
}

/** Effect Scope */
export interface Scope extends Sculk {
    /** using Tracer */
    using(tracer: Tracer): void
}

/** Scope linked list */
type ScopeList = { scope: Scope, next: ScopeList } | null

let scopeStack: ScopeList = null

export function traceInCurrentScope(obj: Traceable): void
export function traceInCurrentScope(obj: Tracer): void
export function traceInCurrentScope(obj: Tracer | Traceable) {
    if (scopeStack == null) return
    traceInScope(obj as any, scopeStack.scope)
}

export function traceInScope(obj: Traceable, scope: Scope): void
export function traceInScope(obj: Tracer, scope: Scope): void
export function traceInScope(obj: Tracer | Traceable, scope: Scope) {
    const tracer: Tracer = Tracer in obj ? (obj as Traceable)[Tracer]() : obj as Tracer
    tracer.trace(scope)
    scope.using(tracer)
}

export function runInScope(scope: Scope, f: () => void) {
    scopeStack = { scope, next: scopeStack }
    try {
        f()
    } finally {
        scopeStack = scopeStack.next
    }
}

/** Simple Scope */
export class SimpleScope implements Scope {
    onWake = new TEvent
    tracers = new Set<Tracer>()
    using(tracer: Tracer): void {
        this.tracers.add(tracer)
    }
    wake(): void {
        this.onWake.emit()
    }
}

export function makeScope(f: () => void) {
    const scope = new SimpleScope
    runInScope(scope, f)
    return scope
}

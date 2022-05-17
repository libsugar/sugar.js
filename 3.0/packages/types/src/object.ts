import { UnionToIntersection } from './union'

/**
 * ```ts
 * TakeObjectKey<{ a: 1 }, 1> => 'a'
 * ```
 * ```ts
 * enum Foo { A, B, C }
 * TakeObjectKey<typeof Foo, Foo.B> => 'B'
 * ```
 */
export type TakeObjectKey<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T]

/**
 * ```ts
 * Literal<{ a: 1 } & { b: 2 }> => { a: 1, b: 2 }
 * ```
 */
export type Literal<T> = T extends object ? { [K in keyof T]: T[K] } : T

/** Take key exclude some value
 *
 * ```ts
 * KeyofExcludeValue<{ a: 1, b: 2, c: 3 }, 2 | 3> => 'a'
 * ```
 */
export type KeyofExcludeValue<T, V extends T[keyof T]> = { [K in keyof T]: T[K] extends V ? never : K }[keyof T]

/** Take key extract some value
 *
 * ```ts
 * KeyofExtractValue<{ a: 1, b: 2, c: 3 }, 2 | 3> => 'b' | 'c'
 * ```
 */
export type KeyofExtractValue<T, V extends T[keyof T]> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T]

/** Pick object by value
 *
 * ```ts
 * PickValue<{ a: 1, b: 2, c: 3 }, 2 | 3> => { b: 2, c: 3 }
 * ```
 */
export type PickValue<T, V extends T[keyof T]> = Pick<T, KeyofExtractValue<T, V>>

/** Omit object by value
 *
 * ```ts
 * OmitValue<{ a: 1, b: 2, c: 3 }, 2 | 3> => { a: 1 }
 * ```
 */
export type OmitValue<T, V extends T[keyof T]> = Pick<T, KeyofExcludeValue<T, V>>

/** Build Object from Entries
 *
 * ```ts
 * ObjectFromEntries<['a', 1] | ['b', 2]> =>  { a: 1, b: 2 }
 * ```
 */
export type ObjectFromEntries<T extends [PropertyKey, any]> = Literal<
    UnionToIntersection<T extends [infer K, infer V] ? { [P in Extract<K, PropertyKey>]: V } : never>
>

/**
 * ```ts
 * ObjectKeys<{ a: 1, b: 2, c: 3 }> => 'a' | 'b' | 'c'
 * ```
 */
export type ObjectKeys<T> = keyof T

/**
 * ```ts
 * ObjectValues<{ a: 1, b: 2, c: 3 }> => 1 | 2 | 3
 * ```
 */
export type ObjectValues<T> = T[keyof T]

/** Get all object key value entries
 *
 * ```ts
 * ObjectEntries<{ a: 1, b: 2 }> => ['a', 1] | ['b', 2]
 * ```
 */
export type ObjectEntries<T> = _ObjectEntries<T, keyof T>

type _ObjectEntries<T, P extends keyof T> = { [K in P]: [K, T[K]] }[P]

/** Get value by key for object key value entries
 *
 * ```ts
 * TakeEntryValue<['a', 1] | ['b', 2], 'a'> => 1
 * ```
 */
export type TakeEntryValue<E extends [any, any], K extends E[0]> = E extends [infer P, infer V] ? (P extends K ? V : K extends P ? V : never) : never

/** Get key by value object key value entries
 *
 * ```ts
 * TakeEntryKey<['a', 1] | ['b', 2], 1> => 'a'
 * ```
 */
export type TakeEntryKey<E extends [any, any], V extends E[1]> = E extends [infer K, V] ? K : never

/** Get all object field path deeply
 *
 * ```ts
 * ObjectPath<{ a: { b: { c: 1 } }[] }> => "a" | `a.${number}` | "a.length" | "a.toString" | "a.toLocaleString" | "a.pop" | "a.push" | "a.concat" | "a.join" | "a.reverse" | "a.shift" | "a.slice" | "a.sort" | "a.splice" | "a.unshift" | ... 18 more ... | `a.${number}.b.c`
 * ```
 */
export type ObjectPath<T> = T extends object
    ?
          | Extract<keyof T, string | number>
          | `${Extract<keyof T, string | number>}`
          | { [K in Extract<keyof T, string | number>]: `${K}.${ObjectPath<T[K]>}` }[Extract<keyof T, string | number>]
    : never

/**
 * Get object value by field path deeply
 *
 * ```ts
 * GetValueByPath<{ a: { b: { c: 1 } }[] }, 'a.0.b.c'> => 1
 * ```
 */
export type GetValueByPath<T, K extends ObjectPath<T>> = ObjectPathEntry<T> extends [any, any] ? TakeEntryValue<ObjectPathEntry<T>, K> : never

/** Get all object [field path, value] entry deeply
 *
 * ```ts
 * ObjectPathEntry<{ a: { b: { c: 1 } } }> => ["a", { b: { c: 1 } }] | ["a.b", { c: 1 }] | ["a.b.c", 1]
 * ```
 */
export type ObjectPathEntry<T> = _ObjPathEntry<T>
type _ObjPatchEntry_ObjectKeys<T> = { [K in Extract<keyof T, string | number>]: T[K] extends object ? K : never }[Extract<keyof T, string | number>]
type _ObjPathEntry<T, Base extends string = ''> = T extends object
    ?
          | { [K in Extract<keyof T, string | number>]: [`${Base}${K}`, T[K]] }[Extract<keyof T, string | number>]
          | { [K in _ObjPatchEntry_ObjectKeys<T>]: _ObjPathEntry<T[K], `${Base}${K}.`> }[_ObjPatchEntry_ObjectKeys<T>]
    : never

/** Flatten deep object to object path
 *
 * ```ts
 * FlattenObject<{ a: { b: 2, c: { d: 3 }, 5: 6 }, b: 2 }> => { 'a.b': 2, 'a.c.d': 3, 'a.5': 6, b: 2 }
 * ```
 */
export type FlattenObject<T extends object> = Literal<UnionToIntersection<_FlattenObject<T, ''>>>
type _FlattenObject<T extends object, PK extends string> = {
    [K in keyof T]: K extends string | number ? (T[K] extends object ? _FlattenObject<T[K], `${PK}${K}.`> : { [_ in `${PK}${K}`]: T[K] }) : { [_ in K]: T[K] }
}[keyof T]

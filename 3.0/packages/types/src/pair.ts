/** Key Value Pairl */
export type Pair<K, V> = [K, V]

/** Readonly Key Value Pairl */
export type ReadonlyPair<K, V> = readonly [K, V]

/** Any Pair */
export type AnyPair<K, V> = Pair<K, V> | ReadonlyPair<K, V>

/** Get Key of Pair */
export type TakePairKey<T> = T extends AnyPair<infer K, any> ? K : never

/** Get Key of Pair */
export type TakePairValue<T> = T extends AnyPair<any, infer V> ? V : never

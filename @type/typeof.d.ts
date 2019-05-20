/** `typeof` operation may return strings */
export declare type TypeString = 'bigint' | 'number' | 'string' | 'boolean' | 'symbol' | 'function' | 'object' | 'undefined';
/** typeofOr
 *
 * Equivalent to `typeof obj === 'bigint'`
 *
 * Determine if at least one of a bunch of objects is `bigint`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: 'bigint', obj: any): obj is bigint;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'bigint'`
 *
 * Determine if at least one of a bunch of objects is `bigint`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: 'bigint', obj: any, ...objs: any[]): boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'number'`
 *
 * Determine if at least one of a bunch of objects is `number`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: 'number', obj: any): obj is number;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'number'`
 *
 * Determine if at least one of a bunch of objects is `number`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: 'number', obj: any, ...objs: any[]): boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'string'`
 *
 * Determine if at least one of a bunch of objects is `string`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: 'string', obj: any): obj is string;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'string'`
 *
 * Determine if at least one of a bunch of objects is `string`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: 'string', obj: any, ...objs: any[]): boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'boolean'`
 *
 * Determine if at least one of a bunch of objects is `boolean`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: 'boolean', obj: any): obj is boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'boolean'`
 *
 * Determine if at least one of a bunch of objects is `boolean`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: 'boolean', obj: any, ...objs: any[]): boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'symbol'`
 *
 * Determine if at least one of a bunch of objects is `symbol`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: 'symbol', obj: any): obj is symbol;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'symbol'`
 *
 * Determine if at least one of a bunch of objects is `symbol`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: 'symbol', obj: any, ...objs: any[]): boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'object'`
 *
 * Determine if at least one of a bunch of objects is `object`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: 'object', obj: any): obj is object;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'object'`
 *
 * Determine if at least one of a bunch of objects is `object`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: 'object', obj: any, ...objs: any[]): boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'undefined'`
 *
 * Determine if at least one of a bunch of objects is `undefined`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: 'undefined', obj: any): obj is undefined;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'undefined'`
 *
 * Determine if at least one of a bunch of objects is `undefined`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: 'undefined', obj: any, ...objs: any[]): boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'function'`
 *
 * Determine if at least one of a bunch of objects is `function`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: 'function', obj: any): obj is Function;
/** typeofOr
 *
 * Equivalent to `typeof obj === 'function'`
 *
 * Determine if at least one of a bunch of objects is `function`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: 'function', obj: any, ...objs: any[]): boolean;
/** typeofOr
 *
 * Equivalent to `typeof obj === type`
 *
 * Determine if at least one of a bunch of objects is某个类型
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofOr(type: TypeString, obj: any): boolean;
/** typeofOr
 *
 * Equivalent to `typeof a === type || typeof b === type ...`
 *
 * Determine if at least one of a bunch of objects is某个类型
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofOr(type: TypeString, obj: any, ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'bigint' && typeof b === 'bigint' ...`
 *
 * Determine if the objects are all `bigint`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: 'bigint', obj: any): obj is bigint;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'bigint' && typeof b === 'bigint' ...`
 *
 * Determine if the objects are all `bigint`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: 'bigint', ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'number' && typeof b === 'number' ...`
 *
 * Determine if the objects are all `number`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: 'number', obj: any): obj is number;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'number' && typeof b === 'number' ...`
 *
 * Determine if the objects are all `number`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: 'number', ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'string' && typeof b === 'string' ...`
 *
 * Determine if the objects are all `string`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: 'string', obj: any): obj is string;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'string' && typeof b === 'string' ...`
 *
 * Determine if the objects are all `string`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: 'string', ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'boolean' && typeof b === 'boolean' ...`
 *
 * Determine if the objects are all `boolean`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: 'boolean', obj: any): obj is boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'boolean' && typeof b === 'boolean' ...`
 *
 * Determine if the objects are all `boolean`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: 'boolean', ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'symbol' && typeof b === 'symbol' ...`
 *
 * Determine if the objects are all `symbol`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: 'symbol', obj: any): obj is symbol;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'symbol' && typeof b === 'symbol' ...`
 *
 * Determine if the objects are all `symbol`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: 'symbol', ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'object' && typeof b === 'object' ...`
 *
 * Determine if the objects are all `object`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: 'object', obj: any): obj is object;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'object' && typeof b === 'object' ...`
 *
 * Determine if the objects are all `object`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: 'object', ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'undefined' && typeof b === 'undefined' ...`
 *
 * Determine if the objects are all `undefined`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: 'undefined', obj: any): obj is undefined;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'undefined' && typeof b === 'undefined' ...`
 *
 * Determine if the objects are all `undefined`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: 'undefined', ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'function' && typeof b === 'function' ...`
 *
 * Determine if the objects are all `function`
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: 'function', obj: any): obj is Function;
/** typeofAnd
 *
 * Equivalent to `typeof obj === 'function' && typeof b === 'function' ...`
 *
 * Determine if the objects are all `function`
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: 'function', ...objs: any[]): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof obj === type`
 *
 * Determine if the objects are all某个类型
 * @param type Target type
 * @param obj The object to determine
 */
export declare function typeofAnd(type: TypeString, obj: any): boolean;
/** typeofAnd
 *
 * Equivalent to `typeof a === type && typeof b === type ...`
 *
 * Determine if the objects are all某个类型
 * @param type Target type
 * @param obj The object to determine
 * @param objs Other objects to determine
 */
export declare function typeofAnd(type: TypeString, obj: any, ...objs: any[]): boolean;
/** typeofAny
 *
 * Equivalent to `typeof obj === 'bigint'`
 *
 * Determine if an object is `bigint`
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny(obj: any, type: 'bigint'): obj is bigint;
/** typeofAny
 *
 * Equivalent to `typeof obj === 'number'`
 *
 * Determine if an object is `number`
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny(obj: any, type: 'number'): obj is number;
/** typeofAny
 *
 * Equivalent to `typeof obj === 'string'`
 *
 * Determine if an object is `string`
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny(obj: any, type: 'string'): obj is string;
/** typeofAny
 *
 * Equivalent to `typeof obj === 'boolean'`
 *
 * Determine if an object is `boolean`
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny(obj: any, type: 'boolean'): obj is boolean;
/** typeofAny
 *
 * Equivalent to `typeof obj === 'symbol'`
 *
 * Determine if an object is `symbol`
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny(obj: any, type: 'symbol'): obj is symbol;
/** typeofAny
 *
 * Equivalent to `typeof obj === 'object'`
 *
 * Determine if an object is `object`
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny(obj: any, type: 'object'): obj is object;
/** typeofAny
 *
 * Equivalent to `typeof obj === 'undefined'`
 *
 * Determine if an object is `undefined`
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny(obj: any, type: 'undefined'): obj is undefined;
/** typeofAny
 *
 * Equivalent to `typeof obj === 'function'`
 *
 * Determine if an object is `function`
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny(obj: any, type: 'function'): obj is Function;
/** typeofAny
 *
 * Equivalent to `typeof obj === type `
 *
 * Determine if an object is 其中一个类型
 * @param obj The object to determine
 * @param type Target type
 */
export declare function typeofAny<T extends TypeString>(obj: any, type: T): obj is T;
/** typeofAny
 *
 * Equivalent to `typeof obj === a || typeof obj === b ...`
 *
 * Determine if an object is 其中一个类型
 * @param obj The object to determine
 * @param type Possible type
 * @param types Other possible type
 */
export declare function typeofAny(obj: any, type: TypeString, ...types: TypeString[]): boolean;

export declare function instanceofOr<T, O>(type: new () => T, obj: O): O extends T ? true : false;
export declare function instanceofOr<T>(type: new () => T, ...objs: any[]): boolean;
export declare function instanceofAnd<T, O>(type: new () => T, obj: O): O extends T ? true : false;
export declare function instanceofAnd<T>(type: new () => T, ...objs: any[]): boolean;

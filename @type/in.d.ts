export declare function inOr<T extends object>(obj: T): false;
export declare function inOr<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): keyof T extends K ? true : false;
export declare function inOr(obj: object, ...keys: (string | number | symbol)[]): boolean;
export declare function inAnd<T extends object>(obj: T): false;
export declare function inAnd<T extends object, K extends string | number | symbol>(obj: T, ...keys: K[]): K extends keyof T ? true : false;
export declare function inAnd(obj: object, ...keys: (string | number | symbol)[]): boolean;

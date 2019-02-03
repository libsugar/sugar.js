export declare function deleteAll<T extends object>(obj: T, ...keys: (keyof T)[]): boolean;
export declare function deleteAll(obj: object, ...keys: (string | number | symbol)[]): boolean;

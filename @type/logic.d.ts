export declare function or(...bool: (boolean | (() => boolean))[]): boolean;
export declare function and(...bool: (boolean | (() => boolean))[]): boolean;
export declare function orGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean;
export declare function orGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean;
export declare function andGroup<T>(logic: ((a: T, b: T) => boolean), ...items: T[]): boolean;
export declare function andGroup(logic: ((a: any, b: any) => boolean), ...items: any[]): boolean;

export declare function or(...bool: boolean[]): boolean;
export declare function or(...maybool: any[]): boolean;
export declare function and(...bool: boolean[]): boolean;
export declare function and(...maybool: any[]): boolean;
export declare function orFn(...bool: (boolean | (() => boolean))[]): boolean;
export declare function andFn(...bool: (boolean | (() => boolean))[]): boolean;

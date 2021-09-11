/** Auto bind `this` for methods */
export function bind<T extends object>(target: T): T
/** Bind `this` for method */
export function bind<K extends string, T extends { [P in K]: (...args: any[]) => any }>(target: T, propertyKey: K, descriptor: PropertyDescriptor): { configurable: boolean; get(): any; }
export function bind(...args: any[]): any {
    if (args.length === 1) return bindClass(args[0])
    return (bindMethod as any)(...args)
}

function bindMethod<K extends string, T extends { [P in K]: (...args: any[]) => any }>(target: T, propertyKey: K, descriptor: PropertyDescriptor) {
    let fn = descriptor.value as Function
    return {
        configurable: true,
        get() {
            if (this === (target as any).prototype) return fn
            const bound = fn.bind(this);
            (typeof Reflect === 'object' && typeof Reflect.defineProperty === 'function' ? Reflect.defineProperty : Object.defineProperty)
                (this, propertyKey, {
                    value: bound,
                    configurable: descriptor.configurable ?? true,
                    enumerable: descriptor.enumerable ?? true,
                    writable: descriptor.writable ?? true,
                })
            return bound
        },
        set(v: any) {
            fn = v
        },
    }
}

function bindClass(target: { prototype: object }) {
    let keys: (string | symbol)[]
    const has_Reflect = typeof Reflect === 'object'
    if (has_Reflect && typeof Reflect.ownKeys === 'function')
        keys = Reflect.ownKeys(target.prototype)
    else {
        keys = Object.getOwnPropertyNames(target.prototype)
        if (typeof Object.getOwnPropertySymbols === 'function')
            keys.push(...Object.getOwnPropertySymbols(target.prototype))
    }
    for (const key of keys) {
        if (key === 'constructor') continue
        const descriptor =
            has_Reflect && typeof Reflect.getOwnPropertyDescriptor === 'function'
                ? Reflect.getOwnPropertyDescriptor(target.prototype, key)
                : Object.getOwnPropertyDescriptor(target.prototype, key)
        if (typeof descriptor?.value !== 'function') continue
        if (has_Reflect && typeof Reflect.defineProperty === 'function') {
            Reflect.defineProperty(target.prototype, key, bindMethod(target.prototype as any, key as any, descriptor))
        } else {
            Object.defineProperty(target.prototype, key, bindMethod(target.prototype as any, key as any, descriptor))
        }
    }
    return target
}

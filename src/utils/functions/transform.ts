type TransformFn<T = any, R = any> = (value: T) => R;

export const transform = <T = any>(value: any, fns: TransformFn | TransformFn[]): T => {
    if (value === undefined)
        return value;
    return (Array.isArray(fns) ? fns : [fns]).reduce((transformed, fn) => {
        return fn(transformed);
    }, value);
}
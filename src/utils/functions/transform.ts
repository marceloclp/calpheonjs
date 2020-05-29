type TransformFn<T = any, R = any> = (value: T) => R;

export const transform = <T = any, R = any>(
    value: T,
    fns: TransformFn<T, R> | TransformFn[],
): R => {
    return (
        Array.isArray(fns) ? fns : [fns] as TransformFn[]
    ).reduce((val, fn) => {
        return fn(val);
    }, value) as unknown as R;
}
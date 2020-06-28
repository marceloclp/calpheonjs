/**
 * Removes properties whose value is considered undefined.
 * 
 * @param obj      - The object to be filtered.
 * @param filterFn - The function that defines what is undefined.
 */
export const filterObj = <T extends Record<string | number, any>>(
    obj: T,
    filterFn?: (obj: T, key: keyof T) => boolean,
): T => {
    const fn = filterFn || ((obj, key) => (
        obj[key] !== undefined || (
            typeof obj[key] === 'number' &&
            obj[key] === obj[key]
        )
    ));
    return Object.keys(obj).reduce((filtered, key) => {
        if (fn(obj, key))
            return { ...filtered, [key]: obj[key] };
        return filtered;
    }, {} as T);
}
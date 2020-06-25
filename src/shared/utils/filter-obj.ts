type GenericDict = Record<string | number | symbol, any>;

/**
 * Removes `undefined` properties from an object.
 * 
 * @param obj - The object to be filtered.
 */
export const filterObj = <T extends GenericDict>(
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
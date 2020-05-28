type GenericDict = Record<string | number | symbol, any>;

/**
 * Removes `undefined` properties from an object.
 * 
 * @param obj - The object to be filtered.
 */
export const filterObject = <T extends GenericDict>(
    obj: T,
    filterFn = (obj: T, key: keyof T) => obj[key] !== undefined,
): T => {
    return Object.keys(obj).reduce((filtered, key) => {
        if (filterFn(obj, key))
            return { ...filtered, [key]: obj[key] };
        return filtered;
    }, {} as T);
}
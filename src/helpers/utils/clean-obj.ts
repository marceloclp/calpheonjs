type FilterFn<T> = <K extends keyof T>(value: T[K], key: K, obj: T) => boolean

export const cleanObj = <T>(object: T, filterFn: FilterFn<T>): T => {
    return Object.entries(object).reduce((obj, [key, value]) => {
        if (filterFn(value, key as keyof T, object))
            return { ...obj, [key]: value }
        return obj
    }, {} as T)
}
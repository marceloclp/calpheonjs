/**
 * Converts a string to a number. If the value can't be converted, it will return
 * a default value.
 * 
 * @param value - The value to be converted to integer.
 * @param defaultValue - The default value in case the conversion fails.
 * @returns the parsed value when available, otherwise the default value.
 */
export const parseNumber = (value?: string | number, defaultValue = 0) => {
    if (typeof value === 'number')
        return value
    if (typeof value !== 'string')
        return defaultValue
    const parsedValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (isNaN(parsedValue)) return defaultValue
    else return parsedValue
}
import { Matcher } from '@helpers/factory/matcher'
import { parseNumber } from './parse-number'

const ConversionTable = [
    [['sec'], (n: number) => n],
    [['min'], (n: number) => n * 60],
    [['h'], (n: number) => n * 60 * 60],
] as [string[], (n: number) => number][]

export const parseTime = (
    value: string | number | undefined,
    defaultValue: number
) => {
    if (typeof value === 'number')
        return value
    if (typeof value !== 'string')
        return defaultValue
    let parsedValue = parseNumber(value, defaultValue)
    for (const [dict, convertFn] of ConversionTable)
        if (Matcher(...dict).findIn(value))
            return convertFn(parsedValue)
    return parsedValue
}

import { App } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from './parse-number'

const SecondsDict = {
    [App.Locales.US]: ['sec'],
}
const MinutesDict = {
    [App.Locales.US]: ['min'],
}
const HoursDict = {
    [App.Locales.US]: ['h'],
}
const ConversionTable = [
    [SecondsDict, (n: number) => n],
    [MinutesDict, (n: number) => n * 60],
    [HoursDict, (n: number) => n * 60 * 60],
] as [Record<App.Locales, string[]>, (n: number) => number][]

export const parseTime = (
    value: string | number | undefined,
    defaultValue: number,
    locale: App.Locales
) => {
    if (typeof value === 'number')
        return value
    if (typeof value !== 'string')
        return defaultValue
    let parsedValue = parseNumber(value, defaultValue)
    for (const [dict, convertFn] of ConversionTable) {
        const matcher = LocaleMatcher(dict, locale)
        if (!matcher.findIn(value)) continue
        return convertFn(parsedValue)
    }
    return parsedValue
}
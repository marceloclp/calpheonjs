import { Matcher } from '@helpers/utils/matcher'
import { parseNumber } from './parse-number'

export function parseTime(value?: string | number, defaultValue: number = 0) {
    if (typeof value === 'number')
        return value
    if (typeof value !== 'string')
        return defaultValue
    let parsedValue = parseNumber(value, defaultValue)
    const match = Matcher.initWithMap({
        sec: 'sec', min: 'min', hour: 'h'
    }).findIn(value)
    if (!match) return defaultValue
    return {
        sec: (n: number) => n,
        min: (n: number) => n * 60,
        hour: (n: number) => n * 60 * 60,
    }[match.candidateKey](parsedValue)
}
import { Matcher } from '@helpers/utils/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getExp: Getter<'exp'> = ({ $ }) => {
    const matcher = Matcher.initWith('EXP')
    const elements = $('.category_text')
        .parent().contents().toArray()
    const element = elements.find(element => {
        const text = $(element).text()
        return !!matcher.findIn(text)
    })
    if (!element || !matcher.lastMatch) return 0
    return parseNumber(matcher.lastMatch.matchedStr, 0)
}

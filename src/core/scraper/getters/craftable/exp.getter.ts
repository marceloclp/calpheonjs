import { Matcher } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getExp: Getter<'exp'> = ({ $ }) => {
    const matcher = Matcher('EXP')
    const elements = $('.category_text')
        .parent().contents().toArray()
    const element = elements.find(element => {
        const text = $(element).text()
        return !!matcher.findIn(text)
    })
    if (!element || !matcher.lastMatch) return 0
    return parseNumber(matcher.lastMatch.str, 0)
}

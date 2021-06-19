import { Matcher } from '@helpers/utils/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getLevel: Getter<'level'> = ({ $ }) => {
    const matcher = Matcher.initWith('Level:')
    const element = $('.titles_cell').contents().toArray()
        .find(elem => !!matcher.findIn($(elem).text()))
    if (!element || !matcher.lastMatch) return
    return parseNumber(matcher.lastMatch.matchedStr, 0)
}

import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'
import { Matcher } from '@helpers/factory/matcher'

export const getLevel: Getter<
    number | undefined
> = ({ $ }) => {
    const matcher = Matcher('Level:')
    const element = $('.titles_cell').contents().toArray()
        .find(elem => !!matcher.findIn($(elem).text()))
    if (!element || !matcher.lastMatch) return
    return parseNumber(matcher.lastMatch.str, 0)
}

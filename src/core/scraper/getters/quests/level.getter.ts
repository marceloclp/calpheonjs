import { Getter } from '@core/scraper/typings'
import { parseNumber } from '@helpers/utils/parse-number'
import { Matcher } from '@helpers/matcher'

export const getLevel: Getter<
    number | undefined
> = ({ $ }) => {
    const matcher = Matcher('Level:')
    const element = $('.titles_cell').contents().toArray()
        .find(elem => !!matcher.findIn($(elem).text()))
    if (!element || !matcher.lastMatch) return
    return parseNumber(matcher.lastMatch.str, 0)
}

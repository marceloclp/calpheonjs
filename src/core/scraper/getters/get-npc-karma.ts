import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'
import { Matcher } from '@helpers/factory/matcher'

export const getNPCKarma: Getter<
    number | undefined
> = ({ $ }) => {
    const matcher = Matcher('Karma')

    $('.titles_cell').contents().toArray().find(elem => {
        return !!matcher.findIn($(elem).text())
    })
    if (matcher.lastMatch)
        return parseNumber(matcher.lastMatch.str, 0)
}

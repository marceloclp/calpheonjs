import { Matcher } from '@helpers/utils/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getFairyExp: Getter<'fairyExp'> = ({ $ }) => {
    const matcher = Matcher.initWith('Used as Fairy growth item')

    $('.outer.item_info td').contents().toArray().find(element => {
        const text = $(element).text()
        if (!!matcher.findIn(text)) return true
    })
    if (!matcher.lastMatch) return 0

    return parseNumber(matcher.lastMatch.matchedStr, 0)
}

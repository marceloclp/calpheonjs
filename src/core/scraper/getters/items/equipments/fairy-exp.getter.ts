import { Matcher } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getFairyExp: Getter<'fairyExp'> = ({ $ }) => {
    const matcher = Matcher('Used as Fairy growth item')

    $('.outer.item_info td').contents().toArray().find(element => {
        const text = $(element).text()
        if (!!matcher.findIn(text)) return true
    })
    if (!matcher.lastMatch) return 0

    return parseNumber(matcher.lastMatch.str, 0)
}

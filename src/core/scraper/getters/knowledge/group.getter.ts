import { Matcher } from '@helpers/utils/matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getter.type'

export const getGroup: Getter<'group'> = ({ $ }) => {
    const matcher = Matcher.initWith('Category:')

    const elements = $('.quest_icon_cell')
        .parent().find('.valign_top').contents().toArray()
    elements.find(elem => {
        const text = $(elem).text()
        return !!matcher.findIn(text)
    })
    if (!matcher.lastMatch) return

    const { matchedStr, endIdx } = matcher.lastMatch
    return cleanStr(matchedStr.substr(endIdx + 1))
}

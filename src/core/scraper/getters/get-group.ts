import { Matcher } from '@helpers/factory/matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getters.types'

export const getGroup: Getter<
    string | undefined
> = ({ $ }) => {
    const matcher = Matcher('Category:')

    const elements = $('.quest_icon_cell')
        .parent().find('.valign_top').contents().toArray()
    elements.find(elem => {
        const text = $(elem).text()
        return !!matcher.findIn(text)
    })
    if (!matcher.lastMatch) return

    const { str, index, found } = matcher.lastMatch
    return cleanStr(str.substr(index + found.length + 1))
}

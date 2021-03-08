import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { App } from '@typings/namespaces'
import { Getter } from './getters.types'

const GroupDict = {
    [App.Locales.US]: ['Category:'],
}

export const getGroup: Getter<
    string | undefined
> = ({ $, locale }) => {
    const matcher = LocaleMatcher(GroupDict, locale)

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

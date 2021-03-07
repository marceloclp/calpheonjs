import { App } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

const FairyMatcher = {
    [App.Locales.US]: ['Used as Fairy growth item'],
}

export const getFairyExp: Getter<number> = ({ $, locale }) => {
    const matcher = LocaleMatcher(FairyMatcher, locale)

    $('.outer.item_info td').contents().toArray().find(element => {
        const text = $(element).text()
        if (!!matcher.findIn(text)) return true
    })
    if (!matcher.lastMatch) return 0

    return parseNumber(matcher.lastMatch.str, 0)
}
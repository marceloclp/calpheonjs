import { App } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

const ExpMatcher = {
    [App.Locales.US]: ['EXP'],
}

export const getExp: Getter<number> = ({ $, locale }) => {
    const matcher = LocaleMatcher(ExpMatcher, locale)
    const elements = $('.category_text')
        .parent().contents().toArray()
    const element = elements.find(element => {
        const text = $(element).text()
        return !!matcher.findIn(text)
    })
    if (!element || !matcher.lastMatch) return 0
    return parseNumber(matcher.lastMatch.str, 0)
}

import { App } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

const LevelDict = {
    [App.Locales.US]: ['Level:'],
}

export const getLevel: Getter<
    number | undefined
> = ({ $, locale }) => {
    const matcher = LocaleMatcher(LevelDict, locale)
    const element = $('.titles_cell').contents().toArray()
        .find(elem => !!matcher.findIn($(elem).text()))
    if (!element || !matcher.lastMatch) return
    return parseNumber(matcher.lastMatch.str, 0)
}

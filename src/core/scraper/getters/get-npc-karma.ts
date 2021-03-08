import { App } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

const Dict = {
    [App.Locales.US]: ['Karma'],
}

export const getNPCKarma: Getter<
    number | undefined
> = ({ $, locale }) => {
    const matcher = LocaleMatcher(Dict, locale)

    $('.titles_cell').contents().toArray().find(elem => {
        return !!matcher.findIn($(elem).text())
    })
    if (matcher.lastMatch)
        return parseNumber(matcher.lastMatch.str, 0)
}

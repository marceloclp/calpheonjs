import { App, BDO } from '@typings/namespaces'
import { LocaleLookup } from '@helpers/utils/locale-lookup'
import { Matcher } from '@helpers/utils/matcher'
import { Getter } from './getter.type'

const CategoryLookup = new LocaleLookup(BDO.Quests.Categories)
    .forLocale(App.Locales.US, (C) => ({
        'Black Spirit': C.BlackSpirit,
        'Exploration': C.Exploration,
        'Production': C.Production,
        'Repeat': C.Repeat,
        'Story': C.Story,
        'Town': C.Town,
        'Trade': C.Trade,
    }))

export const getCategory: Getter<'category'> = ({ $, locale }) => {
    const lookup = CategoryLookup.init(locale)
    const matcher = Matcher.initWith('Category:')
    $('.titles_cell').contents().toArray().find(elem => {
        return matcher.findIn($(elem).text())
    })
    if (!matcher.lastMatch)
        return
    const { matchedStr, endIdx } = matcher.lastMatch
    const text = matchedStr.substr(endIdx + 1).trim()
    return lookup.get(text)
}

import { App, BDO } from '@typings/namespaces'
import { LocaleLookup } from '@helpers/utils/locale-lookup'
import { Matcher } from '@helpers/utils/matcher'
import { Getter } from './getter.type'

const GroupsLookup = new LocaleLookup(BDO.Quests.Groups)
    .forLocale(App.Locales.US, (G) => ({
        'Character quest': G.Character,
        'Family quest': G.Family,
    }))

export const getGroup: Getter<'group'> = ({ $, locale }) => {
    const lookup = GroupsLookup.init(locale)
    const matcher = Matcher.initWith('Type:')
    $('.titles_cell').contents().toArray().find(elem => {
        return matcher.findIn($(elem).text())
    })
    if (!matcher.lastMatch)
        return
    const { matchedStr, endIdx } = matcher.lastMatch
    const text = matchedStr.substr(endIdx + 1).trim()
    return lookup.get(text)
}

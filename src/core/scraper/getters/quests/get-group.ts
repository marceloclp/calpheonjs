import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/factory/matcher'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from '../getters.types'

const Lookup = {
    'character_quest': BDO.Quests.Groups.Character,
    'family_quest': BDO.Quests.Groups.Family,
}

export const getGroup: Getter<
    BDO.Quests.Groups
> = ({ $ }) => {
    const matcher = Matcher('Type:')
    $('.titles_cell').contents().toArray().find(elem => {
        return matcher.findIn($(elem).text())
    })
    if (!matcher.lastMatch)
        return
    const { str, index, found } = matcher.lastMatch
    const text = str.substr(index + found.length + 1)
    return Lookup[toSnakeCase(text)]
}

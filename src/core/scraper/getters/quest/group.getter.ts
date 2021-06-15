import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/matcher'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getter.type'

const { Groups } = BDO.Quests
const Lookup = {
    'character_quest': Groups.Character,
    'family_quest': Groups.Family,
}

export const getGroup: Getter<'group'> = ({ $ }) => {
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

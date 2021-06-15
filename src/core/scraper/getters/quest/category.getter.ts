import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/matcher'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getter.type'

const { Categories } = BDO.Quests
const Lookup = {
    'black_spirit': Categories.BlackSpirit,
    'exploration': Categories.Exploration,
    'production': Categories.Production,
    'repeat': Categories.Repeat,
    'story': Categories.Story,
    'town': Categories.Town,
    'trade': Categories.Trade,
}

export const getCategory: Getter<'category'> = ({ $ }) => {
    const matcher = Matcher('Category:')
    $('.titles_cell').contents().toArray().find(elem => {
        return matcher.findIn($(elem).text())
    })
    if (!matcher.lastMatch)
        return
    const { str, index, found } = matcher.lastMatch
    const text = str.substr(index + found.length + 1)
    return Lookup[toSnakeCase(text)]
}

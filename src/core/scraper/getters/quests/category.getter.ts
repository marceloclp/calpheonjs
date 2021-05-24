import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'
import { toSnakeCase } from '@helpers/utils/to-snake-case'

const Lookup = {
    'black_spirit': BDO.Quests.Categories.BlackSpirit,
    'exploration': BDO.Quests.Categories.Exploration,
    'production': BDO.Quests.Categories.Production,
    'repeat': BDO.Quests.Categories.Repeat,
    'story': BDO.Quests.Categories.Story,
    'town': BDO.Quests.Categories.Town,
    'trade': BDO.Quests.Categories.Trade,
}

export const getCategory: Getter<
    BDO.Quests.Categories
> = ({ $ }) => {
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

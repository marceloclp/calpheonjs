import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'

export const getGrowth: Getter<
    BDO.NPCs.Workers.Stats<string>
> = ({ $ }) => {
    const matchers = {
        [BDO.NPCs.Workers.Attributes.Luck]:
            Matcher('Luck growth per level'),
        [BDO.NPCs.Workers.Attributes.MovementSpeed]:
            Matcher('Speed growth per level'),
        [BDO.NPCs.Workers.Attributes.WorkSpeed]:
            Matcher('Work speed growth per level'),
    }
    const stats: Partial<BDO.NPCs.Workers.Stats<string>> = {}
    const elements = $('.outer.item_info table tr table[width] td')
        .toArray()
    for (let i = 0; i < elements.length; i++) {
        const text = $(elements[i]).text()
        const key = Object.keys(matchers).find(key => {
            return !!matchers[key].findIn(text)
        })
        if (!key) continue
        stats[key] = $(elements[i+1]).text()
        if (Object.keys(stats).length === Object.keys(matchers).length)
            break
    }
    return stats as BDO.NPCs.Workers.Stats<string>
}
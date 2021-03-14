import { Matcher } from '@helpers/factory/matcher'
import { App, BDO } from '@typings/namespaces'
import { Getter } from '../../getters.types'

export const getGrowth: Getter<
    App.Shared.NPCs.Workers.Stats<string>
> = ({ $ }) => {
    const matchers = {
        [BDO.NPCs.Workers.Attributes.Luck]:
            Matcher('Luck growth per level'),
        [BDO.NPCs.Workers.Attributes.MovementSpeed]:
            Matcher('Speed growth per level'),
        [BDO.NPCs.Workers.Attributes.WorkSpeed]:
            Matcher('Work speed growth per level'),
    }
    const stats: Partial<App.Shared.NPCs.Workers.Stats<string>> = {}
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
    return stats as App.Shared.NPCs.Workers.Stats
}

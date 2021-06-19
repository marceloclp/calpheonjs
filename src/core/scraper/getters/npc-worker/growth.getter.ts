import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { Getter } from './getter.type'

export const getGrowth: Getter<'statsGrowth'> = ({ $ }) => {
    const matcher = Matcher.initWithMap({
        [BDO.NPCs.Workers.Attributes.Luck]: 'Luck growth per level',
        [BDO.NPCs.Workers.Attributes.MovementSpeed]: 'Speed growth per level',
        [BDO.NPCs.Workers.Attributes.WorkSpeed]: 'Work speed growth per level',
    })
    let matchedStatsCount = 0
    const stats: Partial<BDO.NPCs.Workers.Stats> = {}
    const elements = $('.outer.item_info table tr table[width] td')
        .toArray()
    for (let i = 0; i < elements.length; i++) {
        const text = $(elements[i]).text()
        const match = matcher.findIn(text)
        if (!match) continue
        stats[match.candidateKey] = $(elements[i+1]).text()
        if (++matchedStatsCount === Object.keys(BDO.NPCs.Workers.Attributes).length)
            break
    }
    return stats as BDO.NPCs.Workers.Stats<string>
}

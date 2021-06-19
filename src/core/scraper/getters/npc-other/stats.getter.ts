import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { Getter } from './getter.type'

export const getStats: Getter<'stats'> = ({ $ }) => {
    const matcher = Matcher.initWithMap({
        [BDO.Characters.Attributes.HP]: 'HP:',
        [BDO.Characters.Attributes.MP]: 'MP:',
        [BDO.Characters.Attributes.Damage]: 'Damage:',
        [BDO.Characters.Attributes.Defense]: 'Defense (DP):',
        [BDO.Characters.Attributes.Accuracy]: 'Accuracy:',
        [BDO.Characters.Attributes.Evasion]: 'Evasion:',
        [BDO.Characters.Attributes.DamageReduction]: 'Damage Reduction:',
    })
    const stats: BDO.NPCs.Stats<string> = {}

    $('.titles_cell').contents().toArray().forEach(elem => {
        const text = $(elem).text()
        const match = matcher.findIn(text)
        if (match) stats[match.candidateKey] = text.replace(/\D+/g, '')
    })
    return stats
}

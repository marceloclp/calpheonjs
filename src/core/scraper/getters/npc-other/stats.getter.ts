import { BDO } from '@typings/namespaces'
import { Matcher, MatcherMap } from '@helpers/matcher'
import { Getter } from './getter.type'

const Matches: BDO.NPCs.Stats<string[]> = {
    [BDO.Characters.Attributes.HP]: ['HP:'],
    [BDO.Characters.Attributes.MP]: ['MP:'],
    [BDO.Characters.Attributes.Damage]: ['Damage:'],
    [BDO.Characters.Attributes.Defense]: ['Defense (DP):'],
    [BDO.Characters.Attributes.Accuracy]: ['Accuracy:'],
    [BDO.Characters.Attributes.Evasion]: ['Evasion:'],
    [BDO.Characters.Attributes.DamageReduction]: ['Damage Reduction:'],
}

export const getStats: Getter<'stats'> = ({ $ }) => {
    const matchers = Object.entries(Matches)
        .reduce((obj, [stat, matches]) => {
            return { ...obj, [stat]: Matcher(...matches) }
        }, {} as MatcherMap<keyof BDO.NPCs.Stats<string>>)
    const stats: BDO.NPCs.Stats<string> = {}

    $('.titles_cell').contents().toArray().forEach(elem => {
        const text = $(elem).text()
        const key = Object.keys(matchers).find(key => {
            return !matchers[key].lastMatch && !!matchers[key].findIn(text)
        })
        if (key) stats[key] = text.replace(/\D+/g, '')
    })
    return stats
}

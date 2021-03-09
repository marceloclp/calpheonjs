import { App, BDO } from '@typings/namespaces'
import { IMatcher, Matcher } from '@helpers/factory/matcher'
import { Getter } from './getters.types'

const Attributes = BDO.Players.Attributes
const Matches = {
    [Attributes.HP]: ['HP:'],
    [Attributes.MP]: ['MP:'],
    [Attributes.Damage]: ['Damage:'],
    [Attributes.Damage]: ['Defense (DP):'],
    [Attributes.Accuracy]: ['Accuracy:'],
    [Attributes.Evasion]: ['Evasion:'],
    [Attributes.DamageReduction]: ['Damage Reduction:'],
}

export const getNPCStats: Getter<
    Partial<App.Shared.NPCs.Stats> | undefined
> = ({ $ }) => {
    const matchers = Object.entries(Matches)
        .reduce((obj, [stat, matches]) => {
            return { ...obj, [stat]: Matcher(matches) }
        }, {} as Partial<App.Shared.NPCs.Stats<IMatcher>>)
    const stats: Partial<App.Shared.NPCs.Stats> = {}

    $('.titles_cell').contents().toArray().forEach(elem => {
        const text = $(elem).text()
        const key = Object.keys(matchers).find(key => {
            return !!matchers[key].findIn(text)
        })
        if (key) stats[key] = text.replace(/\D+/g, '')
    })

    if (Object.keys(stats).length) return stats
}

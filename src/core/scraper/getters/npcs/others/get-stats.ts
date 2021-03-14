import { App, BDO } from '@typings/namespaces'
import { IMatcher, Matcher } from '@helpers/factory/matcher'
import { Getter } from '../../getters.types'

const Matches: App.Shared.NPCs.Stats<string[]> = {
    [BDO.Players.Attributes.HP]: ['HP:'],
    [BDO.Players.Attributes.MP]: ['MP:'],
    [BDO.Players.Attributes.Damage]: ['Damage:'],
    [BDO.Players.Attributes.Defense]: ['Defense (DP):'],
    [BDO.Players.Attributes.Accuracy]: ['Accuracy:'],
    [BDO.Players.Attributes.Evasion]: ['Evasion:'],
    [BDO.Players.Attributes.DamageReduction]: ['Damage Reduction:'],
    lvl: ['Level:'],
    droppedExp: ['XP:'],
    droppedSkillExp: ['Skill XP:'],
    karma: ['Karma:'],
}

export const getStats: Getter<
    Partial<App.Shared.NPCs.Stats> | undefined
> = ({ $ }) => {
    const matchers = Object.entries(Matches)
        .reduce((obj, [stat, matches]) => {
            return { ...obj, [stat]: Matcher(...matches) }
        }, {} as Partial<App.Shared.NPCs.Stats<IMatcher>>)
    const stats: Partial<App.Shared.NPCs.Stats> = {}

    $('.titles_cell').contents().toArray().forEach(elem => {
        const text = $(elem).text()
        const key = Object.keys(matchers).find(key => {
            return !matchers[key].lastMatch && !!matchers[key].findIn(text)
        })
        if (key) stats[key] = text.replace(/\D+/g, '')
    })

    if (Object.keys(stats).length) return stats
}

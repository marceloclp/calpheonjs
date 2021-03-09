import { LocaleMatcher, Matcher } from '@helpers/factory/locale-matcher'
import { App, BDO } from '@typings/namespaces'
import { Getter } from './getters.types'

const StatsDicts = {
    [BDO.Players.Attributes.HP]: {
        [App.Locales.US]: ['HP:'],
    },
    [BDO.Players.Attributes.MP]: {
        [App.Locales.US]: ['MP:'],
    },
    [BDO.Players.Attributes.Damage]: {
        [App.Locales.US]: ['Damage:'],
    },
    [BDO.Players.Attributes.Defense]: {
        [App.Locales.US]: ['Defense (DP):'],
    },
    [BDO.Players.Attributes.Accuracy]: {
        [App.Locales.US]: ['Accuracy:'],
    },
    [BDO.Players.Attributes.Evasion]: {
        [App.Locales.US]: ['Evasion:'],
    },
    [BDO.Players.Attributes.DamageReduction]: {
        [App.Locales.US]: ['Damage Reduction:'],
    },
}

export const getNPCStats: Getter<
    Partial<App.Shared.NPCs.Stats> | undefined
> = ({ $, locale }) => {
    const matchers = Object.entries(StatsDicts)
        .reduce((obj, [stat, dict]) => {
            return { ...obj, [stat]: LocaleMatcher(dict, locale) }
        }, {} as Record<keyof typeof StatsDicts, Matcher>)
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
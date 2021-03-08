import { LocaleMatcher, Matcher } from '@helpers/factory/locale-matcher'
import { App, BDO } from '@typings/namespaces'
import { Getter } from './getters.types'

const StatsDicts = {
    [BDO.Players.Stats.HP]: {
        [App.Locales.US]: ['HP:'],
    },
    [BDO.Players.Stats.MP]: {
        [App.Locales.US]: ['MP:'],
    },
    [BDO.Players.Stats.Damage]: {
        [App.Locales.US]: ['Damage:'],
    },
    [BDO.Players.Stats.Defense]: {
        [App.Locales.US]: ['Defense (DP):'],
    },
    [BDO.Players.Stats.Accuracy]: {
        [App.Locales.US]: ['Accuracy:'],
    },
    [BDO.Players.Stats.Evasion]: {
        [App.Locales.US]: ['Evasion:'],
    },
    [BDO.Players.Stats.DamageReduction]: {
        [App.Locales.US]: ['Damage Reduction:'],
    },
}

export const getNPCStats: Getter<
    Partial<App.Shared.Stats> | undefined
> = ({ $, locale }) => {
    const matchers = Object.entries(StatsDicts)
        .reduce((obj, [stat, dict]) => {
            return { ...obj, [stat]: LocaleMatcher(dict, locale) }
        }, {} as Record<keyof typeof StatsDicts, Matcher>)
    const stats: Partial<App.Shared.Stats> = {}

    $('.titles_cell').contents().toArray().forEach(elem => {
        const text = $(elem).text()
        const key = Object.keys(matchers).find(key => {
            return !!matchers[key].findIn(text)
        })
        if (key) stats[key] = text.replace(/\D+/g, '')
    })

    if (Object.keys(stats).length) return stats
}
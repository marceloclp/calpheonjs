import cheerio from 'cheerio'
import { App, BDO, BDOCodex } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { cleanStr } from '@helpers/utils/clean-str'
import { mapStats } from '../utils/map-stats'
import { Getter } from './getters.types'

const EnhancementDict = {
    [App.Locales.US]: ['Enhancement Effect'],
}
const ItemDict = {
    [App.Locales.US]: ['Item Effect'],
}
const AdditionalDict = {
    [App.Locales.US]: ['Additional Effect'],
}
const SetDict = {
    [App.Locales.US]: ['Set Effect']
}

const parseEffects = (
    html: string,
    locale: App.Locales.US
): App.Shared.Equipments.Effects => {
    const $ = cheerio.load('<div>' + html + '</div>')
    const matchers = {
        item: LocaleMatcher(ItemDict, locale),
        enhancement: LocaleMatcher(EnhancementDict, locale),
        additional: LocaleMatcher(AdditionalDict, locale),
        set: LocaleMatcher(SetDict, locale),
    }
    const effects: App.Shared.Equipments.Effects = {
        item: [], enhancement: [], additional: [], set: {},
    }
    const keys = Object.keys(effects) as (keyof typeof matchers)[]

    let numberOfPieces: number
    let currKey: keyof typeof matchers
    $('div').contents().each((_, element) => {
        const text = $(element).text()
        if (!text.length) return
        const newKey = keys.find(key => {
            if (!matchers[key].lastMatch)
                return !!matchers[key].findIn(text)
        })
        if (typeof newKey !== 'undefined') {
            if (newKey === 'set') {
                numberOfPieces = parseNumber(text, 2)
                effects.set[numberOfPieces] = []
            }
            return currKey = newKey
        }
        const effect = cleanStr(text)
        if (!effect.length) return
        if (currKey === 'set') {
            effects.set[numberOfPieces].push(effect)
        } else effects[currKey].push(effect)
    })
    return effects
}

export const getEnhancementStats: Getter<
    App.Shared.Equipments.Enhancements.Set
> = ({ $, category, locale }) => {
    if (category !== 'equipment') return []
    const data: BDOCodex.Enhancement.Data = JSON.parse($('#enchantment_array').text())
    const maxLevel = parseNumber(data.max_enchant, 0)

    return Array(maxLevel + 1).fill(0).map((_, index) => {
        const isLastLevel = index === maxLevel - 1
        const level = data[index]
        return {
            stats: mapStats(level),
            successRate: parseNumber(level.enchant_chance, 0),
            durability: parseNumber(level.durability.split('.')[0], 100),
            cronStonesAmount: {
                nextLvl: parseNumber(level.cron_value),
                total: parseNumber(level.cron_tvalue),
            },
            effects: parseEffects(level.edescription, locale),
            requiredItem: isLastLevel ? {
                type: App.Entities.Types.Item,
                id: level.need_enchant_item_id,
                icon: '/' + level.need_enchant_item_icon,
                name: level.need_enchant_item_name,
                amount: parseNumber(level.enchant_item_counter, 0),
                durabilityLossOnFailure: parseNumber(level.fail_dura_dec, 0),
            } : undefined,
            perfectEnhancement: isLastLevel ? {
                amount: parseNumber(level.pe_item_counter, 0),
                durabilityLossOnFailure: parseNumber(level.pe_dura_dec, 0),
            } : undefined,
        }
    })
}

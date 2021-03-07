import cheerio from 'cheerio'
import { App, BDO, BDOCodex } from '@typings/namespaces'
import { LocaleMatcher, MatcherDict } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getters.types'

const EnhancementDict: MatcherDict = {
    [App.Locales.US]: ['Enhancement Effect'],
}
const ItemDict: MatcherDict = {
    [App.Locales.US]: ['Item Effect'],
}
const AdditionalDict: MatcherDict = {
    [App.Locales.US]: ['Additional Effect'],
}

const parseEffects = (html: string, locale: App.Locales.US): BDO.Equipments.BlackStones.Effects => {
    const $ = cheerio.load('<div>' + html + '</div>')
    const matchers = {
        item: LocaleMatcher(ItemDict, locale),
        enhancement: LocaleMatcher(EnhancementDict, locale),
        additional: LocaleMatcher(AdditionalDict, locale),
    }
    const effects: BDO.Equipments.BlackStones.Effects = {
        item: [], enhancement: [], additional: [],
    }
    const keys = Object.keys(effects) as (keyof typeof matchers)[]

    let currKey: keyof typeof matchers
    $('div').contents().each((_, element) => {
        const text = $(element).text()
        if (!text.length) return
        const newKey = keys.find(key => {
            if (!matchers[key].lastMatch)
                return !!matchers[key].findIn(text)
        })
        if (typeof newKey !== 'undefined')
            return currKey = newKey
        const effect = cleanStr(text)
        if (effect.length) effects[currKey].push(effect)
    })
    return effects
}

export const getEnhancementStats: Getter<BDO.Equipments.BlackStones.Set> = ({ $, category, locale }) => {
    if (category !== 'equipment') return []
    const data: BDOCodex.Enhancement.Data = JSON.parse($('#enchantment_array').text())
    const maxLevel = parseNumber(data.max_enchant, 0)

    return Array(maxLevel + 1).fill(0).map((_, index) => {
        const isLastLevel = index === maxLevel - 1
        const level = data[index]

        const stats: BDO.Player.Stats<string> = {
            hp: level.hp || '0',
            mp: level.mp || '0',
            damage: level.damage || '0',
            defense: level.defense || '0',
            accuracy: level.accuracy || '0',
            evasion: level.evasion || '0',
            damageReduction: level.dreduction || '0',
            h_damage: level.hdamage || '0',
            h_defense: level.hdefense || '0',
            h_accuracy: level.haccuracy || '0',
            h_evasion: level.hevasion || '0',
            h_damageReduction: level.hdreduction || '0',
        }

        return {
            stats,
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

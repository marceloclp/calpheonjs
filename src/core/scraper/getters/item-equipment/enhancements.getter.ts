import cheerio from 'cheerio'
import { BDO, BDOCodex } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { StatsLookup } from '@helpers/lookups/stats.lookup'
import { cleanStr } from '@helpers/utils/clean-str'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

const parseEffects = (
    html: string
): BDO.Items.Equipments.Effects => {
    const $ = cheerio.load('<div>' + html + '</div>')
    const matchers = {
        item: Matcher.initWith('Item Effect'),
        enhancement: Matcher.initWith('Enhancement Effect'),
        additional: Matcher.initWith('Additional Effect'),
        set: Matcher.initWith('Set Effect'),
    }
    const effects: BDO.Items.Equipments.Effects = {
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

export const getEnhancements: Getter<'enhancements'> = ({ $ }) => {
    const data: BDOCodex.Enhancements.Data = JSON.parse($('#enchantment_array').text())
    const maxLevel = parseNumber(data.max_enchant, 0)

    return Array(maxLevel + 1).fill(0).map((_, index) => {
        const isLastLevel = index === maxLevel - 1
        const level = data[index]
        return {
            stats: StatsLookup.toBDO(level),
            successRate: parseNumber(level.enchant_chance, 0),
            durability: parseNumber(level.durability.split('.')[0], 100),
            cronStonesAmount: {
                nextLvl: parseNumber(level.cron_value),
                total: parseNumber(level.cron_tvalue),
            },
            effects: parseEffects(level.edescription),
            requiredItem: isLastLevel ? {
                type: BDO.Entities.Types.Item,
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

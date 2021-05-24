import { BDO, BDOCodex } from '@typings/namespaces'

/**
 * Maps BDOCodex stats to App stats.
 */
export const mapStats = (
    stats: Partial<Record<BDOCodex.StatsEnum, string>>
): BDO.Characters.Stats<string> => {
    return Object.entries({
        hp: stats.hp,
        mp: stats.mp,
        damage: stats.damage,
        defense: stats.defense,
        accuracy: stats.accuracy,
        evasion: stats.evasion,
        damageReduction: stats.dreduction,
        bonusDamage: stats.hdamage,
        bonusDefense: stats.hdefense,
        bonusAccuracy: stats.haccuracy,
        bonusEvasion: stats.hevasion,
        bonusDamageReduction: stats.hdreduction,
    }).reduce((obj, [key, value]) => {
        if (typeof value !== 'undefined')
            return { ...obj, [key]: value }
        return obj
    }, {} as BDO.Characters.Stats<string>)
}
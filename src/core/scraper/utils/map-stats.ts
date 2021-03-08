import { App, BDOCodex } from '@typings/namespaces'

/**
 * Maps BDOCodex stats to App stats.
 */
export const mapStats = (
    stats: Partial<Record<BDOCodex.StatsEnum, string>>
): App.Shared.Stats => {
    return {
        hp: stats.hp || '0',
        mp: stats.mp || '0',
        damage: stats.damage || '0',
        defense: stats.defense || '0',
        accuracy: stats.accuracy || '0',
        evasion: stats.evasion || '0',
        damageReduction: stats.dreduction || '0',
        bonusDamage: stats.hdamage || '0',
        bonusDefense: stats.hdefense || '0',
        bonusAccuracy: stats.haccuracy || '0',
        bonusEvasion: stats.hevasion || '0',
        bonusDamageReduction: stats.hdreduction || '0',
    }
}
import { BDO, BDOCodex } from '@typings/namespaces'

/**
 * Maps BDOCodex stats to App stats.
 */
export const mapStats = (
    stats: Partial<Record<BDOCodex.StatsEnum, string>>
): BDO.Player.Stats<string> => {
    return {
        hp: stats.hp || '0',
        mp: stats.mp || '0',
        damage: stats.damage || '0',
        defense: stats.defense || '0',
        accuracy: stats.accuracy || '0',
        evasion: stats.evasion || '0',
        damageReduction: stats.dreduction || '0',
        h_damage: stats.hdamage || '0',
        h_defense: stats.hdefense || '0',
        h_accuracy: stats.haccuracy || '0',
        h_evasion: stats.hevasion || '0',
        h_damageReduction: stats.hdreduction || '0',
    }
}
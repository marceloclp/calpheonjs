import { FixedArray } from '@typings/utilities'
import { StatsEnum } from './stats'

/**
 * Single enhancement level stats for Caphras enhancements.
 */
export interface SingleEnhancement {
    /** Number of caphras stones required to enhance this level. */
    readonly count: string
    /** Number of caphras stones required to enhance up to this level. */
    readonly tcount: string
    /** Stats boost gained at the current enhancement level. */
    readonly stats: Partial<Record<StatsEnum, string>>
}

/**
 * For each normal equipment upgrade, starting at +18, the equipment
 * can be upgraded 20 times using caphras stones.
 */
export type EnhancementArray = FixedArray<20, SingleEnhancement>

/**
 * The Caphras Enhancement object retrieved from the HTML.
 */
export interface Data {
    /** At +18, the enhancement for each level of Caphras upgrade. */
    readonly 18: EnhancementArray
    /** At +19, the enhancement for each level of Caphras upgrade. */
    readonly 19: EnhancementArray
    /** At +20, the enhancement for each level of Caphras upgrade. */
    readonly 20: EnhancementArray
    /** Maps the BDOCodex stats to its in-game name. */
   readonly stats_names: Partial<Record<StatsEnum, string>>
}

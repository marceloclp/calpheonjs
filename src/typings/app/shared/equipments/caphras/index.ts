import { App } from '@typings/namespaces'
import { FixedArray } from '@typings/utilities'

export interface Level {
    stats: App.Shared.Equipments.Stats
    /** The amount of Caphras stones required to perform the enhancement at each level. */
    amount: {
        /** The amount required to enhance to the next level. */
        toNextLevel: number
        /** The total amount required to enhance up to the next level. */
        toThisLevel: number
    }
}

/**
 * Equipments can be upgraded with Caphras stones after reaching an enhancement
 * level of +18 or higher using black stones.
 * 
 * An item can be upgraded 20 times with Caphras stones, and for each combination
 * of black stone upgrade level and Caphras upgrade level, it will provide different
 * stat bonuses.
 * 
 * For example, an item at 18+ and level 1 caphras enhancement, would have its stats
 * bonuses at `atPlus18[0]`.
 */
export interface Set {
    atPlus18?: FixedArray<20, Level>
    atPlus19?: FixedArray<20, Level>
    atPlus20?: FixedArray<20, Level>
}

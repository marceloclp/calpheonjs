import { BDO } from '@typings/namespaces'
import { FixedArray } from '@typings/utilities'

export interface Enhancement {
    stats: Partial<BDO.Player.Stats>
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
    /** The amount of Caphras stones required to perform the enhancement at each level. */
    amount: FixedArray<20, {
        /** The amount required to enhance to the next level. */
        nextLevel: number
        /** The total amount required to enhance up to the next level. */
        total: number
    }>
    atPlus18?: FixedArray<20, Enhancement>
    atPlus19?: FixedArray<20, Enhancement>
    atPlus20?: FixedArray<20, Enhancement>
}

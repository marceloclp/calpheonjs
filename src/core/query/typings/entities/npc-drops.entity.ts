import { Generic } from './generic.interface'
import { As } from './as.enum'

export interface NPCDrops extends Generic<As.NPCDrops> {
    /** The amount dropped. */
    quantity: number

    /** The chance percentage of dropping the item as a floating point.  */
    chance: number
}
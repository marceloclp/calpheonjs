import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { RankedCraftable } from './craftable.interface'
import { As } from './as.enum'

export interface Processing extends Generic<As.Processing>, RankedCraftable {
    /** The process used to craft the recipe (e.g., shaking, grinding). */
    process: BDO.LifeSkills.Processing.Processes
}
import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { RankedCraftable } from './craftable.interface'
import { As } from './as.enum'

export interface Recipe extends Generic<As.Recipe>, RankedCraftable {
    /** The process used to craft this recipe. */
    process: BDO.LifeSkills.Recipes.Processes
}
import { BDO } from '@typings/namespaces'
import { Generic } from './extendables/generic.interface'
import { RankedCraftable } from './extendables/craftable.interface'
import { Gradeable } from './extendables/gradeable.interface'
import { As } from './as.enum'

export interface Recipe extends Generic<As.Recipe>, RankedCraftable, Gradeable {
    /** The process used to craft this recipe (alchemy, cooking, guild processing). */
    process: BDO.LifeSkills.Recipes.Processes
}
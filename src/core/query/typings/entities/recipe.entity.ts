import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { RankedCraftable } from './craftable.interface'
import { As } from './as.enum'

export interface Recipe extends Generic<As.Recipe>, RankedCraftable {
    grade: BDO.Grade

    /** The process used to craft this recipe (alchemy, cooking, guild processing). */
    process: BDO.LifeSkills.Recipes.Processes
}
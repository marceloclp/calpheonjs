import { BDO } from '@typings/namespaces'
import { Generic } from '../generic.interface'
import { Craftable } from '../craftable.interface'

export interface Recipe extends
    Generic<BDO.Entities.Types.Recipe>,
    Craftable {

    grade: BDO.Grade

    /** The process used to craft this recipe (alchemy, cooking, guild processing). */
    process: BDO.LifeSkills.Recipes.Processes

    /**
     * The life skill level required to craft this recipe.
     * Note that a recipe of category 'alchemy' means the skill level refers
     * to the alchemy life skill as well. This field won't be available for
     * guild processing recipes.
     */
    mastery?: BDO.LifeSkills.Mastery

    /** The experience received on successful craft. */
    exp: number
}
import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { Craftable } from './craftable.interface'

export interface Processing extends
    Generic<BDO.Entities.Types.Processing>,
    Craftable {

    grade: BDO.Grade

    /** The process used to craft this recipe (grinding, shaking, etc). */
    process: BDO.LifeSkills.Processing.Processes

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
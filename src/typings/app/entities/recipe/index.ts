import { App, BDO } from '@typings/namespaces'
import { Generic } from '../generic'

export interface Recipe extends Generic<App.Entities.Types.Recipe> {
    /** The process used to craft this recipe. */
    process: BDO.Recipes.Processes
    /** The experience received on successful craft. */
    exp: number
    /**
     * The life skill level required to craft this recipe.
     * Note that a recipe of category 'alchemy' means the skill level refers
     * to the alchemy life skill as well. This field won't be available for
     * guild processing recipes.
     */
    mastery?: BDO.LifeSkills.Masteries.Mastery
    /** The list of items required to craft this recipe. */
    materials: App.Misc.Material[]
    /** The list of possible products of a successful craft. */
    products: App.Misc.Material[]
}

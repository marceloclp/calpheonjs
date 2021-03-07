import { App, BDO } from '@typings/namespaces'
import { Generic } from '../generic'

type Material =
    | (App.Refs.Item & { grade: number; amount: number })
    | (App.Refs.MaterialGroup & { amount: number })

export interface Recipe extends Generic<App.Entities.Types.Recipe> {
    /** The process used to craft this recipe. */
    process: 'alchemy' | 'cooking' | 'guildProcessing'
    /** The experience received on successful craft. */
    exp: number
    /**
     * The required skill level required to craft this recipe.
     * Note that a recipe of category 'alchemy' means the skill level refers
     * to the alchemy life skill as well. This field won't be available for
     * guild processing recipes.
     */
    skillLvl?: {
        /** The mastery name (e.g., apprentice, guru). */
        mastery: BDO.LifeSkills.Mastery
        /** The mastery level. */
        lvl: number
    }
    /** The list of items required to craft this recipe. */
    materials: Material[]
    /** The list of possible products of a successful craft. */
    products: Material[]
}

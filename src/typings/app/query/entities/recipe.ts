import { App, BDO } from '@typings/namespaces'
import { Generic } from './generic'

export interface Recipe extends Generic<App.Entities.Types.Recipe> {
    id: string

    name: string

    icon: string

    grade: number

    /** The process used to craft this recipe (alchemy, cooking, guild processing). */
    process: BDO.Recipes.Processes

    /**
     * The life skill level required to craft this recipe.
     * Note that a recipe of category 'alchemy' means the skill level refers
     * to the alchemy life skill as well. This field won't be available for
     * guild processing recipes.
     */
    mastery?: App.Shared.Mastery

    /** The experience received on successful craft. */
    exp: number
}
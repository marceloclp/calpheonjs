import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildRecipe: Builder<
    App.Entities.Types.Recipe
> = ({ $, id, type, locale }) => {
    const args: GetterArgs = { $, id, type, locale }

    const recipe: App.Entities.Recipe = {
        id,
        type: App.Entities.Types.Recipe,
        icon: Getters.getIconURL(args),
        name: Getters.getName(args),
        nameAlternative: Getters.getNameAlt(args),
        description: Getters.getDescription(args),
        process: Getters.Recipes.getProcess(args),
        exp: Getters.getExp(args),
        mastery: Getters.getMastery(args),
        materials: Getters.Recipes.getMaterials(args),
        products: Getters.Recipes.getProducts(args),
    }

    return recipe
}
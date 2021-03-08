import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildRecipe: Builder<
    App.Entities.Recipe
> = ({ $, id, type, locale }) => {
    const getterArgs: GetterArgs = { $, id, type, locale }

    const recipe: App.Entities.Recipe = {
        id,
        type: App.Entities.Types.Recipe,
        icon: Getters.getIconURL(getterArgs),
        name: Getters.getName(getterArgs),
        nameAlternative: Getters.getNameAlt(getterArgs),
        description: Getters.getDescription(getterArgs),
        process: Getters.getProcess(getterArgs),
        exp: Getters.getExp(getterArgs),
        mastery: Getters.getMastery(getterArgs),
        materials: Getters.getMaterials(getterArgs),
        products: Getters.getProducts(getterArgs),
    }

    return recipe
}
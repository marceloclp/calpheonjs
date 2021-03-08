import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildProcessing: Builder<
    App.Entities.Processing
> = ({ $, id, type, locale }) => {
    const getterArgs: GetterArgs = { $, id, type, locale }

    const recipe: App.Entities.Processing = {
        id,
        type: App.Entities.Types.Processing,
        icon: Getters.getIconURL(getterArgs),
        name: Getters.getName(getterArgs),
        nameAlternative: Getters.getNameAlt(getterArgs),
        description: Getters.getDescription(getterArgs),
        process: Getters.getProcessingProcess(getterArgs),
        exp: Getters.getExp(getterArgs),
        mastery: Getters.getMastery(getterArgs),
        materials: Getters.getMaterials(getterArgs),
        products: Getters.getProducts(getterArgs),
    }

    return recipe
}

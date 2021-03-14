import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildProcessing: Builder<
    App.Entities.Types.Processing
> = ({ $, id, type, locale }) => {
    const args: GetterArgs = { $, id, type, locale }

    const entity: App.Entities.Processing = {
        id,
        type: App.Entities.Types.Processing,
        icon: Getters.getIconURL(args),
        name: Getters.getName(args),
        description: Getters.getDescription(args),
        process: Getters.Processing.getProcess(args),
        exp: Getters.getExp(args),
        mastery: Getters.getMastery(args),
        materials: Getters.Processing.getMaterials(args),
        products: Getters.Processing.getProducts(args),
    }

    return entity
}

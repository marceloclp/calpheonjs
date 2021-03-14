import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildMaterialGroup: Builder<
    App.Entities.MaterialGroup
> = ({ $, id, type, locale }) => {
    const getterArgs: GetterArgs = { $, id, type, locale }

    const items = Getters.getMaterialGroupItems(getterArgs)

    const materialGroup: App.Entities.MaterialGroup = {
        id,
        type: App.Entities.Types.MaterialGroup,
        icon: items[0].icon,
        name: Getters.getName(getterArgs),
        items,
    }

    return materialGroup
}

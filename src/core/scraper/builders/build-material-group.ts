import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildMaterialGroup: Builder<
    App.Entities.Types.MaterialGroup
> = ({ $, id, type, locale }) => {
    const args: GetterArgs = { $, id, type, locale }
    const items = Getters.MaterialGroup.getItems(args)

    const entity: App.Entities.MaterialGroup = {
        id,
        type: App.Entities.Types.MaterialGroup,
        icon: items[0].icon,
        name: Getters.getName(args),
        items,
    }

    return entity
}

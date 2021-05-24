import { BDO } from '@typings/namespaces'
import * as Getters from '@core/scraper/getters'
import { Generic } from './generic.builder'

export const MaterialGroup = Generic
    .convert(args => {
        const items = Getters.MaterialGroup.getItems(args)
        return {
            type: BDO.Entities.Types.MaterialGroup,
            subType: undefined,
            icon: items[0].icon,
            items,
        }
    })
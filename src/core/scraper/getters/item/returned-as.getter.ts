import { BDO } from '@typings/namespaces'
import { Entities } from '../../typings'
import { GetterAs } from './getter.type'

export const getReturnedAs: GetterAs = (subType) => {
    return {
        [BDO.Items.SubTypes.Consumable]: Entities.As.ItemConsumable,
        [BDO.Items.SubTypes.Equipment]: Entities.As.ItemEquipment,
    }[subType] || Entities.As.Item
}
import { BDO } from '@typings/namespaces'
import { Consumable } from './consumable.entity'
import { Equipment } from './equipment.entity'
import { Item } from './item.entity'

export type Select<S extends BDO.Items.SubTypes> =
    S extends BDO.Items.SubTypes.Consumable
        ? Consumable
    : S extends BDO.Items.SubTypes.Equipment
        ? Equipment
    : Item
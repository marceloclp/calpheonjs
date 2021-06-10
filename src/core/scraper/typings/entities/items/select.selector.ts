import { BDO } from '@typings/namespaces'
import { Consumable } from './consumable.entity'
import { Equipment } from './equipment.entity'
import { Item } from './item.entity'

export type Select<S extends BDO.Items.SubTypes | 'F' = 'F'> = {
    [BDO.Items.SubTypes.Consumable]: Consumable
    [BDO.Items.SubTypes.CraftingMaterial]: Item
    [BDO.Items.SubTypes.Equipment]: Equipment
    [BDO.Items.SubTypes.General]: Item
    [BDO.Items.SubTypes.InstallableObject]: Item
    [BDO.Items.SubTypes.License]: Item
    [BDO.Items.SubTypes.SocketItem]: Item
    [BDO.Items.SubTypes.SpecialItem]: Item
    F: Item
}[S]
import { App } from '@typings/namespaces'
export { Consumable } from './consumable'
export { Equipment } from './equipment'
export { Item } from './item'

export type Category =
    | 'equipment'
    | 'craftingMaterial'
    | 'consumable'
    | 'general'
    | 'socketItem'
    | 'specialItem'
    | 'license'
    | 'installableObject'
    | 'unknown'

export type Select<C extends Category> =
    C extends 'equipment'
        ? App.Entities.Items.Equipment
    : C extends 'consumable'
        ? App.Entities.Items.Consumable
    : App.Entities.Items.Item

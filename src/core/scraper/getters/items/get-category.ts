import { App } from '@typings/namespaces'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from '../getters.types'

const Lookup = {
    'equipment': App.Entities.Items.Categories.Equipment,
    'crafting_materials': App.Entities.Items.Categories.CraftingMaterial,
    'consumable': App.Entities.Items.Categories.Consumable,
    'general': App.Entities.Items.Categories.General,
    'socket_item': App.Entities.Items.Categories.SocketItem,
    'special_item': App.Entities.Items.Categories.SpecialItem,
    'license': App.Entities.Items.Categories.License,
    'installable_object': App.Entities.Items.Categories.InstallableObject,
}

export const getCategory: Getter<
    App.Entities.Items.Categories
> = ({ $ }) => {
    const text = $('.category_text').text()
        .replace(/[^a-zA-Z ]/g, '')
    return Lookup[toSnakeCase(text)]
}

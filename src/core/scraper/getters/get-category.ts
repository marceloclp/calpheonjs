import { App } from '@typings/namespaces'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getters.types'

const CategoryLookup = {
    'equipment': App.Entities.Items.Categories.Equipment,
    'crafting_materials': App.Entities.Items.Categories.CraftingMaterial,
    'consumable': App.Entities.Items.Categories.Consumable,
    'general': App.Entities.Items.Categories.General,
    'socket_item': App.Entities.Items.Categories.SocketItem,
    'special_item': App.Entities.Items.Categories.SpecialItem,
    'license': App.Entities.Items.Categories.License,
    'installable_object': App.Entities.Items.Categories.InstallableObject,
    'worker': App.Entities.NPCs.Categories.Worker,
    'lodging': App.Entities.NPCs.Categories.Lodging,
}

export const getCategory: Getter<string> = ({ $ }) => {
    const text = $('.category_text').text()
        .replace(/[^a-zA-Z ]/g, '')
    return CategoryLookup[toSnakeCase(text)]
}

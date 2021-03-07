import { App } from '@typings/namespaces'
import { Getter } from './getters.types'

const CategoryLookup: Record<string, App.Entities.Categories> = {
    'equipment': 'equipment',
    'crafting_materials': 'craftingMaterial',
    'consumable': 'consumable',
    'general': 'general',
    'socket_item': 'socketItem',
    'special_item': 'specialItem',
    'license': 'license',
    'installable_object': 'installableObject',
    'worker': 'worker',
}

export const getCategory: Getter<string> = ({ $, id, type, locale }) => {
    const categoryText = $('.category_text').text()
        .replace(/[^a-zA-Z ]/g, '')
        .toLowerCase()
        .trim()
        .split(' ')
        .join('_')
    if (!(categoryText in CategoryLookup)) {
        throw new Error(
            `Unknown category ${categoryText} found for /${locale}/${type}/${id}. `
            + 'Please report this by opening an issue on the GitHub page.'
        )
    }
    return CategoryLookup[categoryText]
}

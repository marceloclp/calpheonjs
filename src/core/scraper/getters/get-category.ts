import { App } from '@typings/namespaces'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
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

export const getCategory: Getter<App.Entities.Categories> = ({ $, id, type, locale }) => {
    const text = $('.category_text').text()
        .replace(/[^a-zA-Z ]/g, '')
    const categoryText = toSnakeCase(text)
    if (!(categoryText in CategoryLookup)) {
        throw new Error(
            `Unknown category ${categoryText} found for /${locale}/${type}/${id}. ` +
            'Please report this error by opening an issue on the GitHub page.'
        )
    }
    return CategoryLookup[categoryText]
}

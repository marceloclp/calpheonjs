import { App } from '@typings/namespaces'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from '../getters.types'

const Lookup = {
    'worker': App.Entities.NPCs.Categories.Worker,
    'lodging': App.Entities.NPCs.Categories.Lodging,
}

export const getCategory: Getter<
    App.Entities.NPCs.Categories
> = ({ $ }) => {
    const text = $('.category_text').text()
        .replace(/[^a-zA-Z ]/g, '')
    return (
        Lookup[toSnakeCase(text)] ||
        App.Entities.NPCs.Categories.Other
    )
}

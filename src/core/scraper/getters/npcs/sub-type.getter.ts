import { BDO } from '@typings/namespaces'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getter.type'

const Lookup = {
    'worker': BDO.NPCs.SubTypes.Worker,
    'lodging': BDO.NPCs.SubTypes.Lodging,
}

export const getSubType: Getter<'subType'> = ({ $ }) => {
    const text = $('.category_text').text()
        .replace(/[^a-zA-Z ]/g, '')
    return Lookup[toSnakeCase(text)] || BDO.NPCs.SubTypes.Other
}

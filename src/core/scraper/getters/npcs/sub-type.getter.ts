import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { toSnakeCase } from '@helpers/utils/to-snake-case'

const Lookup = {
    'worker': BDO.NPCs.SubTypes.Worker,
    'lodging': BDO.NPCs.SubTypes.Lodging,
}

export const getSubType: Getter<BDO.NPCs.SubTypes> = ({ $ }) => {
    const text = $('.category_text').text()
        .replace(/[^a-zA-Z ]/g, '')
    return Lookup[toSnakeCase(text)] || BDO.NPCs.SubTypes.Other
}

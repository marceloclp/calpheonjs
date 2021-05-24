import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Chars } from '@typings/utilities'
import { toSnakeCase } from '@helpers/utils/to-snake-case'

const Lookup = {
    'boss': BDO.NPCs.MobTypes.Boss,
    'awakened_boss': BDO.NPCs.MobTypes.AwakenedBoss,
}

export const getMobType: Getter<
    BDO.NPCs.MobTypes | undefined
> = ({ $ }) => {
    const element = $('.titles_cell').contents().toArray().find(elem => {
        const text = $(elem).text()
        if (text.indexOf(Chars.SignLess) !== -1)
            return toSnakeCase(text) in Lookup
    })
    return Lookup[toSnakeCase($(element).text())]
}

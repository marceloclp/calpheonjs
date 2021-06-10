import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { cleanStr } from '@helpers/utils/clean-str'
import { ShortURL } from '@helpers/utils/short-url'

export const getChain: Getter<
    BDO.Refs.Quest[]
> = ({ $ }) => {
    return $('#full_quest_chain').find('a').toArray().map(elem => {
        const node = $(elem)
        const url = node.attr('href') as string
        return {
            type: BDO.Entities.Types.Quest,
            id: ShortURL.decompose(url).id,
            name: cleanStr(node.text()),
            icon: node.find('img').attr('src') as string,
        }
    })
}

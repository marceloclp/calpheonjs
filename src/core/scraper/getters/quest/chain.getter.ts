import { BDO } from '@typings/namespaces'
import { ShortURL } from '@helpers/utils/short-url'
import { cleanStr } from '@helpers/utils/clean-str'
import { createRef } from '@helpers/utils/create-ref'
import { Refs } from '../../typings'
import { Getter } from './getter.type'

export const getChain: Getter<'chain'> = ({ $ }) => {
    return $('#full_quest_chain').find('a').toArray().map(elem => {
        const node = $(elem)
        const url = node.attr('href')
        if (!url)
            return
        const { type, id } = ShortURL.decompose(url)
        if (type !== BDO.Entities.Types.Quest)
            return
        return createRef({
            id,
            type,
            name: cleanStr(node.text()),
            icon: node.find('img').attr('src') as string,
        })
    }) as unknown as Refs.Quest[]
}

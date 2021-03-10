import { App } from '@typings/namespaces'
import { cleanStr } from '@helpers/utils/clean-str'
import { decomposeShortURL } from '@helpers/utils/short-url'
import { Getter } from './getters.types'

export const getQuestChain: Getter<
    App.Refs.Quest[]
> = ({ $ }) => {
    return $('#full_quest_chain').find('a').toArray().map(elem => {
        const node = $(elem)
        const url = node.attr('href') as string
        return {
            type: App.Entities.Types.Quest,
            id: decomposeShortURL(url).id,
            name: cleanStr(node.text()),
            icon: node.find('img').attr('src') as string,
        }
    })
}

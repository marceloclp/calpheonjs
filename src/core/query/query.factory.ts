import fetch from 'node-fetch'
import { App } from '@typings/namespaces'
import { DefaultLocale } from '@config/constants'
import { buildQueryURL } from './utils/build-query-url'
import { SelectBuilder } from './builders'

interface Options {
    readonly locale?: App.Locales
}

interface Query {
    (type: App.Query.Responses.Types.QuestsByReward, itemId: string, options?: Options): Promise<any>
}

export const QueryFactory: Query = async (type, id, options) => {
    const locale = options?.locale || DefaultLocale
    const url = buildQueryURL({
        a: 'quests',
        type: 'questrewards',
        id,
        l: locale,
    })

    const response = await fetch(url)
    const body = await response.text()

    return SelectBuilder(type)(body)
}

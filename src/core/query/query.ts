import fetch from 'node-fetch'
import { Modes } from '@core/query/typings'
import { QueryURL } from '@core/query/utils/query-url'
import { BDOCodex } from '@typings/namespaces'
import * as Builders from '@core/query/builders'
import { DefaultLocale } from '@config/constants'
import { Entities } from '@core/query/typings'

export const Query: {
    (mode: Modes.QuestReward, itemId: string): Promise<Entities.Quest[]>
} = async (type: Modes, id: string) => {
    const locale = DefaultLocale
    const response = await fetch(
        QueryURL.compose({ mode: type, id })
    )
    const body = await response.json()
    const data = body as BDOCodex.Query.Response<any>

    const builder = {
        [Modes.QuestReward]: Builders.Quest,
    }[type]

    return data.aaData.map(data => {
        return builder.build(data, { locale })
    })
}
import fetch from 'node-fetch'
import { Types } from '@core/query/typings'
import { buildQueryURL } from '@core/query/utils/build-query-url'
import { BDOCodex } from '@typings/namespaces'
import * as Builders from '@core/query/builders'
import { DefaultLocale } from '@config/constants'
import { Entities } from '@core/query/typings'

export const Query: {
    (type: Types.QuestReward, itemId: string): Promise<Entities.Quest[]>
} = async (type: Types, id: string) => {
    const locale = DefaultLocale
    const response = await fetch(
        buildQueryURL({ type, id })
    )
    const body = await response.json()
    const data = body as BDOCodex.Queries.Response.Wrapper<any>

    const builder = {
        [Types.QuestReward]: Builders.Quest,
    }[type]

    return data.aaData.map(data => {
        return builder.build(data, { locale })
    })
}
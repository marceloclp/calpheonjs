import fetch from 'node-fetch'
import { QueryTypes } from '@core/query/typings'
import { QueryURL } from '@core/query/utils/build-query-url'
import { BDOCodex } from '@typings/namespaces'
import * as Builders from '@core/query/builders'
import { DefaultLocale } from '@config/constants'
import { Entities } from '@core/query/typings'

export const Query: {
    (type: QueryTypes.QuestReward, itemId: string): Promise<Entities.Quest[]>
} = async (type: QueryTypes, id: string) => {
    const locale = DefaultLocale
    const response = await fetch(
        QueryURL.compose({ type, id })
    )
    const body = await response.json()
    const data = body as BDOCodex.Query.Response<any>

    const builder = {
        [QueryTypes.QuestReward]: Builders.Quest,
    }[type]

    return data.aaData.map(data => {
        return builder.build(data, { locale })
    })
}
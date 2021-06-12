import fetch from 'node-fetch'
import { Modes } from '@core/query/typings'
import { QueryURL } from '@core/query/utils/query-url'
import { BDOCodex } from '@typings/namespaces'
import { DefaultLocale } from '@config/constants'
import { Builder } from './builders'

export const Query: {
    // (mode: Modes.QuestReward, itemId: string): Promise<Entities.Quest[]>
} = async (mode: Modes, id: string) => {
    const locale = DefaultLocale
    const response = await fetch(
        QueryURL.compose({ mode, id, locale })
    )
    const body = await response.json()
    const data = body as BDOCodex.Query.Response<any>

    return data.aaData.map(data => Builder(mode, data))
}
import { App } from '@typings/namespaces'
import { BaseUrl, DefaultLocale } from '@config/constants'
import { Types } from '@core/query/typings'

const init = (params: { a: string, type: string }, key = 'id') =>
    (id: string) => ({ ...params, [key]: id })
const QueryFnLookup = {
    [Types.QuestReward]: init({ a: 'quests', type: 'questrewards' })
}

interface Arguments {
    readonly type: Types
    readonly id: string
    readonly locale?: App.Locales
}

export const buildQueryURL = ({ type, id, locale = DefaultLocale }: Arguments) => {
    return BaseUrl + '/query.php?' + Object
        .entries({ ...QueryFnLookup[type](id), l: locale })
        .reduce((query, [key, value]) => {
            return value ? `${query}&${key}=${value}` : query
        }, '')
}

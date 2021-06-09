import { App } from '@typings/namespaces'
import { BaseUrl, DefaultLocale } from '@config/constants'
import { Types } from '@core/query/typings'

const init = (params: { a: string, type: string }, key = 'id') =>
    (id: string) => ({ ...params, [key]: id })
const QueryFnLookup = {
    [Types.QuestReward]: init({ a: 'quests', type: 'questrewards' }),
    [Types.RecipeMaterial]: init({ a: 'recipes', type: 'material' }, 'item_id'),
}

interface Arguments {
    readonly type: Types
    readonly id: string
    readonly locale?: App.Locales
}

export const buildQueryURL = ({ id, type, locale = DefaultLocale }: Arguments) => {
    if (!(type in QueryFnLookup)) {
        throw new Error('buildQueryURL() is missing support for type ' + type)
    }
    return BaseUrl + '/query.php?' + Object
        .entries({ ...QueryFnLookup[type](id), l: locale })
        .reduce((query, [key, value]) => {
            return value ? `${query}&${key}=${value}` : query
        }, '')
}

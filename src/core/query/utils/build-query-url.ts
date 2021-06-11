import { App, BDOCodex } from '@typings/namespaces'
import { BaseUrl, DefaultLocale } from '@config/constants'
import { QueryTypes } from '@core/query/typings'
import { QueryTypeLookup } from './query-type.lookup'

interface QueryURLDescriptor {
    readonly id: string
    readonly type: QueryTypes
    readonly locale?: App.Locales
}

export class QueryURL {
    private static factory = (key: string, params: BDOCodex.Query.Descriptor) =>
        (id: string) => ({ ...params, [key]: id })

    /**
     * Queries use an inconsistent naming for the entity id that is being queried.
     * Sometimes it's reffered as `item_id`, other times as `id`, and so on.
     */
    private static keyLookup: Record<QueryTypes, string> = {
        [QueryTypes.QuestReward]: 'id',
        [QueryTypes.RecipeMaterial]: 'item_id',
        [QueryTypes.ProcessingMaterial]: 'item_id',
        [QueryTypes.DesignMaterial]: 'item_id',
    }

    private static lookup = Object
        .entries(QueryURL.keyLookup)
        .reduce((obj, [type, key]) => {
            const params = QueryTypeLookup
                .toCodexDescriptor(type as QueryTypes)
            return { ...obj, [type]: QueryURL.factory(key, params) }
        }, {} as Record<QueryTypes, (id: string) => {}>)

    static compose({ id, type, locale = DefaultLocale }: QueryURLDescriptor) {
        if (!(type in QueryURL.lookup)) {
            throw new Error(
                `Attempted to compose a query url with an invalid query type ${type}. ` +
                `Please report this error by opening an issue on the GitHub page.`
            )
        }
        return BaseUrl + '/query.php?' + Object
            .entries({ ...QueryURL.lookup[type](id), l: locale })
            .reduce((str, [key, value]) => {
                return value ? `${str}&${key}=${value}` : str
            }, '')
    }
}
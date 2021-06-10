import { App, BDOCodex } from '@typings/namespaces'
import { QueryableEntity, QueryTypes } from '@core/query/typings'
import { QueryTypeLookup } from '@core/query/utils/query-type.lookup'
import { getReturnType } from '@core/query/utils/get-return-type'

interface Arguments {
    readonly id: string
    readonly type: QueryTypes
    readonly returns: QueryableEntity
    readonly locale: App.Locales
}

export const decomposeFileKey = (fileKey: string): Arguments => {
    const [a, type, fileId, locale] = fileKey.split('.') as [
        BDOCodex.Query.As,
        BDOCodex.Query.Types,
        string,
        App.Locales,
    ]
    const queryType = QueryTypeLookup
        .toQueryType({ a, type })
    return {
        id: fileId.replace(/-/g, '/'),
        type: queryType,
        returns: getReturnType(queryType),
        locale,
    }
}
import { App, BDOCodex } from '@typings/namespaces'
import { QueryableEntity, Types } from '@core/query/typings'
import { QueryTypeLookup } from '@core/query/utils/query-type.lookup'
import { getReturnType } from '@core/query/utils/get-return-type'

interface Arguments {
    readonly id: string
    readonly type: Types
    readonly returns: QueryableEntity
    readonly locale: App.Locales
}

export const decomposeFileKey = (fileKey: string): Arguments => {
    const [, codexQueryType, fileId, locale] = fileKey.split('.') as [
        string,
        BDOCodex.Queries.Types,
        string,
        App.Locales,
    ]
    const type = QueryTypeLookup.toAppFormat(codexQueryType)

    return {
        id: fileId.replace(/-/g, '/'),
        type,
        returns: getReturnType(type),
        locale,
    }
}
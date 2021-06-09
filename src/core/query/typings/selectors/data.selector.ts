import { BDO, BDOCodex } from '@typings/namespaces'
import { QueryableEntity } from '@core/query/typings'

/** Maps the return type to the response object returned by the query. */
export type Data<T extends QueryableEntity | 'default' = 'default'> = {
    [BDO.Entities.Types.Quest]: BDOCodex.Query.Responses.Quest
    [BDO.Entities.Types.Recipe]: BDOCodex.Query.Responses.Recipe
    default: BDOCodex.Query.Responses.Generic
}[T]
import { BDO, BDOCodex } from '@typings/namespaces'
import { QueryableEntity } from '@core/query/typings'

// TODO: rename to Response
/** Maps the return type to the response object returned by the query. */
export type Data<T extends QueryableEntity | 'F' = 'F'> = {
    [BDO.Entities.Types.Quest]: BDOCodex.Query.Responses.Quest
    [BDO.Entities.Types.Recipe]: BDOCodex.Query.Responses.Recipe
    F: BDOCodex.Query.Responses.Generic
}[T]
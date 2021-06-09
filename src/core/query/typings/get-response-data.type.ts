import { BDO, BDOCodex } from '@typings/namespaces'
import { QueryableEntity } from './queryable-entity.type'

/** Maps the return type to the response object returned by the query. */
export type GetResponseData<T extends QueryableEntity> = {
    [BDO.Entities.Types.Quest]: BDOCodex.Query.Responses.Quest
    [BDO.Entities.Types.Recipe]: BDOCodex.Query.Responses.Recipe
}[T]

import { BDO, BDOCodex } from '@typings/namespaces'
import { QueryableEntity } from '@core/query/typings'

/**
 * Maps the expected entity type to the corresponding
 * query response interface.
 */
export type Response<T extends QueryableEntity | 'F' = 'F'> = {
    [BDO.Entities.Types.Quest]: BDOCodex.Query.Responses.Quest
    [BDO.Entities.Types.Recipe]: BDOCodex.Query.Responses.Recipe
    F: BDOCodex.Query.Responses.Generic
}[T]
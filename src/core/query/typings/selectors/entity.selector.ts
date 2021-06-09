import { BDO } from '@typings/namespaces'
import { Entities, QueryableEntity } from '@core/query/typings'

export type Entity<T extends QueryableEntity | 'default' = 'default'> = {
    [BDO.Entities.Types.Quest]: Entities.Quest
    [BDO.Entities.Types.Recipe]: Entities.Recipe
    default: Entities.Generic
}[T]
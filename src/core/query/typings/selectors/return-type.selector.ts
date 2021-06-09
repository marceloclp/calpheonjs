import { BDO } from '@typings/namespaces'
import { Types } from '@core/query/typings'

/** Maps the query type to the expected return type. */
export type ReturnType<T extends Types | 'default' = 'default'> = {
    [Types.QuestReward]: BDO.Entities.Types.Item
    [Types.RecipeMaterial]: BDO.Entities.Types.Recipe
    default: BDO.Entities.Types
}[T]
import { Types } from '@core/query/typings'
import { BDO } from '@typings/namespaces'

/**
 * Maps the query type to the corresponding entity type that is
 * used to perform the query.
 * 
 * Many types may map to the same queried type.
 * 
 * For example, both recipe materials and quest rewards receive
 * items as the queried types.
 */
export type QueriedType<T extends Types | 'F' = 'F'> = {
    [Types.RecipeMaterial]: BDO.Entities.Types.Item
    [Types.QuestReward]: BDO.Entities.Types.Item
    F: BDO.Entities.Types
}[T]
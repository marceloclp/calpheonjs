import { BDO } from '@typings/namespaces'
import { Types } from '@core/query/typings'

/**
 * Maps the query type to the corresponding entity type that
 * will be returned from query.
 * 
 * Many types may map to the same return type.
 * 
 * For example, a recipe material and a recipe product will
 * both map to a return type of recipes.
 */
export type ReturnType<T extends Types | 'F' = 'F'> = {
    [Types.RecipeMaterial]: BDO.Entities.Types.Recipe
    [Types.QuestReward]: BDO.Entities.Types.Quest
    F: BDO.Entities.Types
}[T]
import { BDO } from '@typings/namespaces'
import { Entities, QueryableEntity } from '@core/query/typings'

/**
 * Maps the queryable entity types to their corresponding
 * entity interfaces.
 * 
 * Many types may map to the same interface.
 * 
 * For example, a recipe material and a recipe product will
 * both map to a Recipe entity.
 */
export type ReturnEntity<T extends QueryableEntity | 'F' = 'F'> = {
    [BDO.Entities.Types.Quest]: Entities.Quest
    [BDO.Entities.Types.Recipe]: Entities.Recipe
    F: Entities.Generic
}[T]
import { BDO, BDOCodex } from '@typings/namespaces'
import { BuildableEntity } from './buildable-entity.type'
import { Modes } from './modes.enum'
import { Entities } from '.'

/**
 * Maps the query mode to the corresponding entity type that
 * will be returned from the query.
 * 
 * Many modes may map to the same return type.
 * 
 * For example, a recipe material and a recipe product will
 * both map to a return type of recipes.
 */
export type ReturnType<M extends Modes | 'F' = 'F'> = {
    [Modes.QuestReward]: BDO.Entities.Types.Quest
    [Modes.RecipeMaterial]: BDO.Entities.Types.Recipe
    [Modes.RecipeProduct]: BDO.Entities.Types.Recipe
    [Modes.ProcessingMaterial]: BDO.Entities.Types.Processing
    [Modes.ProcessingProduct]: BDO.Entities.Types.Processing
    [Modes.DesignMaterial]: BDO.Entities.Types.Design
    [Modes.DesignProduct]: BDO.Entities.Types.Design
    F: BDO.Entities.Types
}[M]

/**
 * Maps the query mode to the corresponding entity type that is
 * used to perform the query.
 * 
 * Many modes may map to the same queried type.
 * 
 * For example, both recipe materials and quest rewards receive
 * items as the queried types.
 */
export type QueriedType<M extends Modes | 'F' = 'F'> = {
    [Modes.QuestReward]: BDO.Entities.Types.Item
    [Modes.RecipeMaterial]: BDO.Entities.Types.Item
    [Modes.RecipeProduct]: BDO.Entities.Types.Item
    [Modes.ProcessingMaterial]: BDO.Entities.Types.Item
    [Modes.ProcessingProduct]: BDO.Entities.Types.Item
    [Modes.DesignMaterial]: BDO.Entities.Types.Item
    [Modes.DesignProduct]: BDO.Entities.Types.Item
    F: BDO.Entities.Types
}[M]

/**
 * Maps the buildable entity types to their corresponding
 * entity interfaces.
 */
export type ReturnEntity<BE extends BuildableEntity | 'F' = 'F'> = {
    [BDO.Entities.Types.Quest]: Entities.Quest
    [BDO.Entities.Types.Recipe]: Entities.Recipe
    [BDO.Entities.Types.Processing]: Entities.Processing
    [BDO.Entities.Types.Design]: Entities.Design
    F: Entities.Generic
}[BE]

/**
 * Maps the expected entity type to the corresponding
 * query response interface.
 */
export type Response<BE extends BuildableEntity | 'F' = 'F'> = {
    [BDO.Entities.Types.Quest]: BDOCodex.Query.Responses.Quest
    [BDO.Entities.Types.Recipe]: BDOCodex.Query.Responses.Recipe
    [BDO.Entities.Types.Processing]: BDOCodex.Query.Responses.Processing
    [BDO.Entities.Types.Design]: BDOCodex.Query.Responses.Design
    F: BDOCodex.Query.Responses.Generic
}[BE]
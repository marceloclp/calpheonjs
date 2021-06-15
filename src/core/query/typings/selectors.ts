import { BDO, BDOCodex } from '@typings/namespaces'
import { WithFallback } from '@typings/utilities'
import { Entities, Modes } from './index'

/**
 * Maps the query mode to the corresponding entity type that is
 * used to perform the query.
 * 
 * Many modes may map to the same queried type.
 */
export type QueriedType<M extends Modes = Modes> = {
    [Modes.QuestReward]: BDO.Entities.Types.Item
    [Modes.RecipeMaterial]: BDO.Entities.Types.Item
    [Modes.RecipeProduct]: BDO.Entities.Types.Item
    [Modes.ProcessingMaterial]: BDO.Entities.Types.Item
    [Modes.ProcessingProduct]: BDO.Entities.Types.Item
    [Modes.DesignMaterial]: BDO.Entities.Types.Item
    [Modes.DesignProduct]: BDO.Entities.Types.Item
    [Modes.SoldByNPC]: BDO.Entities.Types.Item
    [Modes.DroppedByNPC]: BDO.Entities.Types.Item
}[M]

/**
 * Maps the query mode to the corresponding entity type that is
 * returned from the query, which is used to check the shape of
 * the entity object in runtime.
 * 
 * Many modes may map to the same return type.
 */
export type ReturnedAs<M extends Modes = Modes> = {
    [Modes.QuestReward]: Entities.As.Quest
    [Modes.RecipeMaterial]: Entities.As.Recipe
    [Modes.RecipeProduct]: Entities.As.Recipe
    [Modes.ProcessingMaterial]: Entities.As.Processing
    [Modes.ProcessingProduct]: Entities.As.Processing
    [Modes.DesignMaterial]: Entities.As.Design
    [Modes.DesignProduct]: Entities.As.Design
    [Modes.SoldByNPC]: Entities.As.NPCSells
    [Modes.DroppedByNPC]: Entities.As.NPCDrops
}[M]

/**
 * Maps the query mode to the corresponding type of entity that
 * will be returned on the response.
 * 
 * This is used to strongly type the scrape method of the returned
 * objects when the type is known.
 */
export type BDOType<A extends Entities.As = Entities.As> = {
    [Entities.As.Recipe]: BDO.Entities.Types.Recipe
    [Entities.As.Processing]: BDO.Entities.Types.Processing
    [Entities.As.Design]: BDO.Entities.Types.Design
    [Entities.As.NPCDrops]: BDO.Entities.Types.NPC
    [Entities.As.NPCSells]: BDO.Entities.Types.NPC
    [Entities.As.Quest]: BDO.Entities.Types.Quest
}[A]

export type Entity<A extends WithFallback<Entities.As> = 'F'> = {
    [Entities.As.Recipe]: Entities.Recipe
    [Entities.As.Processing]: Entities.Processing
    [Entities.As.Design]: Entities.Design
    [Entities.As.NPCDrops]: Entities.Generic
    [Entities.As.NPCSells]: Entities.NPCSells
    [Entities.As.Quest]: Entities.Quest
    F: Entities.Generic
}[A]

/**
 * Maps the query mode to the corresponding response from the
 * scraped query url.
 * 
 * Many modes may map to the same type of response.
 */
 export type Response<A extends WithFallback<Entities.As> = 'F'> = {
    [Entities.As.Recipe]: BDOCodex.Query.Responses.Recipe
    [Entities.As.Processing]: BDOCodex.Query.Responses.Processing
    [Entities.As.Design]: BDOCodex.Query.Responses.Design
    [Entities.As.NPCDrops]: BDOCodex.Query.Responses.Generic
    [Entities.As.NPCSells]: BDOCodex.Query.Responses.NPCSells
    [Entities.As.Quest]: BDOCodex.Query.Responses.Quest
    F: BDOCodex.Query.Responses.Generic
}[A]
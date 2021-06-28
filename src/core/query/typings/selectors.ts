import { BDO, BDOCodex } from '@typings/namespaces'
import { Fallback, WithFallback } from '@typings/utilities'
import { Entities, Modes } from './index'

/**
 * Maps the query mode to the corresponding entity type that is
 * returned from the query, which is used to check the shape of
 * the entity object in runtime.
 * 
 * Many modes may map to the same return type.
 */
export type ReturnedAs<M extends Modes = Modes> = {
    [Modes.QuestReward]: Entities.As.Quest
    [Modes.ExchangeList]: Entities.As.ExchangeItem
    [Modes.RecipeMaterial]: Entities.As.Recipe
    [Modes.RecipeProduct]: Entities.As.Recipe
    [Modes.PatternMaterial]: Entities.As.Pattern
    [Modes.PatternProduct]: Entities.As.Pattern
    [Modes.ProcessingMaterial]: Entities.As.Processing
    [Modes.ProcessingProduct]: Entities.As.Processing
    [Modes.DesignMaterial]: Entities.As.Design
    [Modes.DesignProduct]: Entities.As.Design
    [Modes.SoldByNPC]: Entities.As.NPC
    [Modes.DroppedByNPC]: Entities.As.DropNPC
    [Modes.DroppedByNode]: Entities.As.Node
    [Modes.GatheredFrom]: Entities.As.DropGatherable
    [Modes.GiftMaterial]: Entities.As.NPC
}[M]
export type ReturnedEntity<M extends Modes = Modes> =
    Entity<ReturnedAs<M>>

/**
 * Maps the query mode to the corresponding type of entity that
 * will be returned on the response.
 * 
 * This is used to strongly type the scrape method of the returned
 * objects when the type is known.
 */
export type BDOType<A extends Entities.As = Entities.As> = {
    [Entities.As.Design]: BDO.Entities.Types.Design
    [Entities.As.DropNPC]: BDO.Entities.Types.NPC
    [Entities.As.DropGatherable]: BDO.Entities.Types.Gatherable
    [Entities.As.ExchangeItem]: BDO.Entities.Types.Item
    [Entities.As.Node]: BDO.Entities.Types.Node
    [Entities.As.NPC]: BDO.Entities.Types.NPC
    [Entities.As.Pattern]: BDO.Entities.Types.Pattern
    [Entities.As.Processing]: BDO.Entities.Types.Processing
    [Entities.As.Quest]: BDO.Entities.Types.Quest
    [Entities.As.Recipe]: BDO.Entities.Types.Recipe
}[A]

export type Entity<A extends WithFallback<Entities.As> = Fallback> = {
    [Entities.As.Design]: Entities.Design
    [Entities.As.DropNPC]: Entities.DropNPC
    [Entities.As.DropGatherable]: Entities.DropGatherable
    [Entities.As.ExchangeItem]: Entities.ExchangeItem
    [Entities.As.Node]: Entities.Node
    [Entities.As.NPC]: Entities.NPC
    [Entities.As.Pattern]: Entities.Pattern
    [Entities.As.Processing]: Entities.Processing
    [Entities.As.Quest]: Entities.Quest
    [Entities.As.Recipe]: Entities.Recipe
    Fallback: Entities.Generic
}[A]

/**
 * Maps the query mode to the corresponding response from the
 * scraped query url.
 * 
 * Many modes may map to the same type of response.
 */
 export type Response<A extends WithFallback<Entities.As> = Fallback> = {
    [Entities.As.Design]: BDOCodex.Query.Responses.Design
    [Entities.As.DropNPC]: BDOCodex.Query.Responses.Drop
    [Entities.As.DropGatherable]: BDOCodex.Query.Responses.Drop
    [Entities.As.ExchangeItem]: BDOCodex.Query.Responses.ExchangeItem
    [Entities.As.Node]: BDOCodex.Query.Responses.Node
    [Entities.As.NPC]: BDOCodex.Query.Responses.NPC
    [Entities.As.Pattern]: BDOCodex.Query.Responses.Pattern
    [Entities.As.Processing]: BDOCodex.Query.Responses.Processing
    [Entities.As.Quest]: BDOCodex.Query.Responses.Quest
    [Entities.As.Recipe]: BDOCodex.Query.Responses.Recipe
    Fallback: BDOCodex.Query.Responses.Generic
}[A]

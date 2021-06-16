import { BDO, BDOCodex } from '@typings/namespaces'
import { WithFallback } from '@typings/utilities'
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
    [Entities.As.ExchangeItem]: BDO.Entities.Types.Item
    [Entities.As.Recipe]: BDO.Entities.Types.Recipe
    [Entities.As.Pattern]: BDO.Entities.Types.Pattern
    [Entities.As.Processing]: BDO.Entities.Types.Processing
    [Entities.As.Design]: BDO.Entities.Types.Design
    [Entities.As.NPCDrops]: BDO.Entities.Types.NPC
    [Entities.As.NPCSells]: BDO.Entities.Types.NPC
    [Entities.As.Quest]: BDO.Entities.Types.Quest
}[A]

export type Entity<A extends WithFallback<Entities.As> = 'F'> = {
    [Entities.As.ExchangeItem]: Entities.ExchangeItem
    [Entities.As.Recipe]: Entities.Recipe
    [Entities.As.Pattern]: Entities.Pattern
    [Entities.As.Processing]: Entities.Processing
    [Entities.As.Design]: Entities.Design
    [Entities.As.NPCDrops]: Entities.NPCDrops
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
    [Entities.As.ExchangeItem]: BDOCodex.Query.Responses.ExchangeItem
    [Entities.As.Recipe]: BDOCodex.Query.Responses.Recipe
    [Entities.As.Pattern]: BDOCodex.Query.Responses.Pattern
    [Entities.As.Processing]: BDOCodex.Query.Responses.Processing
    [Entities.As.Design]: BDOCodex.Query.Responses.Design
    [Entities.As.NPCDrops]: BDOCodex.Query.Responses.NPCDrops
    [Entities.As.NPCSells]: BDOCodex.Query.Responses.NPCSells
    [Entities.As.Quest]: BDOCodex.Query.Responses.Quest
    F: BDOCodex.Query.Responses.Generic
}[A]
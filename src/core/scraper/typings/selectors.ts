import { BDO } from '@typings/namespaces'
import { Fallback, WithFallback } from '@typings/utilities'
import { Entities, ScrapableEntity } from './index'

/**
 * Maps the scrapable entities to their primary entity objects.
 */
export type Entity<A extends WithFallback<Entities.As> = Fallback> = {
    [Entities.As.Item]: Entities.Item
    [Entities.As.ItemConsumable]: Entities.ItemConsumable
    [Entities.As.ItemEquipment]: Entities.ItemEquipment
    [Entities.As.Knowledge]: Entities.Knowledge
    [Entities.As.MaterialGroup]: Entities.MaterialGroup
    [Entities.As.NPC]: Entities.NPC
    [Entities.As.NPCOther]: Entities.NPCOther
    [Entities.As.NPCWorker]: Entities.NPCWorker
    [Entities.As.Processing]: Entities.Processing
    [Entities.As.Quest]: Entities.Quest
    [Entities.As.Recipe]: Entities.Recipe
    Fallback: Entities.Generic
}[A]

/**
 * Maps the scraper return object runtime identifier to the
 * type of entity that will be returned on the response.
 */
export type BDOType<A extends Entities.As> = {
    [Entities.As.Item]: BDO.Entities.Types.Item
    [Entities.As.ItemConsumable]: BDO.Entities.Types.Item
    [Entities.As.ItemEquipment]: BDO.Entities.Types.Item
    [Entities.As.Knowledge]: BDO.Entities.Types.Knowledge
    [Entities.As.MaterialGroup]: BDO.Entities.Types.MaterialGroup
    [Entities.As.NPC]: BDO.Entities.Types.NPC
    [Entities.As.NPCOther]: BDO.Entities.Types.NPC
    [Entities.As.NPCWorker]: BDO.Entities.Types.NPC
    [Entities.As.Processing]: BDO.Entities.Types.Processing
    [Entities.As.Quest]: BDO.Entities.Types.Quest
    [Entities.As.Recipe]: BDO.Entities.Types.Recipe
}[A]

/**
 * Maps the BDO entity types to the generic return types.
 * 
 * This is required in order to apply the initial builder,
 * and then later apply any other builder that is built upon
 * the primary one.
 * 
 * For example, given an entity of type Item and sub type Consumable:
 *  1. It's initially built by the Generic builder.
 *  2. It's then extended by the ItemGeneric builder.
 *  3. Finally, it's once again extended by the ItemConsumable builder.
 */
export type ReturnedAs<T extends ScrapableEntity> = {
    [BDO.Entities.Types.Item]: Entities.As.Item
    [BDO.Entities.Types.Knowledge]: Entities.As.Knowledge
    [BDO.Entities.Types.MaterialGroup]: Entities.As.MaterialGroup
    [BDO.Entities.Types.NPC]: Entities.As.NPC
    [BDO.Entities.Types.Processing]: Entities.As.Processing
    [BDO.Entities.Types.Quest]: Entities.As.Quest
    [BDO.Entities.Types.Recipe]: Entities.As.Recipe
}[T]
export type ReturnedEntity<T extends ScrapableEntity> =
    Entity<ReturnedAs<T>>

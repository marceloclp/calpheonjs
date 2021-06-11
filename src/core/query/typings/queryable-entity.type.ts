import { BDO } from '@typings/namespaces'

/**
 * Entities that can be built by the query builders.
 * 
 * Entities that are not listed here are not yet queryable as
 * they can't be built into a proper response.
 */
// TODO: this is wrong, the only queryable entity is Item right now.
// TODO: drop this and just use BDO.Entities.Types instead
// TODO: enforce correct typing through the Query function
export type QueryableEntity =
    | BDO.Entities.Types.Quest
    | BDO.Entities.Types.Recipe
    | BDO.Entities.Types.Processing
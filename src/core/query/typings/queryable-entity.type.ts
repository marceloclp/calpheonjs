import { BDO } from '@typings/namespaces'

/**
 * Entities that can be built by the query builders.
 * 
 * Entities that are not listed here are not yet queryable as
 * they can't be built into a proper response.
 */
export type QueryableEntity = BDO.Entities.Types.Quest
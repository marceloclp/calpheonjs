import { BDO } from '@typings/namespaces'

/**
 * Entities that can currently be built by the query builders.
 */
export type BuildableEntity =
    | BDO.Entities.Types.Quest
    | BDO.Entities.Types.Recipe
    | BDO.Entities.Types.Processing
    | BDO.Entities.Types.Design
import { BDO } from '@typings/namespaces'
import { Entities, ScrapableEntity, Selectors } from '../typings'

export const BDO_TYPE_TO_SCRAPER_TYPE: {
    [T in ScrapableEntity]: Selectors.ReturnedAs<T>
} = {
    [BDO.Entities.Types.Item]: Entities.As.Item,
    [BDO.Entities.Types.Knowledge]: Entities.As.Knowledge,
    [BDO.Entities.Types.MaterialGroup]: Entities.As.MaterialGroup,
    [BDO.Entities.Types.NPC]: Entities.As.NPC,
    [BDO.Entities.Types.Processing]: Entities.As.Processing,
    [BDO.Entities.Types.Quest]: Entities.As.Quest,
    [BDO.Entities.Types.Recipe]: Entities.As.Recipe,
}
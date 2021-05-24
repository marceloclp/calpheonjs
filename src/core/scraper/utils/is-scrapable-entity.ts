import { BDO } from '@typings/namespaces'
import { ScrapableEntity } from '@core/scraper/typings'

export const isScrapableEntity = (type: BDO.Entities.Types): type is ScrapableEntity => {
    return [
        BDO.Entities.Types.Item,
        BDO.Entities.Types.Knowledge,
        BDO.Entities.Types.MaterialGroup,
        BDO.Entities.Types.NPC,
        BDO.Entities.Types.Processing,
        BDO.Entities.Types.Quest,
        BDO.Entities.Types.Recipe,
    ].includes(type)
}
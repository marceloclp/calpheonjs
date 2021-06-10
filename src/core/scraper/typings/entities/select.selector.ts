import { BDO } from '@typings/namespaces'
import { Entities, ScrapableEntity } from '@core/scraper/typings'

export type Select<
    T extends ScrapableEntity,
    S extends BDO.Entities.SubType<T> = BDO.Entities.SubType<T>
> = {
[BDO.Entities.Types.Item]: S extends BDO.Items.SubTypes
    ? Entities.Items.Select<S>
    : Entities.Items.Item
[BDO.Entities.Types.Knowledge]: Entities.Knowledge
[BDO.Entities.Types.MaterialGroup]: Entities.MaterialGroup
[BDO.Entities.Types.NPC]: S extends BDO.NPCs.SubTypes
    ? Entities.NPCs.Select<S>
    : Entities.NPCs.NPC
[BDO.Entities.Types.Processing]: Entities.Processing
[BDO.Entities.Types.Quest]: Entities.Quest
[BDO.Entities.Types.Recipe]: Entities.Recipe
}[T]

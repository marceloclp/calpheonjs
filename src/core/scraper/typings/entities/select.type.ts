import { BDO } from '@typings/namespaces'
import { Entities } from '@core/scraper/typings'
import { Generic } from './generic.interface'

export type Select<
    T extends BDO.Entities.Types,
    S extends BDO.Entities.GetSubType<T> = BDO.Entities.GetSubType<T>,
> =
    T extends BDO.Entities.Types.Item
        ? S extends BDO.Entities.GetSubType<T>
            ? Entities.Items.Select<S>
        : Entities.Items.Item
    : T extends BDO.Entities.Types.Knowledge
        ? Entities.Knowledge
    : T extends BDO.Entities.Types.MaterialGroup
        ? Entities.MaterialGroup
    : T extends BDO.Entities.Types.NPC
        ? S extends BDO.Entities.GetSubType<T>
            ? Entities.NPCs.Select<S>
        : Entities.NPCs.Other
    : T extends BDO.Entities.Types.Processing
        ? Entities.Processing
    : T extends BDO.Entities.Types.Quest
        ? Entities.Quest
    : T extends BDO.Entities.Types.Recipe
        ? Entities.Recipe
    : Generic<T>

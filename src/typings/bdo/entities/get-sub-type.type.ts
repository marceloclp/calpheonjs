import { BDO } from '@typings/namespaces'

export type GetSubType<T extends BDO.Entities.Types> =
    T extends BDO.Entities.Types.Item
        ? BDO.Items.SubTypes
    : T extends BDO.Entities.Types.NPC
        ? BDO.NPCs.SubTypes
    : undefined
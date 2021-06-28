import { BDO } from '@typings/namespaces'
import { Ref } from '@helpers/utils/create-ref'

export type Item<E = {}> =
    Ref<BDO.Entities.Types.Item, E>
export type MaterialGroup<E = {}> =
    Ref<BDO.Entities.Types.MaterialGroup, E>
export type NPC<E = {}> =
    Ref<BDO.Entities.Types.NPC, E>

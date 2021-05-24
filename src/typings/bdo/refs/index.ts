import { BDO } from '@typings/namespaces'
import { Ref } from './ref.interface'

export type Item<E = {}> = Ref<BDO.Entities.Types.Item, E>

export type Knowledge<E = {}> = Ref<BDO.Entities.Types.Knowledge, E>

export type NPC<E = {}> = Ref<BDO.Entities.Types.NPC, E>

export type MaterialGroup<E = {}> = Ref<BDO.Entities.Types.MaterialGroup, E>

export type Quest<E = {}> = Ref<BDO.Entities.Types.Quest, E>

export type Recipe<E = {}> = Ref<BDO.Entities.Types.Recipe, E>

export type WorkerSkill<E = {}> = Ref<BDO.Entities.Types.WorkerSkill, {
    effect: string
} & E>
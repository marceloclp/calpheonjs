import { App } from '@typings/namespaces'

export type Ref<T extends App.Entities.Types = any, E = {}> = {
    type: T
    id: string
    name: string
    icon: string
    grade?: number
} & E

export type Item<E = {}> = Ref<App.Entities.Types.Item, E>
export type Knowledge<E = {}> = Ref<App.Entities.Types.Knowledge, E>
export type NPC<E = {}> = Ref<App.Entities.Types.NPC, E>
export type MaterialGroup<E = {}> = Ref<App.Entities.Types.MaterialGroup, E>
export type Quest<E = {}> = Ref<App.Entities.Types.Quest, E>

export type WorkerSkill<E = {}> = Ref<App.Entities.Types.WorkerSkill, {
    effect: string
} & E>

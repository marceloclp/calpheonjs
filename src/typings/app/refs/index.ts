import { App } from '@typings/namespaces'

type Ref<T extends App.Entities.Types, E> = {
    type: T
    id: string
    name: string
    icon: string
} & E

export type Item<E = {}> = Ref<App.Entities.Types.Item, E>
export type Knowledge<E = {}> = Ref<App.Entities.Types.Knowledge, E>
export type NPC<E = {}> = Ref<App.Entities.Types.NPC, E>
export type MaterialGroup<E = {}> = Ref<App.Entities.Types.MaterialGroup, E>

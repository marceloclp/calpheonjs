import { App } from '@typings/namespaces'
import { Generic } from '../entities/generic'

interface Ref<T extends App.Entities.Types, R extends Generic<T>> {
    type: T
    id: string
    icon: string
    name: string
    // shortUrl: string
    // fetch: () => Promise<R>
}

// TODO: have refs allow categories
export interface Item
    extends Ref<App.Entities.Types.Item, App.Entities.Items.Item> {}
export interface Knowledge
    extends Ref<App.Entities.Types.Knowledge, App.Entities.Knowledge> {}
export interface NPC
    extends Ref<App.Entities.Types.NPC, App.Entities.NPCs.NPC> {}
export interface MaterialGroup
    extends Ref<App.Entities.Types.MaterialGroup, App.Entities.MaterialGroup> {}
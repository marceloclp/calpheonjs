import { App } from '@typings/namespaces'
import { Generic } from '../generic'

export interface MaterialGroup extends Generic<App.Entities.Types.MaterialGroup> {
    /** The list of items that belong to this group. */
    // TODO: add craftingMaterial as items category
    items: App.Refs.Item[]
}
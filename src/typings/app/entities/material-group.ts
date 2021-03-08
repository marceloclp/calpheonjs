import { App } from '@typings/namespaces'
import { Generic } from './generic'

export interface MaterialGroup extends Generic<App.Entities.Types.MaterialGroup> {
    /** The list of items that belong to this group. */
    items: App.Refs.Item[]
}
import { App } from '@typings/namespaces'
import { Generic } from './generic'

export interface Design extends Generic<App.Entities.Types.Design> {
    /** The time required to craft the item, in seconds. */
    duration: number
    /** The workshop level required to craft this recipe. */
    workshopLevel: number
    /** The list of items required to craft this recipe. */
    materials: App.Shared.Material[]
    /** The list of possible products of a successful craft. */
    products: App.Shared.Material[]
}
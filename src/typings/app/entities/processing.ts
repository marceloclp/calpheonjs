import { App, BDO } from '@typings/namespaces'
import { Generic } from './generic'

export interface Processing extends Generic<App.Entities.Types.Processing> {
    /** The process used to craft the recipe (e.g., shaking, grinding). */
    process: BDO.LifeSkills.Processing
    /** The experience received on successful craft. */
    exp: number
    /** The required skill level required to craft this recipe. */
    mastery: App.Shared.Mastery
    /** The list of items required to craft this recipe. */
    materials: App.Shared.Material[]
    /** The list of possible products of a successful craft. */
    products: App.Shared.Material[]
}

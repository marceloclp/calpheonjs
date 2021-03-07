import { App, BDO } from '@typings/namespaces'
import { Generic } from '../generic'

type Material =
    | (App.Refs.Item & { grade: number; amount: number })
    | (App.Refs.MaterialGroup & { amount: number })

export interface Processing extends Generic<App.Entities.Types.Processing> {
    /** The process used to craft the recipe (e.g., shaking, grinding). */
    process: BDO.LifeSkills.Processing
    /** The experience received on successful craft. */
    exp: number
    /** The required skill level required to craft this recipe. */
    mastery: BDO.LifeSkills.Masteries.Mastery
    /** The list of items required to craft this recipe. */
    materials: Material[]
    /** The list of possible products of a successful craft. */
    products: Material[]
}
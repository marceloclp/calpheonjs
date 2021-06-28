import { BDO } from '@typings/namespaces'
import { Refs } from '../../index'

export interface Craftable {
    /** The list of items required to craft this recipe. */
    materials: (
        | Refs.Item<{ amount: number }>
        | Refs.MaterialGroup<{ amount: number }>
    )[]
    
    /** The list of possible products of a successful craft. */
    products: (
        | Refs.Item<{ amount: number }>
        | Refs.MaterialGroup<{ amount: number }>
    )[]
}

export interface RankedCraftable extends Craftable {
    /** The life skill level required to craft this recipe. */
    mastery?: BDO.LifeSkills.Mastery

    /** The experience received on successful craft. */
    exp: number
}

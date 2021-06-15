import { BDO } from '@typings/namespaces'

export interface Craftable {
    /** The list of items required to craft this recipe. */
    materials: BDO.LifeSkills.Material[]
    
    /** The list of possible products of a successful craft. */
    products: BDO.LifeSkills.Material[]
}

export interface RankedCraftable extends Craftable {
    /** The experience received on successful craft. */
    exp: number

    /** The life skill level required to craft this recipe. */
    mastery?: BDO.LifeSkills.Mastery
}
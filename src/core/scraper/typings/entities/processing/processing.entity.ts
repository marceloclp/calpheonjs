import { BDO } from '@typings/namespaces'
import { Generic } from '../generic.interface'
import { Craftable } from '../craftable.interface'

export interface Processing extends
    Generic<BDO.Entities.Types.Processing>,
    Craftable {
    
    /** The process used to craft the recipe (e.g., shaking, grinding). */
    process: BDO.LifeSkills.Processing.Processes

    /** The experience received on successful craft. */
    exp: number
    
    /** The required skill level required to craft this recipe. */
    mastery: BDO.LifeSkills.Mastery
}
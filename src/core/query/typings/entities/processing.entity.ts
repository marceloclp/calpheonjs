import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { RankedCraftable } from './craftable.interface'
import { As } from './as.enum'

export interface Processing extends Generic<As.Processing>, RankedCraftable {
    grade: BDO.Grade

    /** The process used to craft this recipe (grinding, shaking, etc). */
    process: BDO.LifeSkills.Processing.Processes
}
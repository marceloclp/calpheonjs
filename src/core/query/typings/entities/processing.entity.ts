import { BDO } from '@typings/namespaces'
import { Generic } from './extendables/generic.interface'
import { RankedCraftable } from './extendables/craftable.interface'
import { Gradeable } from './extendables/gradeable.interface'
import { As } from './as.enum'

export interface Processing extends Generic<As.Processing>, RankedCraftable, Gradeable {
    /** The process used to craft this recipe (grinding, shaking, etc). */
    process: BDO.LifeSkills.Processing.Processes
}
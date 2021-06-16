import { Generic } from './extendables/generic.interface'
import { Collectable } from './extendables/collectable.interface'
import { As } from './as.enum'

export interface DropGatherable extends Generic<As.DropGatherable>, Collectable {}
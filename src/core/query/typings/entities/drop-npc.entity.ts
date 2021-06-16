import { Generic } from './extendables/generic.interface'
import { Collectable } from './extendables/collectable.interface'
import { As } from './as.enum'

export interface DropNPC extends Generic<As.DropNPC>, Collectable {}
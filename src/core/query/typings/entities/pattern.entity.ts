import { Generic } from './extendables/generic.interface'
import { Craftable } from './extendables/craftable.interface'
import { As } from './as.enum'

export interface Pattern extends Generic<As.Pattern>, Craftable {}
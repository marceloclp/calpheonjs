import { Generic } from './generic.interface'
import { Craftable } from './craftable.interface'
import { As } from './as.enum'

export interface Pattern extends Generic<As.Pattern>, Craftable {}
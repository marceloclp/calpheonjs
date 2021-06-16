import { Generic } from './extendables/generic.interface'
import { Craftable } from './extendables/craftable.interface'
import { Gradeable } from './extendables/gradeable.interface'
import { As } from './as.enum'

export interface Design extends Generic<As.Design>, Craftable, Gradeable {}
import { Generic } from './generic.interface'
import { Craftable } from './craftable.interface'
import { Gradeable } from './gradeable.interface'
import { As } from './as.enum'

export interface Design extends Generic<As.Design>, Craftable, Gradeable {}
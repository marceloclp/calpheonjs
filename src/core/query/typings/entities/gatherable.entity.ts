import { Generic } from './generic.interface'
import { Collectable } from './collectable.interface'
import { As } from './as.enum'

export interface Gatherable extends Generic<As.Gatherable>, Collectable {}
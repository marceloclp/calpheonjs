import { Refs } from '../index'
import { Generic } from './generic.interface'
import { As } from './as.enum'

export interface Knowledge extends Generic<As.Knowledge> {
    /** The knowledge group it belongs to, if available. */
    group?: string

    /** The entity the knowledge can be acquired from. */
    obtainedFrom?: Refs.NPC | Refs.Quest
}

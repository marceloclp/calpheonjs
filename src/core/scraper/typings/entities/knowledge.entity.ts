import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { As } from './as.enum'

export interface Knowledge extends Generic<As.Knowledge> {
    /** The knowledge group it belongs to, if available. */
    group?: string

    /** The entity the knowledge can be acquired from. */
    obtainedFrom?: BDO.Refs.NPC | BDO.Refs.Quest
}

import { BDO } from '@typings/namespaces'
import { Generic } from '../generic.interface'

export interface Knowledge
    extends Generic<BDO.Entities.Types.Knowledge> {

    /** The knowledge group it belongs to, if available. */
    group?: string

    /** The entity the knowledge can be acquired from. */
    obtainedFrom?: BDO.Refs.NPC | BDO.Refs.Quest
}

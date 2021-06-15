import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { Gradeable } from './gradeable.interface'
import { As } from './as.enum'

export interface NPC extends Generic<As.NPC | As.NPCOther | As.NPCWorker>, Gradeable {
    subType: BDO.NPCs.SubTypes
}
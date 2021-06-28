import { BDO } from '@typings/namespaces'
import { Generic } from './extendables/generic.interface'
import { As } from './as.enum'

export interface NPC extends Generic<As.NPC> {
    title?: string

    level: number

    stats: BDO.NPCs.Stats<number>

    droppedExp: {
        base?: number
        skill?: number
        contribution?: number
    }

    droppedKarma: number
}

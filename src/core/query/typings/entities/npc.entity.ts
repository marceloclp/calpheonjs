import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'

export interface NPC extends
    Generic<BDO.Entities.Types.NPC> {
    
    title?: string

    level: number

    stats: BDO.NPCs.Stats<number>

    droppedExp: BDO.NPCs.DroppedExp

    droppedKarma: number
}
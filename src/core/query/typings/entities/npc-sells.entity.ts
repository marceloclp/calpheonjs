import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { As } from './as.enum'

export interface NPCSells extends Generic<As.NPCSells> {
    title?: string

    level: number

    stats: BDO.NPCs.Stats<number>

    droppedExp: BDO.NPCs.DroppedExp

    droppedKarma: number
}
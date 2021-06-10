import { BDO } from '@typings/namespaces'
import { NPC } from './npc.entity'
import { Other } from './other.entity'
import { Worker } from './worker.entity'

export type Select<S extends BDO.NPCs.SubTypes | 'F' = 'F'> = {
    [BDO.NPCs.SubTypes.Lodging]: NPC
    [BDO.NPCs.SubTypes.Other]: Other
    [BDO.NPCs.SubTypes.Worker]: Worker
    F: NPC
}[S]
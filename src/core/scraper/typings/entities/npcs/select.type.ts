import { BDO } from '@typings/namespaces'
import { NPC } from './npc.entity'
import { Other } from './other.entity'
import { Worker } from './worker.entity'

export type Select<S extends BDO.NPCs.SubTypes> =
    S extends BDO.NPCs.SubTypes.Worker
        ? Worker
    : S extends BDO.NPCs.SubTypes.Other
        ? Other
    : NPC
import { BDO } from '@typings/namespaces'
import { Refs } from '../index'
import { NPC } from './npc.entity'
import { As } from './as.enum'

export interface NPCOther extends NPC {
    as: As.NPCOther

    subType: BDO.NPCs.SubTypes.Other

    /** An NPC may have a group (the text inside <>). */
    group?: string

    /** An NPC may have a level. */
    level?: number

    /** An NPC may have player stats. */
    stats?: BDO.NPCs.Stats<string>

    /** An NPC may give exp when killed. */
    droppedExp: {
        base?: number
        skill?: number
        contribution?: number
    }

    /** An NPC may give karma when killed. */
    droppedKarma: number

    /** An NPC may be a boss. */
    mobType?: BDO.NPCs.MobTypes

    /** An NPC may have a knowledge associated with it. */
    knowledge?: Refs.Knowledge<{ dropChance?: number }>

    // TODO: https://bdocodex.com/us/npc/27051/
    // summonedByItem?: BDO.Refs.Item
}

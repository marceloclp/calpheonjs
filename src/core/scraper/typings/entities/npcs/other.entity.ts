import { BDO } from '@typings/namespaces'
import { NPC } from './npc.entity'

export interface Other extends
    NPC<BDO.NPCs.SubTypes.Other> {

    /** An NPC may have a group (the text inside <>). */
    group?: string

    /** An NPC may have player stats. */
    stats?: BDO.NPCs.Stats<string>

    /** An NPC may be a boss. */
    mobType?: BDO.NPCs.MobTypes

    /** An NPC may have a knowledge associated with it. */
    knowledge?: BDO.Refs.Knowledge<{ dropChance?: number }>

    // TODO: https://bdocodex.com/us/npc/27051/
    // summonedByItem?: BDO.Refs.Item
}
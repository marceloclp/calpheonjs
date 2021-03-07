import { App, BDO } from '@typings/namespaces'
import { Generic } from '../generic'

/**
 * It's not currently possible to determine whether an NPC is a monster
 * or not, so all properties related to mobs will exist within any other
 * type of NPC.
 */
export interface NPC<C extends App.Entities.NPCs.Category = 'other'>
    extends Generic<App.Entities.Types.NPC> {
    category: C
    /** An NPC may have a level. */
    lvl?: number
    /** An NPC may have player stats. */
    stats?: Partial<BDO.Player.Stats>
    /** An NPC may reward the player with experience points when killed. */
    exp?: number
    /** An NPC may reward the player with skill experience points when killed. */
    expSkill?: number
    /** The karma given by the NPC when killed. */
    karma?: number
    /** An NPC may be a boss. */
    bossType?: 'boss' | 'awakenedBoss'
    /** An NPC may give a knowledge when interacted with (through killing, chatting, etc). */
    knowledge?: App.Refs.Knowledge
}
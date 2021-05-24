import { BDO } from '@typings/namespaces'
import { Generic } from '../generic.interface'

export interface Quest
    extends Generic<BDO.Entities.Types.Quest> {

    /** A quest belongs to a category. */
    category?: BDO.Quests.Categories

    /** A quest may belong to a group. */
    group?: BDO.Quests.Groups

    /** A quest may belong to a certain region. */
    region?: string

    /** A quest may have a minimum required level to be accepted by the player. */
    level?: number

    /** A quest may have be part of a chain of quests. */
    chain: BDO.Refs.Quest[]

    /** The entry point NPC. If undefined, then it's the Black Spirit. */
    startNPC?: BDO.Refs.NPC

    /** The end NPC. If undefined, then it's the Black Spirit. */
    endNPC?: BDO.Refs.NPC

    /** A quest may have a story. */
    story?: string
    
    /** A quest may reward the player upon completion. */
    rewards: BDO.Quests.Rewards
}

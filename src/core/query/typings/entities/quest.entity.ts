import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'

export interface Quest extends
    Generic<BDO.Entities.Types.Quest> {

    /** A quest may have a minimum required level to be accepted by the player. */
    level: number

    /** A quest may belong to a certain region. */
    region?: string
    
    /** A quest may reward the player upon completion. */
    rewards: BDO.Quests.Rewards
}
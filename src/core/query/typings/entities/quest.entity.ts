import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'

export interface Quest extends
    Generic<BDO.Entities.Types.Quest> {

    level: number

    region: string
    
    rewards: BDO.Quests.Rewards
}
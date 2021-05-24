import { BDO } from '@typings/namespaces'

export interface Rewards {
    /** Upon competion the player is always awarded the following rewards. */
    standard: BDO.Quests.Reward[]

    /** Upon completion the player be asked to choose one of the following rewards. */
    choseOneOf: BDO.Quests.Reward[]

    /** Upon completion the player may be rewarded with a knowledge. */
    knowledge?: BDO.Refs.Knowledge
}
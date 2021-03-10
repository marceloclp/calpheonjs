import { App } from '@typings/namespaces'

/**
 * A reward is given upon quest completion.
 */
export type Reward =
    | App.Shared.EXP<{ amount: number }>
    | App.Refs.Item<{ amount: number }>
    | App.Refs.NPC<{ amityGained: number }>
    | App.Refs.Knowledge

export interface Rewards {
    /** Upon competion the player is always awarded the following rewards. */
    standard: Reward[]
    /** Upon completion the player be asked to choose one of the following rewards. */
    choseOneOf: Reward[]
    /** Upon completion the player may be rewarded with a knowledge. */
    knowledge?: App.Refs.Knowledge
}

import { App, BDO } from '@typings/namespaces'

export type Reward =
    | (BDO.EXP & { amount: number })
    | (BDO.Ref<App.Entities.Types.Item> & { amount: number })
    | (BDO.Ref<App.Entities.Types.NPC> & { amityGained: number })
    | (BDO.Ref<App.Entities.Types.Knowledge>)

export interface Rewards {
    /** Rewards given upon quest completion. */
    standard: Reward[];
    /** Rewards that the player can pick one from upon quest completion. */
    choose: Reward[];
}
import { BDO } from '@typings/namespaces'

export type Reward =
    | BDO.EXP<{ amount: number }>
    | BDO.Refs.Item<{ amount: number }>
    | BDO.Refs.NPC<{ amityGained: number }>
    // | BDO.Refs.Knowledge // Already defined on "rewards"
import * as Refs from "../../refs";

export type Reward =
    | (Refs.Item & { amount: number })
    | (Refs.EXP & { amount: number })
    | (Refs.NPC & { amity_gained: number })
    | (Refs.Knowledge);
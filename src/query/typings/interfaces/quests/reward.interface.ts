import * as Refs from "../../refs";

export type Reward = 
    | (Refs.Item & { amount: number })
    | (Refs.EXP & { amount: number });
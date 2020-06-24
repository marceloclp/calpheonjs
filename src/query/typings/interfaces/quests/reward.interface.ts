import * as Refs from "../../entities/refs";

export type Reward = 
    | (Refs.Item & { amount: number })
    | (Refs.EXP & { amount: number });
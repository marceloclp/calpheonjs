import * as Refs from "../../refs";

export type Material = 
    | (Refs.Item & { amount: number })
    | (Refs.MaterialGroup & { amount: number });
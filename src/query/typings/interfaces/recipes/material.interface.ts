import * as Refs from "../../entities/refs";

export type Material = 
    | (Refs.Item & { amount: number })
    | (Refs.MaterialGroup & { amount: number });
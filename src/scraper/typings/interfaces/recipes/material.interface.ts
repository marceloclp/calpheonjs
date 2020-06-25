import * as Refs from "../../refs";

export type Material =
    | (Refs.Item & { grade: number; amount: number; })
    | (Refs.MaterialGroup) & { amount: number; };
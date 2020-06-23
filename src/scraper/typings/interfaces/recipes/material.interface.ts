import * as Refs from "../../entities/refs";

export type Material = Refs.Item & {
    grade: number;

    amount: number;
};
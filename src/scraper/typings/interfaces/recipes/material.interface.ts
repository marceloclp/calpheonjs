import * as Entities from "../../entities";

export type Material = Entities.Refs.Item & {
    grade: number;

    amount: number;
};
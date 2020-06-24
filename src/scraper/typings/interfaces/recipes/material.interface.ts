import * as Refs from "../../entities/refs";

export type Material = Refs.Item & {
    /** The grade of the item. */
    grade: number;

    /** The amount required/produced by the recipe. */
    amount: number;
};
import { SorteableColumn } from "../sorteable-row.interface";

export interface Recipe {
    readonly aaData: {
        /** Entity id. */
        readonly 0: string;

        /** HTML for the icon. */
        readonly 1: string;

        /** HTML for the recipe name. */
        readonly 2: string;

        /** Processing type. */
        readonly 3: string;

        /** The required level to complete this recipe. */
        readonly 4: SorteableColumn;

        /** EXP. */
        readonly 5: string;

        /** HTML for the materials. */
        readonly 6: string;

        /** HTML for the products. */
        readonly 7: string;

        /** A stringified array containing the materials ids. */
        readonly 8: string;

        readonly 9: string;

        readonly 10: string;

        readonly 11: string;
    }[];
}
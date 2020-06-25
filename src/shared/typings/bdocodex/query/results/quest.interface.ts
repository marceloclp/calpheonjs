import { SorteableColumn } from "../sorteable-row.interface";

export interface Quest {
    readonly aaData: {
        /** Quest id. */
        readonly 0: SorteableColumn;

        /** HTML for the icon. */
        readonly 1: string;

        /** HTML for the quest name. */
        readonly 2: string;

        /** Level required to take the quest. */
        readonly 3: string;

        /** Region. */
        readonly 4: SorteableColumn

        /** EXP. */
        readonly 5: SorteableColumn;

        /** Skill EXP. */
        readonly 6: SorteableColumn;

        /** Contribution EXP. */
        readonly 7: string;

        /** Big weird HTML string containing rewards. */
        readonly 8: string;

        readonly 9: string;

        readonly 10: string;
    }[];
}
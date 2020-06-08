import { SorteableColumn } from "../sorteable-row.interface";

export interface NPC {
    readonly aaData: {
        /** NPC id. */
        readonly 0: SorteableColumn;

        /** HTML for the icon. */
        readonly 1: string;

        /** HTML for the NPC name. */
        readonly 2: string;

        /** Level. */
        readonly 3: string;

        /** HP. */
        readonly 4: string;

        /** Defense. */
        readonly 5: string;

        /** Evasion. */
        readonly 6: string;

        /** EXP. */
        readonly 7: string;

        /** Skill EXP. */
        readonly 8: string;

        /** Karma. */
        readonly 9: string;
    }[];
}
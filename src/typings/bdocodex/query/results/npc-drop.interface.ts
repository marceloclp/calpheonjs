export interface NPCDrop {
    readonly aaData: {
        /** NPC id. */
        readonly 0: string;

        /** HTML for the icon. */
        readonly 1: string;

        /** HTML for the name of NPC. */
        readonly 2: string;

        /** Quantity as a string. */
        readonly 3: string;

        /** Drop chance in string format as a porcentage. */
        readonly 4: string;
    }[];
}
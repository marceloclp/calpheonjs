export interface Item {
    readonly aaData: {
        /** Item id. */
        readonly 0: string;

        /** HTML for the icon. */
        readonly 1: string;

        /** HTML for the item name. */
        readonly 2: string;

        /** Item level. */
        readonly 3: number;

        readonly 4: string;

        readonly 5: string;
    }[];
}
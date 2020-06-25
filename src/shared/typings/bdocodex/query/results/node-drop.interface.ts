export interface NodeDrop {
    readonly aaData: {
        /** Node id.  */
        readonly 0: string;

        /** HTML for the icon. */
        readonly 1: string;

        /** HTML for the node name. */
        readonly 2: string;

        /** Zone name. */
        readonly 3: string;

        /** Temperature in string as a porcentage. */
        readonly 4: string;

        /** Humidity in string as a porcentage. */
        readonly 5: string;

        /** Water in string as a porcentage. */
        readonly 6: string;
    }[];
}
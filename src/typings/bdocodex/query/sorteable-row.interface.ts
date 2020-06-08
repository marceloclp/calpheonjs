/**
 * Indicates a table column that can be sorted through a sort value.
 * 
 * These columns use a different data structure than regular ones inside the
 * query result array.
 */
export interface SorteableColumn {
    /** String containing the actual value of the row. */
    readonly display: string;

    readonly sort_value: string;
}
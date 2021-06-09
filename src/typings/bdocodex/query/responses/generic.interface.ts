import { SortRow } from '../sort-row.interface'

export interface Generic {
    /** Item id. */
    readonly 0: string | SortRow

    /** Item icon url. */
    readonly 1: string

    /** Item name. */
    readonly 2: string
}
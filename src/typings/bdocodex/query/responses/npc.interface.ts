import { SortRow } from '../sort-row.interface'

export interface NPC {
    /** NPC id. */
    readonly 0: SortRow

    /** HTML string containing the icon url. */
    readonly 1: string

    /** HTML string containing the NPC name and title.  */
    readonly 2: string

    /** Level. */
    readonly 3: string

    /** HP. */
    readonly 4: string

    /** Defense (DP). */
    readonly 5: string

    /** Evasion. */
    readonly 6: string

    /** Dropped base exp. */
    readonly 7: string

    /** Dropped skill exp. */
    readonly 8: string

    /** Dropped karma. */
    readonly 9: string
}
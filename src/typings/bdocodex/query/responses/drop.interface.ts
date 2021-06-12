/**
 * An alternative interface for NPCs when the query is
 * as group.
 */
export interface Drop {
    /** NPC id. */
    readonly 0: string

    /** HTML string containing the icon url. */
    readonly 1: string

    /** HTML string containing the NPC name. */
    readonly 2: string

    /** Amount of the item dropped. */
    readonly 3: string

    /** Chance of dropping the item. */
    readonly 4: string
}
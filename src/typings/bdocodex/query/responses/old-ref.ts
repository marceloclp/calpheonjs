// TODO: delete

/**
 * JSON format containing the HTML elements as strings for a column
 * that can be sorted, found in the HTML tables.
 * 
 * These columns are not consistent with the rest of the application
 * and use a different data structure.
 */
 interface HTMLSortRow {
    /** The actual DOM element as a string. */
    readonly display?: string
    readonly sort_value?: string | number
}

/**
 * The query response wrapper.
 */
export interface Wrapper<T extends Record<number, any>> {
    readonly aaData: T[]
}

export interface Generic {
    /** Entity id. */
    readonly 0: string | HTMLSortRow

    /** Entity icon url. */
    readonly 1: string

    /** Entity name. */
    readonly 2: string
}

export interface Item extends Generic {
    /** Item grade. */
    readonly 3: number
    readonly 4: string
    readonly 5: string
}

export interface NodeDrop extends Generic {
    /** Zone name. */
    readonly 3: string
    /** Temperature as a percentage string. */
    readonly 4: string
    /** Humidity as a percentage string. */
    readonly 5: string
    /** Water as a percentage string. */
    readonly 6: string
}

export interface NPCDrop extends Generic {
    /** Drop amount as a string. */
    readonly 3: string
    /** Drop chance as a percentage string. */
    readonly 4: string
}

export interface NPC extends Generic {
    /** NPC level. */
    readonly 3: string
    /** NPC HP. */
    readonly 4: string
    /** NPC defense. */
    readonly 5: string
    /** NPC evasion. */
    readonly 6: string
    /** NPC EXP. */
    readonly 7: string
    /** NPC skill EXP. */
    readonly 8: string
    /** NPC karma. */
    readonly 9: string
}

export interface Quest extends Generic {
    readonly 0: HTMLSortRow
    /** Level required to take the quest. */
    readonly 3: string;
    /** Region. */
    readonly 4: HTMLSortRow
    /** Amount of EXP rewarded upon completing the quest. */
    readonly 5: HTMLSortRow;
    /** Amount of Skill EXP rewarded upon completing the quest. */
    readonly 6: HTMLSortRow;
    /** Amount of contribution EXP rewarded upon completing the quest. */
    readonly 7: string;
    /** HTML containing quest rewards. */
    readonly 8: string;
    readonly 9: string;
    readonly 10: string;
}

export interface Recipe extends Generic {
    /** Processing type. */
    readonly 3: string;
    /** The required level to complete this recipe. */
    readonly 4: HTMLSortRow;
    /** EXP awarded upon successful craft. */
    readonly 5: string;
    /** HTML containing the required materials. */
    readonly 6: string;
    /** HTML containing the recipe products. */
    readonly 7: string;
    /** A stringified array containing the materials ids. */
    readonly 8: string;
    readonly 9: string;
    readonly 10: string;
    readonly 11: string;
}
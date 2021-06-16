/**
 * An alternative interface for NPCs when the query is
 * as group.
 */
 export interface ExchangeItem {
    /** Item id. */
    readonly 0: string

    /** HTML string containing the icon url. */
    readonly 1: string

    /** HTML string containing the rewarded item name. */
    readonly 2: string

    /** HTML string containing the amount of items received upon successful exchange. */
    readonly 3: string

    /** HTML string containing the item required as payment. */
    readonly 4: string

    /** HTML string containing the NPCs that can do this exchange. */
    readonly 5: string

    /** HTML string containing the conditions required to do the exchange. */
    readonly 6: string
}
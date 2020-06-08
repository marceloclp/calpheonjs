export enum Types {
    /** Queries for processing recipes where the item is one of the products. */
    PRODUCT_IN_PROCESSING,

    /** Queries for cooking recipes or simple alchemy/cooking where the item is one of the products. */
    PRODUCT_IN_RECIPE,

    /** Queries for design recipes where the item is one of the products. */
    PRODUCT_IN_DESIGN,

    /** Queries for processing recipes where the item is one of the materials. */
    MATERIAL_IN_PROCESSING,

    /** Queries for cooking or simple alchemy/cooking where the item is one of the materials. */
    MATERIAL_IN_RECIPE,

    /** Queries for design recipes where the item is one of the materials. */
    MATERIAL_IN_DESIGN,

    /** Queries for npcs that drop the item. */
    NPC_DROPS,

    /** Queries for nodes that drop the item. */
    DROPPED_IN_NODE,

    /** Queries for items that when used can drop the item (e.g, item boxes). */
    OBTAINED_FROM,

    /** Queries for npcs that sell the item. */
    SOLD_BY_NPC,
}
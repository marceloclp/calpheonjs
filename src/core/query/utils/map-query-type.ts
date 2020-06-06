import * as Queries from "../interfaces";
import { Groups, ItemAs, QueryTypes } from "../enums";

const map = (group: Groups, itemAs: ItemAs) => ({ group, itemAs });

/**
 * Mops a query type to the BDOCodex query parameters.
 * 
 * @param type - The query type to be mapped.
 * @returns    - A query descriptor.
 */
export const mapQueryType = (type: QueryTypes): Queries.Descriptor => {
    switch (type) {
        case QueryTypes.MATERIAL_IN_PROCESSING:
            return map(Groups.PROCESSING, ItemAs.MATERIAL);

        case QueryTypes.MATERIAL_IN_RECIPE:
            return map(Groups.RECIPE, ItemAs.MATERIAL);

        case QueryTypes.MATERIAL_IN_DESIGN:
            return map(Groups.DESIGN, ItemAs.MATERIAL);

        case QueryTypes.PRODUCT_IN_PROCESSING:
            return map(Groups.PROCESSING, ItemAs.PRODUCT);

        case QueryTypes.PRODUCT_IN_RECIPE:
            return map(Groups.RECIPE, ItemAs.PRODUCT);

        case QueryTypes.PRODUCT_IN_DESIGN:
            return map(Groups.DESIGN, ItemAs.PRODUCT);

        case QueryTypes.NPC_DROPS:
            return map(Groups.DROP, ItemAs.NPC_DROP);

        case QueryTypes.DROPPED_IN_NODE:
            return map(Groups.NODE, ItemAs.NODE_DROP);

        case QueryTypes.OBTAINED_FROM:
            return map(Groups.ITEM, ItemAs.CONTAINER);

        case QueryTypes.SOLD_BY_NPC:
            return map(Groups.NPC, ItemAs.SELL_SPECIAL_ITEM);
    }
}
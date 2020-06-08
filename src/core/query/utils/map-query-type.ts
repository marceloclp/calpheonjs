import * as Queries from "../typings";

const map = (group: Queries.Groups, itemAs: Queries.ItemAs) => ({ group, itemAs });

/**
 * Mops a query type to the BDOCodex query parameters.
 * 
 * @param type - The query type to be mapped.
 * @returns    - A query descriptor.
 */
export const mapQueryType = (type: Queries.Types): Queries.Descriptor => {
    switch (type) {
        case Queries.Types.MATERIAL_IN_PROCESSING:
            return map(Queries.Groups.PROCESSING, Queries.ItemAs.MATERIAL);

        case Queries.Types.MATERIAL_IN_RECIPE:
            return map(Queries.Groups.RECIPE, Queries.ItemAs.MATERIAL);

        case Queries.Types.MATERIAL_IN_DESIGN:
            return map(Queries.Groups.DESIGN, Queries.ItemAs.MATERIAL);

        case Queries.Types.PRODUCT_IN_PROCESSING:
            return map(Queries.Groups.PROCESSING, Queries.ItemAs.PRODUCT);

        case Queries.Types.PRODUCT_IN_RECIPE:
            return map(Queries.Groups.RECIPE, Queries.ItemAs.PRODUCT);

        case Queries.Types.PRODUCT_IN_DESIGN:
            return map(Queries.Groups.DESIGN, Queries.ItemAs.PRODUCT);

        case Queries.Types.NPC_DROPS:
            return map(Queries.Groups.DROP, Queries.ItemAs.NPC_DROP);

        case Queries.Types.DROPPED_IN_NODE:
            return map(Queries.Groups.NODE, Queries.ItemAs.NODE_DROP);

        case Queries.Types.OBTAINED_FROM:
            return map(Queries.Groups.ITEM, Queries.ItemAs.CONTAINER);

        case Queries.Types.SOLD_BY_NPC:
            return map(Queries.Groups.NPC, Queries.ItemAs.SELL_SPECIAL_ITEM);
    }
}
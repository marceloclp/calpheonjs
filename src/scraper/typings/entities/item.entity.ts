import { Generic } from "./generic.entity";
import { Pricings  } from "../interfaces";
import { Queries } from "../../../query";

export interface Item extends Generic {
    /** The prices for the item if available. */
    prices: Pricings;

    /** The grade of the item as 0-based. */
    grade: number;

    /** Weight as a floating number in LT. */
    weight: number;

    npc_drops?: Queries.QueryFn<Queries.Entities.NPCDrop>;
    
    quest_rewards?: Queries.QueryFn<Queries.Entities.Quest>;

    product_of_recipes?: Queries.QueryFn<Queries.Entities.Recipe>;

    product_of_processing?: Queries.QueryFn<Queries.Entities.Recipe>;

    product_of_design?: Queries.QueryFn<Queries.Entities.Recipe>;

    material_of_recipes?: Queries.QueryFn<Queries.Entities.Recipe>;

    material_of_processing?: Queries.QueryFn<Queries.Entities.Recipe>;

    material_of_design?: Queries.QueryFn<Queries.Entities.Recipe>;

    dropped_in_node?: Queries.QueryFn<Queries.Entities.Node>;

    obtained_from?: Queries.QueryFn<Queries.Entities.Item>;

    sold_by_npc?: Queries.QueryFn<Queries.Entities.NPC>;
}
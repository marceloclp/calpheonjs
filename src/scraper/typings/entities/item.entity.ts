import { Generic } from "./generic.entity";
import { Pricings  } from "../interfaces";
import { Queries } from "../../../query";

export interface Item extends Generic {
    prices: Pricings;

    grade: number;

    npc_drops: Queries.Entities.NPCDrop[];
    
    quest_rewards: Queries.Entities.Quest[];

    product_of_recipes: Queries.Entities.Recipe[];

    product_of_processing: Queries.Entities.Recipe[];

    product_of_design: Queries.Entities.Recipe[];

    material_of_recipes: Queries.Entities.Recipe[];

    material_of_processing: Queries.Entities.Recipe[];

    material_of_design: Queries.Entities.Recipe[];

    dropped_in_node: Queries.Entities.Node[];

    obtained_from: Queries.Entities.Item[];

    sold_by_npc: Queries.Entities.NPC[];
}
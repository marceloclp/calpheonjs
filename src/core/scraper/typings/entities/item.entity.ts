import { Generic } from "./generic.entity";
import { Pricings  } from "../interfaces";
import { Queries } from "../../../query";

export interface Item extends Generic {
    prices: Pricings;

    in_quest_rewards: Queries.Entities.Quest[];

    product_of_recipes: Queries.Entities.Recipe[];

    product_of_processing: Queries.Entities.Recipe[];
}
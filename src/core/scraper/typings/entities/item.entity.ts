import { Generic } from "./generic.entity";
import { Pricings } from "../interfaces";
import { Queries } from "../../../query";

export interface Item extends Generic {
    prices: Pricings;

    quest_rewards: Queries.Entities.Quest[];
}
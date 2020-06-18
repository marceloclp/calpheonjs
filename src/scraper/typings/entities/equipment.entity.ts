import * as Scrapers from "../interfaces";
import { Item } from "./item.entity";

export interface Equipment extends Item {
    stats: Scrapers.Equipment.Stats;

    enhancement_stats: Scrapers.Equipment.Enhancement[];

    caphras_stats: Scrapers.Equipment.Caphras.Wrapper;

    item_effects: string[];

    set_effects: Record<number, string[]>;

    exclusive_to: string[];

    fairy_exp: number;
}
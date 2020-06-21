import * as Entities from "../../entities";
import { Stats } from "./stats.interface";

export interface Enhancement {
    stats: Stats;

    /** The chance of success as a floating point. */
    success_rate: number;

    /** Max durability at a given enhancement level. */
    durability: number;

    /** The required amount of Cron stones. */
    cron_values: {
        /** For the next level. */
        next_lvl: number;

        /** The sum of all the levels before and the current one. */
        total: number;
    }

    /** The effects caused by the enhancement level. */
    enhancement_effects: string[];

    /** The effects caused by the item on a given enchantment level. */
    item_effects: string[];

    /** The item required to perform the enhancement. */
    required_enhancement_item?: Entities.Refs.Item & {
        /** The needed amount of the required item. */
        amount: number;

        /** The durability lost if the enhancement fails. */
        durability_loss_on_failure: number;
    };

    perfect_enhancement?: {
        /** The needed amount of the required item. */
        amount: number;
    
        /** The durability lost if the enhancement fails. */
        durability_loss_on_failure: number;
    };
}
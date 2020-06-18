import * as Entities from "../../entities";
import { Stats } from "./stats";

export interface Enhancement {
    stats: Stats;

    /** The chance of success as a floating point. */
    success_rate: number;

    /** Max durability at a given enhancement level. */
    durability: number;

    /** The required amount of Cron Stones for next enhancement level. */
    cron_value_next: number;

    /** The required amount of Cron Stones for max enhancement level. */
    cron_value_total: number;

    /** The effects caused by the enhancement level. */
    enhancement_effects: string[];

    /** The durability lost if the enhancement fails. */
    durability_loss_on_failure?: number;

    // Not sure what those mean.
    enchant_item_counter?: number;
    pe_item_counter?: number;
    pe_dura_dec?: number;

    /** The item required to perform the enhancement. */
    required_enhancement_item?: Entities.Ref;
}
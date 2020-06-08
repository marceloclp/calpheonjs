import { Stats } from "../enums";

/**
 * The enhancement data for each level (+1, +2, etc).
 */
export interface Level extends Record<Stats, string> {
    readonly enchant_chance: string;

    readonly durability: string;

    readonly cron_value: string;

    readonly cron_tvalue: string;

    readonly edescription: string;

    readonly need_enchant_item_id: string;

    readonly need_enchant_item_icon: string;

    readonly need_enchant_item_name: string;

    readonly enchant_item_counter: string;

    readonly pe_item_counter: string;

    readonly fail_dura_dec: string;

    readonly pe_dura_dec: string;
}
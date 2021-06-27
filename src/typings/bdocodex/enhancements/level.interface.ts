import { BDOCodex } from '@typings/namespaces'

export interface Level extends BDOCodex.Characters.Stats<string> {
    /** The chance of a successful enhancement. */
    readonly enchant_chance: string;

    /** The final max durability of the item after enhancement. */
    readonly durability: string;

    /** The number of cron stones required to enhance the current level. */
    readonly cron_value: string;

    /** The total number of cron stones required to enhance up to the current level. */
    readonly cron_tvalue: string;

    /** The in-game description of the stats provided by the enhancement. */
    readonly edescription: string;

    /** The id of the item required for enhancing. */
    readonly need_enchant_item_id: string;

    /** The icon of the item required for enhancing. */
    readonly need_enchant_item_icon: string;

    /** The name of the item required for enhancing. */
    readonly need_enchant_item_name: string;

    /** The amount of items required for enhancing. */
    readonly enchant_item_counter: string;

    readonly pe_item_counter: string;

    /** How much durability will be lost if failed attempt. */
    readonly fail_dura_dec: string;
    
    readonly pe_dura_dec: string;
}
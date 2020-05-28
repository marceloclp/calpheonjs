export type Stat = [number] | [number, number];

export interface EnchantmentStat {
    success_rate: number;

    damage: Stat;

    defense: Stat;

    accuracy: Stat;

    evasion: Stat;

    dmg_reduction: Stat;

    durability: number;

    cron_value: number;

    cron_tvalue: number;

    item_effects: string[];

    enhancement_effects?: string[];

    // Something to do with the durability loss or smth.
    // Not available for the highest enchantment possible.
    enchant_item_counter?: number;
    pe_item_counter?: number;
    fail_dura_dec?: number;
    pe_dura_dec?: number;

    required_enchantment_item?: {
        id: string;

        icon: string;

        name: string;
    };
}
interface IEnchantmentArrayItem {
    readonly enchant_chance: string;

    readonly damage: string | number;

    readonly defense: string | number;

    readonly accuracy: string | number;

    readonly evasion: string | number;

    readonly dreduction: string | number;

    readonly hdamage: string | number;

    readonly hdefense: string | number;

    readonly haccuracy: string | number;

    readonly hevasion: string | number;

    readonly hdreduction: string | number;

    readonly durability: string;

    readonly cron_value: number;

    readonly cron_tvalue: number;

    readonly edescription: string;

    readonly need_enchant_item_id: string;

    readonly need_enchant_item_icon: string;

    readonly need_enchant_item_name: string;

    readonly enchant_item_counter: string | number;

    readonly pe_item_counter: string | number;

    readonly fail_dura_dec: string | number;

    readonly pe_dura_dec: string | number;
}

export interface IEnchantmentArray
    extends Record<number, IEnchantmentArrayItem>
{
    readonly na: string;

    readonly max_enchant: string;
}
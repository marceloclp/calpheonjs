import { Scraper } from "./scraper";
import { EnchantmentStat, Stat } from "./interfaces/enchantment-stats";

const parseStat = (str: string | number): Stat => {
    if (typeof str === 'number')
        return [str];
    return str
        .split('~')
        .map(e => parseInt(e.trim()))
        .filter(e => e) as Stat;
}

export class EquipmentScraper extends Scraper {
    get enchantment_stats(): EnchantmentStat[] {
        const data = JSON.parse(this.$('#enchantment_array').text());
        const maxLvl = parseInt(data.max_enchant) || 0;

        return Array(maxLvl + 1).fill(0).map((_, lvl) => {
            const curr = data[lvl];
            const stat: EnchantmentStat = {
                success_rate: parseFloat(curr.enchant_chance),
                damage: parseStat(curr.damage),
                defense: parseStat(curr.defense),
                accuracy: parseStat(curr.accuracy),
                evasion: parseStat(curr.evasion),
                dmg_reduction: parseStat(curr.dreduction),
                durability: parseInt(curr.durability.split('/')[0]),
                cron_value: parseInt(curr.cron_value),
                cron_tvalue: parseInt(curr.cron_tvalue),
                item_effects: [],
            };
            if (lvl === maxLvl)
                return stat;
            return {
                ...stat,
                enchant_item_counter: parseInt(curr.enchant_item_counter),
                pe_item_counter: parseInt(curr.pe_item_counter),
                fail_dura_dec: parseInt(curr.fail_dura_dec),
                pe_dura_dec: parseInt(curr.pe_dura_dec),
                required_enchantment_item: {
                    id: curr.need_enchant_item_id,
                    icon: this.parseIconUrl(curr.need_enchant_item_icon),
                    name: curr.need_enchant_item_name,
                },
            };
        });
    }
}
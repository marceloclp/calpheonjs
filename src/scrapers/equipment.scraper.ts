import cheerio from "cheerio";
import { Scraper } from "./scraper";
import { indexFromArr, cleanForOutput, splitAtSubstrs } from "../utils/functions/string-utils";
import { Locales } from "../enums";
import { StatsEnum } from "./enums/stats.enum";
import { filterObject } from "../utils/functions/object-utils";
import { transform } from "../utils/functions/transform";
import { IEnhancement } from "./interfaces/enhancement.interface";
import { IStats, TStat } from "./interfaces/stats.interface";
import { IEnchantmentArray } from "../utils/interfaces/enchantment-array.interface";

export class EquipmentScraper extends Scraper {
    private parseEnchantmentArray(): IEnchantmentArray {
        return JSON.parse(this.$('#enchantment_array').text());
    }

    private parseStat(str: string): TStat {
        if (typeof str === 'number')
            return str;
        const nums = str.split('~')
            .map(e => parseInt(e.trim()))
            .filter(e => e || e === 0);
        if (nums.length === 1 || (nums.length === 2 && nums[0] === nums[1]))
            return nums[0];
        return nums as [number, number];
    }

    private parseEffects(raw: string, matches: string[]): string[] {
        const $ = cheerio.load('<div>' + raw + '</div>');
        const strs = ($('div').html() ?? '').split('<br>');

        let i = strs.findIndex(str => indexFromArr(str, matches).idx !== -1);
        if (i === -1)
            return [];
        
        const effects = [];
        while (i++ < strs.length) {
            if (strs[i] === '') break;
            effects.push(cleanForOutput($(strs[i]).text()));
        }
        return effects.filter(e => e);
    }

    get enhancement_stats(): IEnhancement[] {
        const data = this.parseEnchantmentArray();
        
        const pInt = (value: any) => transform<number>(value, parseInt);
        const pFloat = (value: any) => transform<number>(value, parseFloat);
        const pStat = (value: any) => transform<TStat>(value, this.parseStat);
        const pIcon = (value: string) => transform<string>(value, this.parseIconUrl.bind(this));
        
        const maxLvl = pInt(data.max_enchant) || 0;
        return Array(maxLvl + 1).fill(0).map((_, lvl) => {
            const curr = data[lvl];
            return filterObject<IEnhancement>({
                stats: filterObject<IStats>({
                    [StatsEnum.DAMAGE]: pStat(curr.damage),
                    [StatsEnum.DEFENSE]: pStat(curr.defense),
                    [StatsEnum.ACCURACY]: pStat(curr.accuracy),
                    [StatsEnum.EVASION]: pStat(curr.evasion),
                    [StatsEnum.DMG_REDUCTION]: pStat(curr.dreduction),
                    [StatsEnum.H_DAMAGE]: pStat(curr.hdamage),
                    [StatsEnum.H_DEFENSE]: pStat(curr.hdefense),
                    [StatsEnum.H_ACCURACY]: pStat(curr.haccuracy),
                    [StatsEnum.H_EVASION]: pStat(curr.hevasion),
                    [StatsEnum.H_DMG_REDUCTION]: pStat(curr.hdreduction),
                }),
                success_rate: pFloat(curr.enchant_chance),
                durability: pInt(curr.durability?.split('/')[0]),
                cron_value_next: pInt(curr.cron_value),
                cron_value_total: pInt(curr.cron_tvalue),
                enhancement_effects: this.parseEffects(curr.edescription, {
                    [Locales.US]: ['Enhancement Effect']
                }[this._locale]),

                // Only available below max level.
                ...(lvl >= maxLvl ? undefined : {
                    enchant_item_counter: pInt(curr.enchant_item_counter),
                    pe_item_counter: pInt(curr.pe_item_counter),
                    pe_dura_dec: pInt(curr.pe_dura_dec),
                    durability_loss_on_failure: pInt(curr.fail_dura_dec),
                    required_enhancement_item: {
                        id: curr.need_enchant_item_id,
                        icon: pIcon(curr.need_enchant_item_icon),
                        name: curr.need_enchant_item_name,
                    },
                }),
            });
        });
    }

    get stats(): IStats {
        return this.enhancement_stats[0].stats;
    }

    get item_effects(): string[] {
        const data = this.parseEnchantmentArray()[0].edescription;
        return this.parseEffects(data, {
            [Locales.US]: ['Item Effect'],
        }[this._locale]);
    }

    get set_effects(): Record<number, string[]> {
        const data = this.parseEnchantmentArray()[0].edescription;

        const matches = {
            [Locales.US]: ['$-Set Effect'],
        }[this._locale];

        return [2, 3, 4, 5].reduce((effects, set) => {
            const { idx, substr } = indexFromArr(data, matches.map(match => match.replace('$', set.toString())));
            if (idx === -1) return effects;
            return { ...effects, [set]: this.parseEffects(data, [substr as string]) };
        }, {});
    }

    get exclusive_to(): string[] {
        const matches = {
            [Locales.US]: ['Exclusive'],
        }[this._locale];

        const node = this.getBodyNodes(true).find(({ type, data }) =>
            type === 'text' && indexFromArr(data ?? '', matches).idx !== -1
        );
        if (!node) return [];

        const str = splitAtSubstrs(node.data ?? '', matches);
        if (!str) return [];

        return str.split(',').map(substr =>
            cleanForOutput(substr, { trimChars: ':' })
        );
    }
}
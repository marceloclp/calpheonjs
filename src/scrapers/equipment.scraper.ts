import cheerio from "cheerio";
import { Scraper } from "./scraper";
import { indexFromArr, cleanForOutput, splitAtSubstrs } from "../utils/functions/string-utils";
import { Locales } from "../enums";
import { StatsEnum } from "./enums/stats.enum";
import { filterObject } from "../utils/functions/object-utils";
import { IEnhancement } from "./interfaces/enhancement.interface";
import { IStats, TStat } from "./interfaces/stats.interface";
import { ICaphrasEnhancement, ICaphrasWrapper } from "./interfaces/caphras-enhancement.interface";
import { BDOCodex } from "../typings/bdocodex";
import { transform } from "../utils/functions/transform";

export class EquipmentScraper extends Scraper {
    private parseEnchantmentArray(): BDOCodex.Enchantment.Array {
        return JSON.parse(this.$('#enchantment_array').text());
    }

    private parseCaphrasData(): BDOCodex.Caphras.Data {
        const node = this.$('.item_title')
            .first()
            .parent()
            .find('script')
            .first();
        if (!node.is('script'))
            return {} as BDOCodex.Caphras.Data;
        return transform(node.html(), [
            (str) => splitAtSubstrs(str, ['=']),
            (str) => cleanForOutput(str, { trimChars: ';\t' }),
            JSON.parse,
        ]) as BDOCodex.Caphras.Data;
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

    private parseStat(value?: string | number): TStat | undefined {
        if (value === undefined)
            return undefined;
        const nums = value.toString().split(' ~ ')
            .map(str => parseInt(str))
            .filter(num => num || num === 0);
        if (nums.length === 1 || nums[0] === nums[1])
            return nums[0];
        return nums as [number, number];
    }

    private extractStats<
        R extends IStats = IStats,
    >(obj: Record<BDOCodex.StatsEnum & string, any>): R {
        const toStat = this.parseStat.bind(this);
        return filterObject<R>({
            [StatsEnum.HP]:              toStat(obj.hp),
            [StatsEnum.MP]:              toStat(obj.mp),
            [StatsEnum.DAMAGE]:          toStat(obj.damage),
            [StatsEnum.DEFENSE]:         toStat(obj.defense),
            [StatsEnum.ACCURACY]:        toStat(obj.accuracy),
            [StatsEnum.EVASION]:         toStat(obj.evasion),
            [StatsEnum.DMG_REDUCTION]:   toStat(obj.dreduction),
            [StatsEnum.H_DAMAGE]:        toStat(obj.hdamage),
            [StatsEnum.H_DEFENSE]:       toStat(obj.hdefense),
            [StatsEnum.H_ACCURACY]:      toStat(obj.haccuracy),
            [StatsEnum.H_EVASION]:       toStat(obj.hevasion),
            [StatsEnum.H_DMG_REDUCTION]: toStat(obj.hdreduction),
        } as any);
    }

    get stats(): IStats {
        return this.enhancement_stats[0].stats;
    }

    get enhancement_stats(): IEnhancement[] {
        const data = this.parseEnchantmentArray();
        const maxLvl = parseInt(data.max_enchant) || 0;

        return Array(maxLvl + 1).fill(0).map((_, lvl) => {
            const curr = data[lvl];

            const enhancement_effects = this.parseEffects(curr.edescription, {
                [Locales.US]: ['Enhancement Effect'],
            }[this._locale]);

            const belowMaxLvl: Partial<IEnhancement> = lvl < maxLvl ? {
                enchant_item_counter: parseInt(curr.enchant_item_counter),
                pe_item_counter: parseInt(curr.pe_item_counter),
                pe_dura_dec: parseInt(curr.pe_dura_dec),
                durability_loss_on_failure: parseInt(curr.fail_dura_dec),
                required_enhancement_item: {
                    id: curr.need_enchant_item_id,
                    icon: this.parseIconUrl(curr.need_enchant_item_icon),
                    name: curr.need_enchant_item_name,
                },
            } : {};

            return filterObject<IEnhancement>({
                stats: this.extractStats(curr as any),
                success_rate: parseFloat(curr.enchant_chance),
                durability: parseInt(curr.durability?.split('/')[0]),
                cron_value_next: parseInt(curr.cron_value),
                cron_value_total: parseInt(curr.cron_tvalue),
                enhancement_effects,
                ...belowMaxLvl,
            });
        });
    }

    get caphras_stats(): ICaphrasWrapper {
        const data = this.parseCaphrasData();
        return [18, 19, 20].reduce((caphras, eLvl) => {
            const values = (data[eLvl as 18 | 19 | 20] || []).map(cLvl => {
                return filterObject<ICaphrasEnhancement>({
                    stats: this.extractStats(cLvl.stats as any),
                    count_next: parseInt(cLvl.count),
                    count_total: parseInt(cLvl.tcount),
                });
            });
            return { ...caphras, [eLvl]: values };
        }, {});
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
            const { idx, substr } = indexFromArr(data, matches.map(match => {
                return match.replace('$', set.toString())
            }));
            if (idx === -1)
                return effects;
            return { ...effects, [set]: this.parseEffects(data, [substr]) };
        }, {});
    }

    get exclusive_to(): string[] {
        const matches = {
            [Locales.US]: ['Exclusive'],
        }[this._locale];

        let str: string = '';
        this.getBodyNodes(true).find(({ type, data }) => {
            if (type !== 'text' || !data)
                return false;
            const { idx, substr } = indexFromArr(data, matches);
            if (idx === -1)
                return false;
            str = splitAtSubstrs(data, [substr]) as string;
            return true;
        });
        if (!str) return [];

        return str.split(',').map(substr =>
            cleanForOutput(substr, { trimChars: ':' })
        );
    }
}
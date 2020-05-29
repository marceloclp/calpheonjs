import cheerio from "cheerio";
import * as Utils from "../utils";
import { App } from "../typings/app";
import { BDO } from "../typings/bdo";
import { BDOCodex } from "../typings/bdocodex";
import { Scraper } from "./scraper";
import { EMPTY_STR, BR_TAG } from "../constants";

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
        const raw = node.html() || EMPTY_STR;
        const str = raw.substring(Utils.indexOf(raw, "=", 0, true).idx);
        return JSON.parse(Utils.cleanStr(str, ';\t'));
    }

    private parseEffects(raw: string, matches: string | string[]): string[] {
        const $ = cheerio.load('<div>' + raw + '</div>');
        const strs = ($('div').html() ?? EMPTY_STR).split(BR_TAG);

        let i = strs.findIndex(str => Utils.indexOf(str, matches).substr);
        if (i === -1) return [];
        
        const effects = [];
        while (i++ < strs.length) {
            if (strs[i] === EMPTY_STR)
                break;
            const effect = Utils.cleanStr($(strs[i]).text());
            if (effect) effects.push(effect);
        }
        return effects;
    }

    private parseStat(value?: string | number): BDO.Stat | undefined {
        if (value === undefined || value === EMPTY_STR)
            return undefined;
        const nums = value.toString().split(' ~ ')
            .map(str => parseInt(str))
            .filter(num => num || num === 0);
        if (nums.length === 1 || nums[0] === nums[1])
            return nums[0];
        return nums as [number, number];
    }

    private extractStats<
        R extends BDO.Stats = BDO.Stats,
    >(obj: Record<BDOCodex.StatsEnum, any>): R {
        const toStat = this.parseStat.bind(this);
        return Utils.filterObj<R>({
            [BDO.StatsEnum.HP]:              toStat(obj.hp),
            [BDO.StatsEnum.MP]:              toStat(obj.mp),
            [BDO.StatsEnum.DAMAGE]:          toStat(obj.damage),
            [BDO.StatsEnum.DEFENSE]:         toStat(obj.defense),
            [BDO.StatsEnum.ACCURACY]:        toStat(obj.accuracy),
            [BDO.StatsEnum.EVASION]:         toStat(obj.evasion),
            [BDO.StatsEnum.DMG_REDUCTION]:   toStat(obj.dreduction),
            [BDO.StatsEnum.H_DAMAGE]:        toStat(obj.hdamage),
            [BDO.StatsEnum.H_DEFENSE]:       toStat(obj.hdefense),
            [BDO.StatsEnum.H_ACCURACY]:      toStat(obj.haccuracy),
            [BDO.StatsEnum.H_EVASION]:       toStat(obj.hevasion),
            [BDO.StatsEnum.H_DMG_REDUCTION]: toStat(obj.hdreduction),
        } as any);
    }

    get stats(): BDO.Stats {
        return this.enhancement_stats[0].stats;
    }

    get enhancement_stats(): BDO.Equipment.Enhancement[] {
        const data = this.parseEnchantmentArray();
        const maxLvl = parseInt(data.max_enchant) || 0;

        return Array(maxLvl + 1).fill(0).map((_, lvl) => {
            const curr = data[lvl];

            const enhancement_effects = this.parseEffects(curr.edescription, {
                [App.Locales.US]: 'Enhancement Effect',
            }[this._locale]);

            const belowMaxLvl: Partial<BDO.Equipment.Enhancement> = lvl < maxLvl ? {
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

            return Utils.filterObj<BDO.Equipment.Enhancement>({
                stats: this.extractStats(curr),
                success_rate: parseFloat(curr.enchant_chance),
                durability: parseInt(curr.durability?.split('/')[0]),
                cron_value_next: parseInt(curr.cron_value),
                cron_value_total: parseInt(curr.cron_tvalue),
                enhancement_effects,
                ...belowMaxLvl,
            });
        });
    }

    get caphras_stats(): BDO.Equipment.Caphras.Wrapper {
        const data = this.parseCaphrasData();
        return [18, 19, 20].reduce((caphras, eLvl) => {
            const values = (data[eLvl as 18 | 19 | 20] || []).map(cLvl => {
                return Utils.filterObj<BDO.Equipment.Caphras.Enhancement>({
                    stats: this.extractStats(cLvl.stats),
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
            [App.Locales.US]: 'Item Effect',
        }[this._locale]);
    }

    get set_effects(): Record<number, string[]> {
        const data = this.parseEnchantmentArray()[0].edescription;

        const matches = {
            [App.Locales.US]: ['$-Set Effect'],
        }[this._locale];
        const match = (num: string) => matches.map(m => m.replace('$', num));

        return [2, 3, 4, 5].map(e => e.toString()).reduce((effects, set) => {
            const { substr } = Utils.indexOf(data, match(set));
            if (!substr)
                return effects;
            return { ...effects, [set]: this.parseEffects(data, substr) };
        }, {});
    }

    get exclusive_to(): string[] {
        const matches = {
            [App.Locales.US]: 'Exclusive',
        }[this._locale];

        let str: string = '';
        this.getBodyNodes(true).find(({ type, data }) => {
            if (type !== 'text' || !data)
                return false;
            const { idx, substr } = Utils.indexOf(data, matches, 0, true);
            if (!substr)
                return false;
            str = data.substring(idx);
            return true;
        });
        return str.split(',').map(s => Utils.cleanStr(s, ':'));
    }

    get fairy_exp(): number {
        const matches = {
            [App.Locales.US]: 'Used as Fairy growth item',
        }[this._locale];
        const node = this.getBodyNodes(true).find(({ type, data }) => {
            if (type !== 'text' || !data)
                return false;
            return !!Utils.indexOf(data, matches).substr;
        });
        if (!node?.data)
            return 0;
        return parseInt(node.data.replace(/\D/g, ''));
    }
}
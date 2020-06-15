import cheerio from "cheerio";
import * as AppUtils from "../../../../utils";
import * as Scrapers from "../../typings";
import { App, BDOCodex } from "../../../../typings";
import { ItemScraper } from "./item.scraper";

export class EquipmentScraper extends ItemScraper {
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
        const raw = node.html() || '';
        const str = raw.substring(AppUtils.indexOf(raw, "=", 0, true).idx);
        return JSON.parse(AppUtils.cleanStr(str, ';\t'));
    }

    private parseEffects(raw: string, matches: string | string[]): string[] {
        const $ = cheerio.load('<div>' + raw + '</div>');
        const strs = ($('div').html() ?? '').split('<br>');

        let i = strs.findIndex(str => AppUtils.indexOf(str, matches).substr);
        if (i === -1) return [];
        
        const effects = [];
        while (i++ < strs.length) {
            if (strs[i] === '')
                break;
            const effect = AppUtils.cleanStr($(strs[i]).text());
            if (effect) effects.push(effect);
        }
        return effects;
    }

    private parseStat(value?: string | number): Scrapers.Stat | undefined {
        if (value === undefined || value === '')
            return undefined;
        const nums = value.toString().split(' ~ ')
            .map(str => parseInt(str))
            .filter(num => num || num === 0);
        if (nums.length === 1 || nums[0] === nums[1])
            return nums[0];
        return nums as [number, number];
    }

    private extractStats(obj: BDOCodex.StatsObj): Scrapers.Equipment.Stats {
        const { Stats } = Scrapers;
        const toStat = this.parseStat.bind(this);
        return AppUtils.filterObj({
            [Stats.HP]:              toStat(obj.hp),
            [Stats.MP]:              toStat(obj.mp),
            [Stats.DAMAGE]:          toStat(obj.damage),
            [Stats.DEFENSE]:         toStat(obj.defense),
            [Stats.ACCURACY]:        toStat(obj.accuracy),
            [Stats.EVASION]:         toStat(obj.evasion),
            [Stats.DMG_REDUCTION]:   toStat(obj.dreduction),
            [Stats.H_DAMAGE]:        toStat(obj.hdamage),
            [Stats.H_DEFENSE]:       toStat(obj.hdefense),
            [Stats.H_ACCURACY]:      toStat(obj.haccuracy),
            [Stats.H_EVASION]:       toStat(obj.hevasion),
            [Stats.H_DMG_REDUCTION]: toStat(obj.hdreduction),
        });
    }

    get stats(): Scrapers.Equipment.Stats {
        return this.enhancement_stats[0].stats;
    }

    get enhancement_stats(): Scrapers.Equipment.Enhancement[] {
        const data = this.parseEnchantmentArray();
        const maxLvl = parseInt(data.max_enchant) || 0;

        return Array(maxLvl + 1).fill(0).map((_, lvl) => {
            const curr = data[lvl];

            const enhancement_effects = this.parseEffects(curr.edescription, {
                [App.Locales.US]: 'Enhancement Effect',
            }[this._locale]);

            return AppUtils.filterObj<Scrapers.Equipment.Enhancement>({
                stats: this.extractStats(curr),
                success_rate: parseFloat(curr.enchant_chance),
                durability: parseInt(curr.durability?.split('/')[0]),
                cron_value_next: parseInt(curr.cron_value),
                cron_value_total: parseInt(curr.cron_tvalue),
                enhancement_effects,
                ...(lvl >= maxLvl ? {} : {
                    enchant_item_counter: parseInt(curr.enchant_item_counter),
                    pe_item_counter: parseInt(curr.pe_item_counter),
                    pe_dura_dec: parseInt(curr.pe_dura_dec),
                    durability_loss_on_failure: parseInt(curr.fail_dura_dec),
                    required_enhancement_item: {
                        id: curr.need_enchant_item_id,
                        icon: this.parseIconURL(curr.need_enchant_item_icon),
                        name: curr.need_enchant_item_name,
                    },
                }),
            });
        });
    }

    get caphras_stats(): Scrapers.Equipment.Caphras.Wrapper {
        const data = this.parseCaphrasData();
        return [18, 19, 20].reduce((caphras, eLvl) => {
            const values = (data[eLvl as 18 | 19 | 20] || []).map(cLvl => {
                return AppUtils.filterObj<Scrapers.Equipment.Caphras.Enhancement>({
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
            const { substr } = AppUtils.indexOf(data, match(set));
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
            const { idx, substr } = AppUtils.indexOf(data, matches, 0, true);
            if (!substr)
                return false;
            str = data.substring(idx);
            return true;
        });
        return str
            .split(',')
            .map(s => AppUtils.cleanStr(s, ':'))
            .filter(e => e);
    }

    get fairy_exp(): number {
        const matches = {
            [App.Locales.US]: 'Used as Fairy growth item',
        }[this._locale];
        const node = this.getBodyNodes(true).find(({ type, data }) => {
            if (type !== 'text' || !data)
                return false;
            return !!AppUtils.indexOf(data, matches).substr;
        });
        if (!node?.data)
            return 0;
        return parseInt(node.data.replace(/\D/g, ''));
    }

    async build(): Promise<Scrapers.Entities.Equipment> {
        return {
            ...(await super.build()),
            stats: this.stats,
            enhancement_stats: this.enhancement_stats,
            caphras_stats: this.caphras_stats,
            item_effects: this.item_effects,
            set_effects: this.set_effects,
            exclusive_to: this.exclusive_to,
            fairy_exp: this.fairy_exp,
        };
    }
}
import * as Scrapers from "../../typings";
import { App } from "../../../typings";
import { Queries } from "../../../query";
import { Pricings } from "../../typings";
import { Generic } from "../generic.builder";
import { Matcher } from "../../../shared";

export class Item extends Generic {
    private async query(type: Queries.Types): Promise<any[]> {
        const ids = {
            [App.Locales.US]: {
                [Queries.Types.QUEST_REWARD]: 'questreward',
                [Queries.Types.PRODUCT_IN_RECIPE]: 'productofrecipe',
                [Queries.Types.PRODUCT_IN_PROCESSING]: 'mproductofrecipe',
            }
        }[this._locale];
        if (!(type in ids))
            return [];
        const match = (ids as any)[type];
        if (!this.$(`a[href="#tabs-${match}"]`).length)
            return [];
        return (await this._query(this._id, type, {
            db: this._db,
            locale: this._locale,
        })).data;
    }

    get grade(): number {
        const str = this.$('.item_title').attr('class') as string;
        return parseInt(str.replace(/\D/g, ''));
    }

    get weight(): number {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Weight:']
        });
        return parseFloat(this.getTextNodeFromCategoryWrapper(matcher)?.data
            ?.substr(matcher.indexIn(matcher.last, true))
            ?.replace(/[ LT]/g, '') || '0');
    }

    get prices(): Pricings {
        const matchers = {
            buy: new Matcher(this._locale, {
                [App.Locales.US]: ['Buy'],
            }),
            sell: new Matcher(this._locale, {
                [App.Locales.US]: ['Sell'],
            }),
            repair: new Matcher(this._locale, {
                [App.Locales.US]: ['Repair'],
            }),
        };
        const keys = <const>['buy', 'sell', 'repair'];

        return this.getBodyNodes().reduce((prices, node) => {
            if (!node.data)
                return prices;
            const key = keys.find(
                key => !matchers[key].length && matchers[key].in(node.data)
            );
            if (!key)
                return prices;
            return { ...prices, [key]: parseInt(node.data.replace(/\D/g, '')) };
        }, {} as Pricings);
    }

    async build(): Promise<Scrapers.Entities.Item> {
        const t = Queries.Types;
        const query = this.query.bind(this);
        return {
            ...(await super.build()),
            prices: this.prices,
            grade: this.grade,
            weight: this.weight,
            npc_drops: await query(t.NPC_DROPS),
            quest_rewards: await query(t.QUEST_REWARD),
            product_of_recipes: await query(t.PRODUCT_IN_RECIPE),
            product_of_processing: await query(t.PRODUCT_IN_PROCESSING),
            product_of_design: await query(t.PRODUCT_IN_DESIGN),
            material_of_recipes: await query(t.MATERIAL_IN_RECIPE),
            material_of_processing: await query(t.MATERIAL_IN_PROCESSING),
            material_of_design: await query(t.MATERIAL_IN_DESIGN),
            dropped_in_node: await query(t.DROPPED_IN_NODE),
            obtained_from: await query(t.OBTAINED_FROM),
            sold_by_npc: await query(t.SOLD_BY_NPC),
        }
    }
}
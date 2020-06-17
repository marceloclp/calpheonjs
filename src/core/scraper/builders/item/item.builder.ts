import * as AppUtils from "../../../../utils";
import * as Scrapers from "../../typings";
import { App } from "../../../../typings";
import { Queries } from "../../../query";
import { Pricings } from "../../typings";
import { Generic } from "../generic.builder";

export class Item extends Generic {
    private async query(type: Queries.Types): Promise<any[]> {
        const matches = {
            [App.Locales.US]: {
                [Queries.Types.QUEST_REWARD]: 'questreward',
                [Queries.Types.PRODUCT_IN_RECIPE]: 'productofrecipe',
                [Queries.Types.PRODUCT_IN_PROCESSING]: 'mproductofrecipe',
            }
        }[this._locale];
        if (!(type in matches))
            return [];
        const match = (matches as any)[type];
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

    get prices(): Pricings {
        const matches = {
            buy:    { [App.Locales.US]: 'Buy' }[this._locale],
            sell:   { [App.Locales.US]: 'Sell' }[this._locale],
            repair: { [App.Locales.US]: 'Repair' }[this._locale],
        };
        const keys = <const>['buy', 'sell', 'repair'];

        return this.getBodyNodes()
            .filter(node => node.type === 'text' && node.data)
            .map(node => node.data as string)
            .reduce((prices, str) => {
                const key = keys.find(
                    key => AppUtils.indexOf(str, matches[key]).substr
                );
                if (!key) return prices;
                return { ...prices, [key]: parseInt(str.replace(/\D/g, '')) };
            }, {} as Pricings);
    }

    async build(): Promise<Scrapers.Entities.Item> {
        const t = Queries.Types;
        const query = this.query.bind(this);
        return {
            ...(await super.build()),
            prices: this.prices,
            grade: this.grade,
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
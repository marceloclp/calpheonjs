import * as Scrapers from "../../typings";
import { App } from "../../../typings";
import { Queries } from "../../../query";
import { Pricings } from "../../typings";
import { Generic } from "../generic.builder";
import { Matcher } from "../../../shared";

export class Item extends Generic {
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
        const Types = Queries.Types;
        const qf = this.queryFactory.bind(this);
        return {
            ...(await super.build()),
            prices: this.prices,
            grade:  this.grade,
            weight: this.weight,
            npc_drops:              qf(Types.NPC_DROPS),
            quest_rewards:          qf(Types.QUEST_REWARD),
            product_of_recipes:     qf(Types.PRODUCT_IN_DESIGN),
            product_of_processing:  qf(Types.PRODUCT_IN_PROCESSING),
            product_of_design:      qf(Types.PRODUCT_IN_DESIGN),
            material_of_recipes:    qf(Types.MATERIAL_IN_RECIPE),
            material_of_processing: qf(Types.MATERIAL_IN_PROCESSING),
            material_of_design:     qf(Types.MATERIAL_IN_DESIGN),
            dropped_in_node:        qf(Types.DROPPED_IN_NODE),
            obtained_from:          qf(Types.OBTAINED_FROM),
            sold_by_npc:            qf(Types.SOLD_BY_NPC),
        };
    }
}
import * as Builders from "../";
import * as Scrapers from "../../typings";
import { App } from "../../../shared/typings";
import { Queries } from "../../../query";
import { Pricings } from "../../typings";
import { Generic } from "../generic.builder";
import { Matcher } from "../../../shared";

export class Item extends Generic {
    static get(type: Scrapers.Types, ctg_id: Scrapers.Ctgs): typeof Generic {
        return ({
            [Scrapers.Ctgs.CONSUMABLE]: Builders.Consumable,
            [Scrapers.Ctgs.EQUIPMENT]:  Builders.Equipment,
        } as any)[ctg_id]?.get(type, ctg_id) || Item;
    }

    static get type(): string {
        return <const> "item";
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
        const QTypes = Queries.Types;
        const qf = this.QueryFactory.bind(this);
        return {
            ...(await super.build()),
            prices: this.prices,
            grade:  this.grade,
            weight: this.weight,
            npc_drops:              qf(QTypes.NPC_DROPS),
            quest_rewards:          qf(QTypes.QUEST_REWARD),
            product_of_recipes:     qf(QTypes.PRODUCT_IN_DESIGN),
            product_of_processing:  qf(QTypes.PRODUCT_IN_PROCESSING),
            product_of_design:      qf(QTypes.PRODUCT_IN_DESIGN),
            material_of_recipes:    qf(QTypes.MATERIAL_IN_RECIPE),
            material_of_processing: qf(QTypes.MATERIAL_IN_PROCESSING),
            material_of_design:     qf(QTypes.MATERIAL_IN_DESIGN),
            dropped_in_node:        qf(QTypes.DROPPED_IN_NODE),
            obtained_from:          qf(QTypes.OBTAINED_FROM),
            sold_by_npc:            qf(QTypes.SOLD_BY_NPC),
        };
    }
}
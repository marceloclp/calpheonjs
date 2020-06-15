import * as Scrapers from "../../typings";
import { Scraper } from "../scraper";
import { Queries } from "../../../query";
import { App } from "../../../../typings";

export class ItemScraper extends Scraper {
    protected canQuery(type: Queries.Types): boolean {
        const matches = {
            [App.Locales.US]: {
                [Queries.Types.QUEST_REWARD]: 'questreward',
                [Queries.Types.PRODUCT_IN_RECIPE]: 'productofrecipe',
                [Queries.Types.PRODUCT_IN_PROCESSING]: 'mproductofrecipe',
            }
        }[this._locale];
        if (!(type in matches))
            return false;
        const href = `#tabs-${(matches as any)[type]}`;
        return !!this.$(`a[href="${href}"]`).length;
    }

    protected async query<T = any>(type: Queries.Types): Promise<T[]> {
        if (!this.canQuery(type))
            return [];
        return (await this._query(this._id, type, {
            db: this._db,
            locale: this._locale,
        })).data as T[];
    }

    async build(): Promise<Scrapers.Entities.Item> {
        const Types = Queries.Types;
        return {
            ...(await super.build()),
            prices: this.prices,
            npc_drops: await this.query(Types.NPC_DROPS),
            quest_rewards: await this.query(Types.QUEST_REWARD),
            product_of_recipes: await this.query(Types.PRODUCT_IN_RECIPE),
            product_of_processing: await this.query(Types.PRODUCT_IN_PROCESSING),
            product_of_design: await this.query(Types.PRODUCT_IN_DESIGN),
            material_of_recipes: await this.query(Types.MATERIAL_IN_RECIPE),
            material_of_processing: await this.query(Types.MATERIAL_IN_PROCESSING),
            material_of_design: await this.query(Types.MATERIAL_IN_DESIGN),
            dropped_in_node: await this.query(Types.DROPPED_IN_NODE),
            obtained_from: await this.query(Types.OBTAINED_FROM),
            sold_by_npc: await this.query(Types.SOLD_BY_NPC),
        }
    }
}
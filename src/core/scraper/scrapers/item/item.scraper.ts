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
        return {
            ...(await super.build()),
            prices: this.prices,
            in_quest_rewards: await this.query(Queries.Types.QUEST_REWARD),
            product_of_recipes: await this.query(Queries.Types.PRODUCT_IN_RECIPE),
            product_of_processing: await this.query(Queries.Types.PRODUCT_IN_PROCESSING),
        }
    }
}
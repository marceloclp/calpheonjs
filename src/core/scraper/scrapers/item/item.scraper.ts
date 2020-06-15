import * as Scrapers from "../../typings";
import { Scraper } from "../scraper";
import { Queries } from "../../../query";

export class ItemScraper extends Scraper {
    async quest_rewards(): Promise<Queries.Entities.Quest[]> {
        const type = Queries.Types.QUEST_REWARD;
        if (!this.canQuery(type))
            return [];
        const result = await this.query(this._id, type, {
            db: this._db,
            locale: this._locale,
        });
        return result.data as any;
    }

    private canQuery(type: Queries.Types): boolean {
        const matches = {
            [Queries.Types.QUEST_REWARD]: 'questreward',
        };
        if (!(type in matches))
            return false;
        const href = `#tabs-${(matches as any)[type]}`;
        return !!this.$(`a[href="${href}"]`).length;
    }

    async build(): Promise<Scrapers.Entities.Item> {
        return {
            ...(await super.build()),
            prices: this.prices,
            quest_rewards: await this.quest_rewards(),
        }
    }
}
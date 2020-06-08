import * as Scrapers from "../../typings";
import { Scraper } from "../scraper";

export class ItemScraper extends Scraper {
    //async quest_rewards(): Queries.Result<Queries.Quest> {
    async quest_rewards(): Promise<void> {
        const node = this.$('a[href="#tabs-questreward"]');
        console.log(node);
    }

    build(): Scrapers.Entities.Item {
        return {
            ...super.build(),
            prices: this.prices,
        }
    }
}
import { Scrapers } from "../../../scraper";
import { Generic } from "./generic.entity";

export interface Item extends Generic {
    type: 'item';

    /** The level required to use the item. */
    lvl: number;

    scrape: Scrapers.ScrapeFn<Scrapers.Entities.Item>;
}
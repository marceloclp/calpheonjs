import { Scrapers } from "../../../scraper";

export interface Item {
    type: 'item';

    /** The item id. */
    id: string;

    /** The item icon. */
    icon: string;

    /** The item short url. */
    shortUrl: string;

    scrape: Scrapers.ScrapeFn<Scrapers.Entities.Item>;
}
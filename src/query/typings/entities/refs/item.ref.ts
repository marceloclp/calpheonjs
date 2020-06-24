import { Scrapers } from "../../../../scraper";

export interface Item {
    type: 'item';

    id: string;

    icon: string;

    shortUrl: string;

    scrape: Scrapers.ScrapeFn<Scrapers.Entities.Item>;
}
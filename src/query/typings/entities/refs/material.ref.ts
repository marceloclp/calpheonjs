import { Scrapers } from "../../../../scraper";

export interface Material {
    type: 'item' | 'unknown';

    id: string;

    icon: string;

    shortUrl: string;

    amount: number;

    scrape?: Scrapers.ScrapeFn;
}
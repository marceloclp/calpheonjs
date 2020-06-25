import { Scrapers } from "../../../../scraper";

export interface MaterialGroup {
    type: 'material_group';

    /** The material group id. */
    id: string;

    /** An icon to represent the material group. */
    icon: string;

    /** The material group short url. */
    shortUrl: string;

    scrape: Scrapers.ScrapeFn<Scrapers.Entities.MaterialGroup>;
}
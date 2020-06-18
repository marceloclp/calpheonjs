import { EntityTypes } from "../../types";
import { Scrapers } from "../../../../scraper";

export interface Generic {
    type: EntityTypes;

    id: string;

    icon: string;

    shortUrl: string;

    scrape?: Scrapers.ScrapeFn;
}
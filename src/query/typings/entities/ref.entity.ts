import { EntityTypes } from "../types";
import { Scrapers } from "../../../scraper";

/**
 * A reference entity contains only the most basic information about an entity.
 */
export interface Ref {
    type: EntityTypes;

    id: string;

    icon: string;

    shortUrl: string;

    scrape?: <T = any>() => Promise<Scrapers.Result<T>>;
}
import { fetch } from "./fetch";
import { Scraper } from "../../scrapers/scraper";
import { Dbs, Locales, EntityTypes } from "../../enums";
import ScrapeFactory from "../../scrapers";

export interface ScrapeOptions {
    readonly baseUrl: Dbs;
    readonly locale: Locales;
    readonly type: EntityTypes;
}

export const defaultOptions: ScrapeOptions = {
    baseUrl: Dbs.BDO_CODEX,
    locale: Locales.US,
    type: EntityTypes.ITEM,
};

export const scrape = async (id: string, options = defaultOptions): Promise<Scraper> => {
    const url = 'https://' + [
        options.baseUrl,
        options.locale,
        options.type,
        id
    ].join('/') + '/';

    const $ = await fetch(url);

    return ScrapeFactory(url,
        id,
        options.baseUrl,
        options.locale,
        options.type,
        $
    );
}
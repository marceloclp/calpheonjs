import cheerio from "cheerio";
import ScrapeFactory from "./scrapers";
import { App } from "../typings/app";
import { fetch } from "./fetch";
import { Scraper } from "./scrapers/scraper";

export interface ScrapeOptions {
    readonly baseUrl: App.Dbs;
    readonly locale: App.Locales;
    readonly type: App.EntityTypes;
}

export const defaultOptions: ScrapeOptions = {
    baseUrl: App.Dbs.BDO_CODEX,
    locale: App.Locales.US,
    type: App.EntityTypes.ITEM,
};

export const scrape = async (id: string, options = defaultOptions): Promise<Scraper> => {
    const url = 'https://' + [
        options.baseUrl,
        options.locale,
        options.type,
        id
    ].join('/') + '/';

    const $ = cheerio.load(await fetch(url));

    return ScrapeFactory(url,
        id,
        options.baseUrl,
        options.locale,
        options.type,
        $
    );
}
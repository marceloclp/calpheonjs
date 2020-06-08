import * as Utils from "./utils";
import * as AppUtils from "../../utils";
import * as Scrapers from "./typings";
import { App } from "../../typings";
import { Scraper as ScraperClass } from "./scrapers";

export const Scrape = async <T = any>(
    id: string,
    type: Scrapers.EntityTypes,
    options?: Scrapers.Options,
): Promise<T> => {
    const locale = options?.locale || App.Locales.US;
    const db = options?.db || App.Dbs.BDO_CODEX;
    const url = 'https://' + [db, locale, type, id].join('/') + '/';
    const $ = cheerio.load(await AppUtils.fetch(url));
    
    const { category_id } = new ScraperClass(url, id, db, locale, type, $);
    const ScraperCtor = Utils.mapCategoryToScraper(category_id, type);

    return new ScraperCtor(url, id, db, locale, type, $).build() as any;
}

export const Equipment = async (
    id: string,
    options?: Scrapers.Options,
): Promise<Scrapers.Entities.Equipment> => {
    return Scrape(id, Scrapers.EntityTypes.ITEM, options);
};
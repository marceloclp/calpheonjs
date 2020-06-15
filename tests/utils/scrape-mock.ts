import cheerio from "cheerio";
import * as cache from "./cache";
import * as AppUtils from "../../src/utils";
import * as ScraperUtils from "../../src/core/scraper/utils";
import { App } from "../../src/typings";
import { Scrapers } from "../../src/core";
import { Scraper as ScraperClass } from "../../src/core/scraper/scrapers";
import QueryMock from "./query-mock";

const ScrapeMock = async <T = any>(
    id: string,
    type: Scrapers.EntityTypes,
    options?: Scrapers.Options,
): Promise<T> => {
    const locale = options?.locale || App.Locales.US;
    const db = options?.db || App.Dbs.BDO_CODEX;
    const url = 'https://' + [db, locale, type, id].join('/') + '/';

    const key = [
        "scrape",
        locale,
        type,
        id,
    ].join('-');
    let $: CheerioStatic;
    if (cache.has(key)) {
        $ = cheerio.load(cache.get(key));
    } else {
        $ = cheerio.load(cache.set(key, await AppUtils.fetch(url)));
    }

    const { category_id } = new ScraperClass(
        url,
        id,
        db,
        locale,
        type,
        $,
        AppUtils.fetch,
        QueryMock,
    );
    
    const Ctor = ScraperUtils.mapCategoryToScraper(category_id, type);

    return new Ctor(
        url,
        id,
        db,
        locale,
        type,
        $,
        AppUtils.fetch,
        QueryMock
    ).build() as any;
}

export default ScrapeMock;
export { Scrapers } from "../../src/core";
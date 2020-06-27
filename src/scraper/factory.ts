import * as AppUtils from "../shared/utils";
import * as Scrapers from "./typings";
import { App } from "../shared/typings";
import { Scraper } from "./scraper";
import Query from "../query";

export const Scrape: Scrapers.Scrape = async <T = any>(
    id: string,
    type: Scrapers.Types,
    options?: Scrapers.Options,
): Promise<Scrapers.Result<T>> => {
    const locale = options?.locale || App.Locales.US;
    const db = options?.db || App.Dbs.BDO_CODEX;

    return await new Scraper(
        id,
        db,
        locale,
        type,
        AppUtils.fetch,
        Query,
        Scrape,
    ).parse();
}
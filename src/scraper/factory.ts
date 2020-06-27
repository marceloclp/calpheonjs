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

    return await new Scraper(
        id,
        locale,
        type,
        AppUtils.fetch,
        Query,
        Scrape,
    ).parse();
}
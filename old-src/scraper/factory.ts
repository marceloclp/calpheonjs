import * as AppUtils from "../shared/utils";
import * as Scrapers from "./typings";
import { App } from "../shared/typings";
import { Scraper } from "./scraper";
import { Query } from "../query";

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

export const Item          = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.Item>(id, Scrapers.Types.ITEM, options || {});

export const Consumable    = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.Consumable>(id, Scrapers.Types.ITEM, options || {});

export const Equipment     = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.Equipment>(id, Scrapers.Types.ITEM, options || {});

export const Knowledge     = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.Knowledge>(id, Scrapers.Types.KNOWLEDGE, options || {});

export const MaterialGroup = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.MaterialGroup>(id, Scrapers.Types.MATERIAL_GROUP, options || {});

export const NPC           = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.NPC>(id, Scrapers.Types.NPC, options || {});

export const Worker        = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.Worker>(id, Scrapers.Types.NPC, options || {});

export const Quest         = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.Quest>(id, Scrapers.Types.QUEST, options || {});

export const Recipe        = (id: string, options?: Scrapers.Options) => Scrape<Scrapers.Entities.Recipe>(id, Scrapers.Types.RECIPE, options || {});

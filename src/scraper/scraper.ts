import cheerio from "cheerio";
import * as AppUtils from "../shared/utils";
import * as Scrapers from "./typings";
import * as Builders from "./builders";
import { App } from "../shared";
import { Queries } from "../query";

export class Scraper {
    constructor(
        private readonly _id: string,

        private readonly _db: App.Dbs,

        private readonly _locale: App.Locales,

        private readonly _type: Scrapers.EntityTypes,

        private readonly _fetch: App.FetchFn,

        private readonly _query: Queries.Query,

        private readonly _scrape: Scrapers.Scrape,
    ) {}

    private get url(): string {
        return 'https://' + [
            this._db,
            this._locale,
            this._type,
            this._id,
        ].join('/') + '/';
    }

    private getCategoryId($: CheerioStatic): App.Categories {
        const category = AppUtils.cleanStr($('.category_text').text());
        return AppUtils.normalizeCategory(category, this._locale);
    }

    private getBuilder(ctg_id: App.Categories) {
        const Ctgs  = App.Categories;
        const Types = Scrapers.EntityTypes;

        switch (this._type) {
            case Types.ITEM:
                switch (ctg_id) {
                    case Ctgs.CONSUMABLE:
                        return Builders.Consumable;
                    case Ctgs.EQUIPMENT:
                        return Builders.Equipment;
                    default:
                        return Builders.Item;
                }
            case Types.NPC:
                switch (ctg_id) {
                    case Ctgs.WORKER:
                        return Builders.Worker;
                    default:
                        return Builders.NPC;
                }
            case Types.MATERIAL_GROUP:
                return Builders.MaterialGroup;
            case Types.QUEST:
                return Builders.Quest;
            case Types.RECIPE:
                return Builders.Recipe;
            case Types.KNOWLEDGE:
                return Builders.Knowledge;
            default:
                return Builders.Generic;
        }
    }

    async fetch(): Promise<string> {
        return this._fetch(this.url);
    }

    async parse(): Promise<Scrapers.Result> {
        const $       = cheerio.load(await this.fetch());
        const ctg_id  = this.getCategoryId($);
        const Builder = this.getBuilder(ctg_id);

        const data = await new Builder(
            this._id,
            this._db,
            this._locale,
            this._type,
            $,
            this._query,
            this._scrape,
        ).build();

        return { url: this.url, type: ctg_id,  data };
    }
}
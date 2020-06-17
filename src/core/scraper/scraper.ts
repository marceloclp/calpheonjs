import cheerio from "cheerio";
import * as AppUtils from "../../utils";
import * as Scrapers from "./typings";
import * as Builders from "./builders";
import { App } from "../../typings";
import { Queries } from "../query";

export class Scraper {
    constructor(
        private readonly _id: string,

        private readonly _db: App.Dbs,

        private readonly _locale: App.Locales,

        private readonly _type: Scrapers.EntityTypes,

        private readonly _fetch: App.FetchFn,

        private readonly _query: Queries.Query,
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
        const Ctgs = App.Categories;
        const category = AppUtils.cleanStr($('.category_text').text())
            .toLowerCase()
            .replace(/\ /g, '_');
        switch (this._locale) {
            case App.Locales.US:
                switch (category) {
                    case 'equipment':          return Ctgs.EQUIPMENT;
                    case 'crafting_materials': return Ctgs.CRAFTING_MATERIAL;
                    case 'consumable':         return Ctgs.CONSUMABLE;
                    case 'installable_object': return Ctgs.INSTALLABLE_OBJECT;
                    default:                   return Ctgs.UNDEFINED;
                }
            default: return Ctgs.UNDEFINED;
        }
    }

    private getBuilder(category: App.Categories) {
        const Ctgs = App.Categories;
        switch (this._type) {
            case Scrapers.EntityTypes.ITEM:
                switch (category) {
                    case Ctgs.EQUIPMENT: return Builders.Equipment;
                    default:             return Builders.Item;
                }
            default: return Builders.Generic;
        }
    }

    async fetch(): Promise<string> {
        return this._fetch(this.url);
    }

    async parse(): Promise<Scrapers.Result> {
        const $ = cheerio.load(await this.fetch());
        const category_id = this.getCategoryId($);
        const Builder = this.getBuilder(category_id);

        const data = await new Builder(
            this._id,
            this._db,
            this._locale,
            this._type,
            $,
            this._query,
        ).build();

        return {
            url: this.url,
            type: category_id,
            data,
        };
    }
}
import cheerio from "cheerio";
import * as AppUtils from "../../shared/utils";
import * as Queries from "../typings";
import { BDOCodex, Undef } from "../../shared/typings";
import { Scrapers } from "../../scraper";
import { Generic } from "./generic.builder";

export class Recipe extends Generic {
    static get type() {
        return <const> "recipe";
    }

    getProcess(raw: string): Undef<string> {
        return raw || undefined;
    }

    getSkillLvl(raw: string): Queries.Recipes.SkillLvl {
        return {
            mastery: raw.replace(/\d/g, '').trim(),
            lvl: AppUtils.parseIntValue(raw),
        }
    }

    getMaterials(raw: string): Queries.Recipes.Material[] {
        const $ = cheerio.load('<div>' + raw + '</div>');
        return $('div > div.iconset_wrapper_medium').toArray().map(node => {
            const elem   = $(node);
            const anchor = elem.find('a');
            const txt    = elem.find('.quantity_small');
            const img    = elem.find('.icon_wrapper');
            const url    = anchor.attr('href') as string;
            const type   = AppUtils.decomposeShortURL(url).type;

            switch (type) {
                case Scrapers.EntityTypes.ITEM:
                    return {
                        type: 'item',
                        id: AppUtils.decomposeShortURL(url).id,
                        amount: parseInt(txt.text()) || 1,
                        icon: this.parseIconURL(img.text()),
                        shortUrl: url,
                        scrape: this.ScrapeFactory(url),
                    };
                default:
                    return {
                        type: 'material_group',
                        id: AppUtils.decomposeShortURL(url).id,
                        amount: parseInt(txt.text()) || 1,
                        icon: this.parseIconURL(img.text()),
                        shortUrl: url,
                        scrape: this.ScrapeFactory(url),
                    };
            }
        });
    }

    build(data: BDOCodex.Query.Recipe): Queries.Entities.Recipe[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: Recipe.type,
                id: arr[0],
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                process: this.getProcess(arr[3]),
                exp: AppUtils.parseIntValue(arr[5]),
                skill_lvl: this.getSkillLvl(arr[4].display),
                materials: this.getMaterials(arr[6]),
                products: this.getMaterials(arr[7]),
                shortUrl: url,
                scrape: this.ScrapeFactory(url),
            }
        });
    }
}
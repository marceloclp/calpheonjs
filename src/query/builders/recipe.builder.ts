import cheerio from "cheerio";
import * as AppUtils from "../../utils";
import * as Queries from "../typings";
import { BDOCodex, Undef } from "../../typings";
import { Scrapers } from "../../scraper";
import { Generic } from "./generic.builder";

export class Recipe extends Generic {
    getIconURL(raw: string): string {
        return AppUtils.splitStr(raw, '[img src="', '"') as string;
    }

    getProcess(raw: string): Undef<string> {
        return raw || undefined;
    }

    getEXP(raw: string): number {
        return parseInt(raw.replace(/\D/g, '')) || 0;
    }

    getSkillLvl(raw: string): Queries.Recipes.SkillLvl {
        return {
            mastery: raw.replace(/\d/g, '').trim(),
            lvl: parseInt(raw.replace(/\D/g, '')),
        }
    }

    getShortURL(raw: string): string {
        return cheerio.load(raw)('a').attr('href') as string;
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
                        scrape: this.ScrapeFactory(url) as any,
                    };
                default:
                    return {
                        type: 'material_group',
                        id: AppUtils.decomposeShortURL(url).id,
                        amount: parseInt(txt.text()) || 1,
                        icon: this.parseIconURL(img.text()),
                        shortUrl: url,
                    };
            }
        });
    }

    build(data: BDOCodex.Query.Recipe): Queries.Entities.Recipe[] {
        return data.aaData.map(arr => {
            const url = this.getShortURL(arr[2]);

            return {
                type: 'recipe',
                id: arr[0],
                icon: this.getIconURL(arr[1]),
                name: this.parseName(arr[2]),
                process: this.getProcess(arr[3]),
                exp: this.getEXP(arr[5]),
                skill_lvl: this.getSkillLvl(arr[4].display),
                materials: this.getMaterials(arr[6]),
                products: this.getMaterials(arr[7]),
                shortUrl: url,
                scrape: this.ScrapeFactory(url) as any,
            }
        });
    }
}
import * as AppUtils from "../../shared/utils";
import * as Scrapers from "../typings";
import { Generic } from "./generic.builder";

export class MaterialGroup extends Generic {
    get items(): Scrapers.Refs.Item[] {
        const nodes = this.$('hr.hr_long')
            .parent()
            .children()
            .toArray();
        return nodes.reduce((items, node, i, arr) => {
            if (node.tagName !== 'div')
                return items;

            const elem = this.$(node);
            const icon = elem.find('img').attr('src') as string;
            const url  = elem.find('a').attr('href') as string;

            return [...items, {
                type: 'item',
                id: AppUtils.decomposeShortURL(url).id,
                icon,
                name: this.$(arr[i+1]).text(),
                shortUrl: url,
                scrape: this.ScrapeFactory(url),
            }];
        }, [] as Scrapers.Refs.Item[]);
    }

    async build(): Promise<Scrapers.Entities.MaterialGroup> {
        const items = this.items;
        return {
            ...(await super.build()),
            icon: items[0].icon,
            items,
        }
    }
}
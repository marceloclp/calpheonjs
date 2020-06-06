import * as Utils from "../../utils";
import { App } from "../../typings/app";
import { BDO } from "../../typings/bdo";
import { BDOCodex } from "../../typings/bdocodex";
import { BR_TAG, BR_CHAR } from "../../constants";

export class Scraper {
    constructor(
        protected readonly _url: string,

        protected readonly _id: string,
        
        protected readonly _db: App.Dbs,

        protected readonly _locale: App.Locales,

        protected readonly _type: App.EntityTypes,

        protected readonly $: CheerioStatic,
    ) {}

    protected parseIconUrl(url: string): string {
        return Utils.getIconUrl(this._db, url);
    }

    protected getBodyNodes(deep?: boolean): CheerioElement[] {
        let nodes = this.$('table.smallertext > tbody > tr > td')
            .contents()
            .toArray();
        if (!deep)
            return nodes;
        let i = -1;
        while (++i < nodes.length) {
            if (!nodes?.[i].children)
                continue;
            nodes = [
                ...nodes.slice(0, i+1),
                ...nodes[i].children,
                ...nodes.slice(i+1),
            ];
        }
        return nodes;
    }

    protected parsePageInfo(): BDOCodex.PageInfo {
        const raw = this.$('script[type="application/ld+json"]')
            .first()
            .html();
        if (!raw)
            return {} as BDOCodex.PageInfo;
        return JSON.parse(Utils.cleanStr(raw));
    }

    get url(): string {
        return this._url;
    }

    get id(): string {
        return this._id;
    }

    get locale(): string {
        return this._locale;
    }

    get type(): string {
        return this._type;
    }

    get icon(): string {
        return this.parseIconUrl(this.$('.item_icon').attr('src') as string);
    }

    get name(): string {
        return Utils.cleanStr(this.$('.item_title').text());
    }

    get name_alt(): string {
        return this.$('.item_sub_title').text();
    }

    get category(): string {
        return Utils.cleanStr(this.$('.category_text').text());
    }

    get category_id(): App.Categories {
        return Utils.normalizeCategory(this.category, this._locale);
    }

    get weight(): string {
        const match = {
            [App.Locales.US]: 'Weight:'
        }[this._locale];
        const str = this.$('.category_text').parent().text();
        const { idx: startIdx } = Utils.indexOf(str, match, 0, true);
        const { idx: endIdx } = Utils.indexOf(str, '\n', startIdx);
        return Utils.cleanStr(str.substring(startIdx, endIdx));
    }

    get grade(): number {
        const str = this.$('.item_title').attr('class') as string;
        return parseInt(str.replace(/\D/g, ''));
    }

    get description(): string {
        const match = {
            [App.Locales.US]: ['Description:'],
        }[this._locale];

        const strs = this.getBodyNodes(true)
            .map(({ name, data }) => {
                if (name === 'br' || data === BR_CHAR)
                    return BR_TAG;
                return (data || "").replace(/\&apos;/g, "'");
            })
            .filter(str => str);
        let i = strs.findIndex(e => Utils.indexOf(e, match).substr) + 1;
        while (strs[i] === BR_TAG) i++;

        let val = '';
        while (strs[i] !== BR_TAG)
            val += strs[i++];

        return Utils.cleanStr(val);
    }

    get prices(): BDO.Pricings {
        const matches = {
            buy:    { [App.Locales.US]: 'Buy' }[this._locale],
            sell:   { [App.Locales.US]: 'Sell' }[this._locale],
            repair: { [App.Locales.US]: 'Repair' }[this._locale],
        };
        const keys = Object.keys(matches) as (keyof typeof matches)[];

        const strs = this.getBodyNodes()
            .filter(node => node.type === 'text' && node.data)
            .map(node => node.data as string);
        
        return strs.reduce((prices, str) => {
            const key = keys.find(
                key => Utils.indexOf(str, matches[key]).substr
            );
            if (!key)
                return prices;
            const value = parseInt(Utils.cleanStr(str).replace(/\D/g, ''));
            return { ...prices, [key]: value };
        }, {} as BDO.Pricings);
    }
}
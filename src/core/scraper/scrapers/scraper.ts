import * as AppUtils from "../../../utils";
import * as Scrapers from "../typings";
import { App, BDOCodex } from "../../../typings";
import { Pricings } from "../typings/interfaces";
import { Queries } from "../../query";

export class Scraper {
    constructor(
        protected readonly _url: string,

        protected readonly _id: string,

        protected readonly _db: App.Dbs,

        protected readonly _locale: App.Locales,

        protected readonly _type: Scrapers.EntityTypes,

        protected readonly $: CheerioStatic,

        protected readonly fetch: App.FetchFn,

        protected readonly query: Queries.Query,
    ) {}

    protected parseIconURL(url: string): string {
        return `https://` + this._db +
            (url.charAt(0) === '/' ? '' : '/') + url;
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
        return JSON.parse(AppUtils.cleanStr(raw));
    }

    get url(): string {
        return this._url;
        return 'https://' + [
            this._db,
            this._locale,
            this._type,
            this._id,
        ].join('/') + '/';
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
        return this.parseIconURL(this.$('.item_icon').attr('src') as string);
    }

    get name(): string {
        return AppUtils.cleanStr(this.$('.item_title').text());
    }

    get name_alt(): string {
        return this.$('.item_sub_title').text();
    }

    get category(): string {
        return AppUtils.cleanStr(this.$('.category_text').text());
    }

    get category_id(): App.Categories {
        return AppUtils.normalizeCategory(this.category, this._locale);
    }

    get weight(): string {
        const match = {
            [App.Locales.US]: 'Weight:'
        }[this._locale];
        const str = this.$('.category_text').parent().text();
        const { idx: startIdx } = AppUtils.indexOf(str, match, 0, true);
        const { idx: endIdx } = AppUtils.indexOf(str, '\n', startIdx);
        return AppUtils.cleanStr(str.substring(startIdx, endIdx));
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
                if (name === 'br' || data === '\n')
                    return '<br>';
                return (data || "").replace(/\&apos;/g, "'");
            })
            .filter(str => str);
        let i = strs.findIndex(e => AppUtils.indexOf(e, match).substr) + 1;
        while (strs[i] === '<br>') i++;

        let val = '';
        while (strs[i] !== '<br>')
            val += strs[i++];

        return AppUtils.cleanStr(val);
    }

    get prices(): Pricings {
        const matches = {
            buy:    { [App.Locales.US]: 'Buy' }[this._locale],
            sell:   { [App.Locales.US]: 'Sell' }[this._locale],
            repair: { [App.Locales.US]: 'Repair' }[this._locale],
        };
        const keys = <const>['buy', 'sell', 'repair'];

        return this.getBodyNodes()
            .filter(node => node.type === 'text' && node.data)
            .map(node => node.data as string)
            .reduce((prices, str) => {
                const key = keys.find(
                    key => AppUtils.indexOf(str, matches[key]).substr
                );
                if (!key) return prices;
                return { ...prices, [key]: parseInt(str.replace(/\D/g, '')) };
            }, {} as Pricings);
    }

    async build(): Promise<Scrapers.Entities.Generic> {
        return {
            id: this.id,
            icon: this.icon,
            name: this.name,
            name_alt: this.name_alt,
            type: this.type,
            category: this.category,
            category_id: this.category_id,
            grade: this.grade,
            description: this.description,
            url: this.url,
        };
    }
}
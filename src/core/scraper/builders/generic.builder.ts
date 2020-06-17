import * as AppUtils from "../../../utils";
import * as Scrapers from "../typings";
import { App, BDOCodex } from "../../../typings";
import { Queries } from "../../query";

export class Generic {
    constructor(
        protected readonly _id: string,

        protected readonly _db: App.Dbs,

        protected readonly _locale: App.Locales,

        protected readonly _type: Scrapers.EntityTypes,

        protected readonly $: CheerioStatic,

        protected readonly _query: Queries.Query,
    ) {}

    protected getBodyNodes(deep?: boolean): CheerioElement[] {
        let nodes = this.$('table.smallertext > tbody > tr > td')
            .contents()
            .toArray();
        if (!deep)
            return nodes;
        let i = -1;
        while (++i < nodes.length)
            if (nodes?.[i].children)
                nodes.splice(i+1, 0, ...nodes[i].children);
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

    get icon(): string {
        return this.$('.item_icon').attr('src') as string;
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

    async build(): Promise<Scrapers.Entities.Generic> {
        return {
            id: this._id,
            icon: this.icon,
            name: this.name,
            name_alt: this.name_alt,
            type: this._type,
            category: this.category,
            description: this.description,
        }
    }
}
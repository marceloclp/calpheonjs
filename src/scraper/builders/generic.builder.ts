import * as AppUtils from "../../utils";
import * as Scrapers from "../typings";
import { App, BDOCodex } from "../../typings";
import { Queries } from "../../query";
import { Matcher, ContextCache } from "../../shared";

export class Generic {
    constructor(
        protected readonly _id: string,

        protected readonly _db: App.Dbs,

        protected readonly _locale: App.Locales,

        protected readonly _type: Scrapers.EntityTypes,

        protected readonly $: CheerioStatic,

        protected readonly _query: Queries.Query,

        protected readonly _scrape: Scrapers.Scrape,
    ) {}

    protected readonly cache = new ContextCache();

    protected getTableRows(): CheerioElement[] {
        if (!this.cache.has('table_rows')) {
            const nodes = this.$('.smallertext > tbody > tr > td').toArray();
            this.cache.set('table_rows', nodes);
        }
        return this.cache.get('table_rows');
    }

    protected getTableRow(matcher: Matcher): CheerioElement | undefined {
        return this.getTableRows()
            .find(node => matcher.in(this.$(node).text()));
    }

    protected getBodyNodes(deep?: boolean): CheerioElement[] {
        if (!this.cache.has('body_nodes')) {
            const nodes = this.$('table.smallertext > tbody > tr > td')
                .contents()
                .toArray();
            this.cache.set('body_nodes', nodes);
        }
        if (deep && !this.cache.has('body_nodes_deep')) {
            let nodes = this.cache.get<CheerioElement[]>('body_nodes');
            let i = -1;
            while (++i < nodes.length)
                if (nodes[i].children)
                    nodes.splice(i+1, 0, ...nodes[i].children);
            this.cache.set('body_nodes_deep', nodes);
        }
        return deep
            ? this.cache.get('body_nodes_deep')
            : this.cache.get('body_nodes');
    }

    protected getTextNodeFromCategoryWrapper(matcher: Matcher): CheerioElement | undefined {
        if (!this.cache.has('category_nodes')) {
            const nodes = this.$('.category_text')
                .parent()
                .contents()
                .toArray();
            this.cache.set('category_nodes', nodes);
        }
        return this.cache.get<CheerioElement[]>('category_nodes')
            .find(node => {
                const str = node.tagName === 'span'
                    ? this.$(node).text()
                    : node.data as string;
                return matcher.in(str);
            });
    }

    protected parsePageInfo(): BDOCodex.PageInfo {
        if (!this.cache.get('page_info')) {
            const raw = this.$('script[type="application/ld+json"]')
                .first()
                .html();
            const data = raw ? JSON.parse(AppUtils.cleanStr(raw)) : {};
            this.cache.set('page_info', data);
        };
        return this.cache.get('page_info');
    }

    protected scrapeFactory(shortUrl: string): Scrapers.ScrapeFn | undefined {
        const type = shortUrl.split('/')[2] as Scrapers.EntityTypes;
        const id = AppUtils.getIdFromURL(shortUrl);
        if (!Object.values(Scrapers.EntityTypes).includes(type))
            return undefined;
        return async <T = any>() => {
            return await this._scrape<T>(id, type, {
                db: this._db,
                locale: this._locale
            });
        };
    }

    get icon(): string {
        return this.$('.item_icon').attr('src') as string;
    }

    get name(): string {
        return AppUtils.cleanStr(this.$('.item_title').text());
    }

    get name_alt(): string | undefined {
        return this.$('.item_sub_title').text() || undefined;
    }

    get category(): string {
        return AppUtils.cleanStr(this.$('.category_text').text());
    }

    get grade(): number {
        return parseInt(this.$('.item_title')
            .attr('class')
            ?.replace(/\D/g, '') as string) || 0;
    }

    get description(): string {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Description:'],
        });

        const nodes = this.$('.smallertext > tbody > tr > td')
            .toArray()
            .find(node => matcher.in(this.$(node).text()))
            ?.childNodes || [];
        if (!matcher.length) return '';
        
        const strs = [];
        let i = nodes.findIndex(node => matcher.in(node.data));
        while (++i < nodes.length) {
            if (nodes[i]?.tagName === 'br' && nodes[i+1]?.tagName === 'br')
                break;
            if (['div', 'hr'].includes(nodes[i]?.tagName))
                break;
            if (nodes[i]?.type === 'text')
                if (['-'].includes(nodes[i].data?.trim()[0] as string))
                    break;
            const str = nodes[i]?.tagName === 'span'
                ? this.$(nodes[i]).text()
                : nodes[i].data as string;
            if (!str)
                continue;
            if (strs.length && nodes[i-1]?.tagName !== 'br')
                strs[strs.length - 1] += str;
            else strs.push(str);
        }
        return strs.join('\n').trim();
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
import * as AppUtils from "../../utils";
import * as Scrapers from "../typings";
import { App, BDOCodex, Maybe } from "../../typings";
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
        const ctx = this.cache.for<{
            rows?: CheerioElement[],
        }>('table_rows')
        if (!ctx.has('rows')) {
            const rows = this.$('.smallertext > tbody > tr > td').toArray();
            ctx.set('rows', rows);
        }
        return ctx.get('rows');
    }

    protected getTableRow(matcher: Matcher): CheerioElement | undefined {
        return this.getTableRows()
            .find(node => matcher.in(this.$(node).text()));
    }

    protected getBodyNodes(deep?: boolean): CheerioElement[] {
        const ctx = this.cache.for<{
            flat?: CheerioElement[],
            deep?: CheerioElement[],
        }>('body_nodes');
        if (!ctx.has('flat')) {
            const nodes = this.$('table.smallertext > tbody > tr > td')
                .contents()
                .toArray();
            ctx.set('flat', nodes);
        }
        if (deep && !ctx.has('deep')) {
            let nodes = ctx.get<CheerioElement[]>('flat');
            let i = -1;
            while (++i < nodes.length)
                if (nodes[i].children)
                    nodes.splice(i+1, 0, ...nodes[i].children);
            ctx.set('deep', nodes);
        }
        return deep ? ctx.get('deep') : ctx.get('flat');
    }

    protected getTextNodeFromCategoryWrapper(matcher: Matcher) {
        const ctx = this.cache.for<{
            nodes?: CheerioElement[],
        }>('category_nodes');
        if (!ctx.has('nodes')) {
            const nodes = this.$('.category_text')
                .parent()
                .contents()
                .toArray();
            ctx.set('nodes', nodes);
        }
        return ctx.get<CheerioElement[]>('nodes')
            .find(node => {
                const str = node.tagName === 'span'
                    ? this.$(node).text()
                    : node.data as string;
                return matcher.in(str);
            });
    }

    protected parsePageInfo(): BDOCodex.PageInfo {
        const ctx = this.cache.for<{
            data?: BDOCodex.PageInfo
        }>('page_info');
        if (!ctx.has('data')) {
            const raw = this.$('script[type="application/ld+json"]')
                .first()
                .html();
            const data = raw ? JSON.parse(raw.trim()) : {};
            ctx.set('data', data);
        }
        return ctx.get('data');
    }

    protected ScrapeFactory(shortUrl: string): Maybe<Scrapers.ScrapeFn> {
        const { type, id } =  AppUtils.decomposeShortURL(shortUrl);

        if (!Object.values(Scrapers.EntityTypes).includes(type))
            return undefined as any;

        return async <T>() => this._scrape<T>(id, type, {
            db: this._db,
            locale: this._locale
        });
    }

    protected queryFactory<T = any>(type: Queries.Types): Queries.QueryFn<T> | undefined {
        const ids = {
            [App.Locales.US]: {
                [Queries.Types.QUEST_REWARD]: 'questreward',
                [Queries.Types.PRODUCT_IN_RECIPE]: 'productofrecipe',
                [Queries.Types.PRODUCT_IN_PROCESSING]: 'mproductofrecipe',
            }
        }[this._locale];
        if (!this.$(`a[href="#tabs-${(ids as any)[type]}"]`).length)
            return undefined;
        return <T>() => this._query<T>(this._id, type, {
            db: this._db,
            locale: this._locale,
        });
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

    get description(): string | undefined {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Description:'],
        });
        const nodes = this.getTableRow(matcher)?.childNodes || [];
        
        let i = nodes.findIndex(node => matcher.in(node.data));
        if (i === -1) return undefined;

        const strs = [];
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
        };
    }
}
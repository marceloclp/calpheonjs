import cheerio from "cheerio";
import * as AppUtils from "../utils";
import * as Queries from "./typings";
import { App, BDOCodex } from "../typings";
import { Scrapers } from "../scraper";
import { Matcher } from "../shared";

export class Query {
    constructor(
        protected readonly _id: string,

        protected readonly _group: Queries.Groups,

        protected readonly _itemAs: Queries.ItemAs,

        protected readonly _locale = App.Locales.US,

        protected readonly _db = App.Dbs.BDO_CODEX,

        protected readonly fetch: App.FetchFn,

        protected readonly _scrape: Scrapers.Scrape,
    ) {}

    get url(): string {
        const idKey = [
            Queries.ItemAs.NPC_DROP,
            Queries.ItemAs.NODE_DROP,
            Queries.ItemAs.CONTAINER,
            Queries.ItemAs.QUEST_REWARD,
        ].includes(this._itemAs) ? 'id' : 'item_id';
        return 'https://' + this._db + '/query.php?' + Object.entries({
            a: this._group,
            type: this._itemAs,
            [idKey]: this._id,
            l: this._locale,
        })
        .map(entry => entry.join('='))
        .join('&');
    }

    async parse(): Promise<Queries.Result> {
        const res = JSON.parse(
            (await this.fetch(this.url)).trim()
        );
        const [type, data] = this.getCollection(res);
        return { url: this.url, type, data };
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

    private getCollection(data: any): [Queries.EntityTypes, any[]] {
        const { Groups, ItemAs } = Queries;
        const { _group: g, _itemAs: a } = this;
        if ([Groups.PROCESSING, Groups.RECIPE, Groups.DESIGN].includes(g))
            return ['recipe', this.parseRecipes(data)];
        if ([ItemAs.NPC_DROP].includes(a))
            return ['npc_drop', this.parseNPCDrops(data)];
        if ([ItemAs.NODE_DROP].includes(a))
            return ['node', this.parseNodeDrops(data)];
        if ([ItemAs.CONTAINER].includes(a))
            return ['item', this.parseItems(data)];
        if ([Groups.NPC].includes(g))
            return ['npc', this.parseNPCs(data)];
        if ([Groups.QUEST].includes(g))
            return ['quest', this.parseQuests(data)];
        return ['unknown', []];
    }

    private getIconURL(raw: string): string {
        const short = AppUtils.splitStr(raw, '[img src="', '"') as string;
        return AppUtils.getIconUrl(this._db, short);
    }

    private getShortURL(raw: string): string {
        return cheerio.load(raw)('a').attr('href') as string;
    }

    private getName(raw: string): string {
        return AppUtils.cleanStr(cheerio.load(raw).root().text());
    }

    private parseRefs(raw: string): Queries.Entities.Refs.Generic[] {
        return raw
            .split(`<div class="iconset_wrapper_medium inlinediv">`)
            .filter(str => str)
            .map(str => cheerio.load('<div>' + str))
            .map<Queries.Entities.Refs.Generic>($ => ({
                type: 'ref',
                id: $('a').attr('data-id')?.replace(/\D/g, '') || '',
                amount: parseInt($('.quantity_small').text()) || 1,
                icon: this.getIconURL($('.icon_wrapper').text()),
                shortUrl: $('a').attr('href') as string,
            }))
            .map(entity => ({
                ...entity,
                scrape: this.scrapeFactory(entity.shortUrl),
            }));
    }

    private parseRecipes(data: BDOCodex.Query.Recipe): Queries.Entities.Recipe[] {
        return data.aaData
            .map<Queries.Entities.Recipe>(arr => ({
                type: 'recipe',
                id: arr[0],
                icon: this.getIconURL(arr[1]),
                name: AppUtils.cleanStr(cheerio.load(arr[2]).root().text()),
                process: arr[3],
                exp: parseInt(arr[5].replace(/\D/g, '')) || 0,
                skill_lvl: {
                    mastery: arr[4].display.replace(/\d/g, '').trim(),
                    lvl: parseInt(arr[4].display.replace(/\D/g, '')),
                },
                materials: this.parseRefs(arr[6]) as any,
                products: this.parseRefs(arr[7]) as any,
                shortUrl: this.getShortURL(arr[2]),
            })).map(entity => ({
                ...entity,
                scrape: this.scrapeFactory(entity.shortUrl)
            }));
    }

    private parseNPCDrops(data: BDOCodex.Query.NPCDrop): Queries.Entities.NPCDrop[] {
        return data.aaData
            .map<Queries.Entities.NPCDrop>(arr => ({
                type: 'npc_drop',
                id: arr[0],
                icon: this.getIconURL(arr[1]),
                name: AppUtils.cleanStr(cheerio.load(arr[2]).root().text()),
                amount: parseInt(arr[3]),
                chance: parseFloat(arr[4].replace(/\%/g, '')),
                shortUrl: this.getShortURL(arr[2]),
            }))
            .map(entity => ({
                ...entity,
                scrape: this.scrapeFactory(entity.shortUrl),
            }));
    }

    private parseNodeDrops(data: BDOCodex.Query.NodeDrop): Queries.Entities.Node[] {
        return data.aaData
            .map<Queries.Entities.Node>(arr => ({
                type: 'node',
                id: arr[0],
                icon: this.getIconURL(arr[1]),
                name: AppUtils.cleanStr(cheerio.load(arr[2]).root().text()),
                zone: arr[3],
                temperature: parseFloat(arr[4].replace(/\%/g, '')),
                humidity: parseFloat(arr[5].replace(/\%/g, '')),
                water: parseFloat(arr[6].replace(/\%/g, '')),
                shortUrl: this.getShortURL(arr[2]),
            }))
            .map(entity => ({
                ...entity,
                scrape: this.scrapeFactory(entity.shortUrl),
            }));
    }

    private parseItems(data: BDOCodex.Query.Item): Queries.Entities.Item[] {
        return data.aaData
            .map<Queries.Entities.Item>(arr => ({
                type: 'item',
                id: arr[0],
                icon: this.getIconURL(arr[1]),
                name: AppUtils.cleanStr(cheerio.load(arr[2]).root().text()),
                lvl: arr[3],
                shortUrl: this.getShortURL(arr[2]),
            }))
            .map(entity => ({
                ...entity,
                scrape: this.scrapeFactory(entity.shortUrl),
            }));
    }

    private parseNPCs(data: BDOCodex.Query.NPC): Queries.Entities.NPC[] {
        return data.aaData
            .map<Queries.Entities.NPC>(arr => ({
                type: 'npc',
                id: arr[0].display,
                icon: this.getIconURL(arr[1]),
                name: this.getName(arr[2]),
                lvl: parseInt(arr[3]) || 1,
                hp: parseInt(arr[4].replace(/\D/g, '')) || 0,
                defense: parseInt(arr[5]) || 0,
                evasion: parseInt(arr[6]) || 0,
                exp: parseInt(arr[7]) || 0,
                exp_skill: parseInt(arr[8]) || 0,
                karma: parseInt(arr[9]) || 0,
                shortUrl: this.getShortURL(arr[2]),
            }))
            .map(entity => ({
                ...entity,
                scrape: this.scrapeFactory(entity.shortUrl),
            }));
    }

    private parseQuests(data: BDOCodex.Query.Quest): Queries.Entities.Quest[] {
        return data.aaData
            .map<Queries.Entities.Quest>(arr => ({
                type: 'quest',
                id: arr[0].display,
                icon: this.getIconURL(arr[1]),
                name: this.getName(arr[2]),
                lvl: parseInt(arr[3]),
                region: arr[4].display,
                exp: parseInt(arr[5].display.replace(/\D/g, '')),
                exp_skill: parseInt(arr[6].display.replace(/\D/g, '')),
                exp_contribution: parseInt(arr[7]),
                rewards: this.parseQuestRewards(arr[8]),
                shortUrl: this.getShortURL(arr[2]),
            }))
            .map(entity => ({
                ...entity,
                scrape: this.scrapeFactory(entity.shortUrl),
            }));;
    }

    private parseQuestRewards(raw: string): Queries.Quests.Rewards {
        const matchers = {
            choose: new Matcher(this._locale, {
                [App.Locales.US]: ['Choose'],
            }),
            amity: new Matcher(this._locale, {
                [App.Locales.US]: ['Amity'],
            }),
        };
        const standard: Queries.Quests.Reward[] = [];
        const choose: Queries.Quests.Reward[] = [];
        const amity: number[] = [];
        let curr = standard;

        const $ = cheerio.load('<div id="root">' + raw + '</div>');
        $('#root').contents().toArray().forEach(node => {
            const { data, tagName } = node;
            if (tagName === 'br' || node.parent.attribs.id !== 'root')
                return;
            if (matchers.choose.in(data))
                curr = choose;
            else if (matchers.amity.in(data))
                amity.push(parseInt((data as string).replace(/\D/g, '')));
            if (tagName !== 'div')
                return;
            const n = $(node);
            const f = (str: string) => n.find(str);
            if (n.find('a').length) {
                const shortUrl = f('a').attr('href') || '';
                curr.push({
                    type: 'item',
                    id: f('a').attr('data-id')?.split('--')[1] || '',
                    icon: this.getIconURL(f('.icon_wrapper').text()),
                    shortUrl: shortUrl,
                    scrape: this.scrapeFactory(shortUrl) as any,
                    amount: parseInt(f('.quantity_small').text().trim()) || 1,
                });
            } else {
                curr.push({
                    type: 'exp',
                    icon: AppUtils.getIconUrl(this._db, f('img').attr('src') || ''),
                    name: n.attr('title') as string,
                    amount: parseInt(f('.quantity_small').text().trim()) || 1,
                });
            }
        });

        return { standard, choose, amity };
    }
}
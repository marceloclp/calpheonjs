import cheerio from "cheerio";
import * as Utils from "../../utils";
import * as Queries from "./typings";
import { App, BDOCodex } from "../../typings";

export class Query {
    constructor(
        protected readonly _id: string,

        protected readonly _group: Queries.Groups,

        protected readonly _itemAs: Queries.ItemAs,

        protected readonly _locale = App.Locales.US,

        protected readonly _db = App.Dbs.BDO_CODEX,
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

    async fetch(): Promise<string> {
        return (await Utils.fetch(this.url)).trim();
    }

    async parse(): Promise<Queries.Result> {
        const res = JSON.parse(await this.fetch());
        const [type, data] = this.getCollection(res);
        return { url: this.url, type, data };
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
        const short = Utils.splitStr(raw, '[img src="', '"') as string;
        return Utils.getIconUrl(this._db, short);
    }

    private getShortURL(raw: string): string {
        return cheerio.load(raw)('a').attr('href') as string;
    }

    private getName(raw: string): string {
        return Utils.cleanStr(cheerio.load(raw).root().text());
    }

    private parseRefs(raw: string): Queries.Entities.Ref[] {
        return raw
            .split(`<div class="iconset_wrapper_medium inlinediv">`)
            .filter(str => str)
            .map(str => cheerio.load('<div>' + str))
            .map($ => ({
                type: 'ref',
                id: $('a').attr('data-id')?.replace(/\D/g, '') || '',
                amount: parseInt($('.quantity_small').text()) || 1,
                icon: this.getIconURL($('.icon_wrapper').text()),
                shortUrl: $('a').attr('href') as string,
            }));
    }

    private parseRecipes(data: BDOCodex.Query.Recipe): Queries.Entities.Recipe[] {
        return data.aaData.map(arr => ({
            type: 'recipe',
            id: arr[0],
            icon: this.getIconURL(arr[1]),
            name: Utils.cleanStr(cheerio.load(arr[2]).root().text()),
            process: arr[3],
            exp: parseInt(arr[5].replace(/\D/g, '')) || 0,
            skill_lvl: {
                mastery: arr[4].display.replace(/\d/g, '').trim(),
                lvl: parseInt(arr[4].display.replace(/\D/g, '')),
            },
            materials: this.parseRefs(arr[6]),
            products: this.parseRefs(arr[7]),
            shortUrl: this.getShortURL(arr[2]),
        }));
    }

    private parseNPCDrops(data: BDOCodex.Query.NPCDrop): Queries.Entities.NPCDrop[] {
        return data.aaData.map(arr => ({
            type: 'npc_drop',
            id: arr[0],
            icon: this.getIconURL(arr[1]),
            name: Utils.cleanStr(cheerio.load(arr[2]).root().text()),
            amount: parseInt(arr[3]),
            chance: parseFloat(arr[4].replace(/\%/g, '')),
            shortUrl: this.getShortURL(arr[2]),
        }));
    }

    private parseNodeDrops(data: BDOCodex.Query.NodeDrop): Queries.Entities.Node[] {
        return data.aaData.map(arr => ({
            type: 'node',
            id: arr[0],
            icon: this.getIconURL(arr[1]),
            name: Utils.cleanStr(cheerio.load(arr[2]).root().text()),
            zone: arr[3],
            temperature: parseFloat(arr[4].replace(/\%/g, '')),
            humidity: parseFloat(arr[5].replace(/\%/g, '')),
            water: parseFloat(arr[6].replace(/\%/g, '')),
            shortUrl: this.getShortURL(arr[2]),
        }));
    }

    private parseItems(data: BDOCodex.Query.Item): Queries.Entities.Item[] {
        return data.aaData.map(arr => ({
            type: 'item',
            id: arr[0],
            icon: this.getIconURL(arr[1]),
            name: Utils.cleanStr(cheerio.load(arr[2]).root().text()),
            lvl: arr[3],
            shortUrl: this.getShortURL(arr[2]),
        }));
    }

    private parseNPCs(data: BDOCodex.Query.NPC): Queries.Entities.NPC[] {
        return data.aaData.map(arr => ({
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
        }));
    }

    private parseQuests(data: BDOCodex.Query.Quest): Queries.Entities.Quest[] {
        return data.aaData.map(arr => ({
            type: 'quest',
            id: arr[0].display,
            icon: this.getIconURL(arr[1]),
            name: this.getName(arr[2]),
            lvl: parseInt(arr[3]),
            region: arr[4].display,
            exp: parseInt(arr[5].display.replace(/\D/g, '')),
            exp_skill: parseInt(arr[6].display.replace(/\D/g, '')),
            exp_contribution: parseInt(arr[7]),
            rewards: {},
            shortUrl: this.getShortURL(arr[2]),
        }));
    }
}
import * as Queries from "./typings";
import * as Builders from "./builders";
import { App } from "../shared";
import { Scrapers } from "../scraper";

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
        const Builder = this.getBuilder();
        return {
            url: this.url,
            type: Builder.type as Queries.EntityTypes,
            data: new Builder(this._locale, this._db, this._scrape).build(res)
        };
    }

    private getBuilder(): typeof Builders.Generic {
        const { Groups, ItemAs } = Queries;
        const { _group: g, _itemAs: a } = this;
        if ([Groups.PROCESSING, Groups.RECIPE, Groups.DESIGN].includes(g))
            return Builders.Recipe;
        if ([ItemAs.NPC_DROP].includes(a))
            return Builders.NPCDrop;
        if ([ItemAs.NODE_DROP].includes(a))
            return Builders.Node;
        if ([ItemAs.CONTAINER].includes(a))
            return Builders.Item;
        if ([Groups.NPC].includes(g))
            return Builders.NPC;
        if ([Groups.QUEST].includes(g))
            return Builders.Quest;
        return Builders.Generic;
    }
}
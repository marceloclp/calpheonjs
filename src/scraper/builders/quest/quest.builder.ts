import * as AppUtils from "../../../shared/utils";
import * as Scrapers from "../../typings";
import { App, Undef } from "../../../typings";
import { Generic } from "../generic.builder";
import { Matcher } from "../../../shared";

export class Quest extends Generic {
    private getQuestNPC(matcher: Matcher): Undef<Scrapers.Refs.NPC> {
        // Find the table row that contains the start/end npcs.
        const row = this.getTableRow(matcher);
        if (!row) return undefined;

        // The anchor node that maps to the NPC icon is two nodes
        // after the matched node.
        const i = row.childNodes.findIndex(node => matcher.in(node.data)) + 2;
        if (!row.childNodes?.[i])
            return undefined;
        
        const node = row.childNodes[i];
        const img = node.childNodes.find(node => node.name === 'img');
        const url  = node.attribs.href;
        return {
            type: 'npc',
            id: url.split('/').filter(e => e).slice(2).join('/'),
            icon: img?.attribs.src as string,
            name: this.$(row).find(`a[href="${url}"]`).last().text(),
            shortUrl: url,
            scrape: this.ScrapeFactory(url) as any,
        };
    }

    get icon(): string {
        return this.$('img.quest_icon').attr('src') as string;
    }

    get stage(): Undef<number> {
        if (!this.quest_chain.length)
            return undefined;
        return this.quest_chain.findIndex(node => node.id === this._id) + 1;
    }

    get region(): string {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Region'],
        });
        return this.getTextNodeFromCategoryWrapper(matcher)?.data
            ?.slice(matcher.indexIn(matcher.last, true) + 1)
            ?.replace(/[^a-zA-Z0-9 ]/g, '')
            ?.trim() as string;
    }

    get q_category(): string {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Category'],
        });
        return this.getTextNodeFromCategoryWrapper(matcher)?.data
            ?.slice(matcher.indexIn(matcher.last, true) + 1)
            ?.replace(/[^a-zA-Z0-9 ]/g, '')
            ?.trim() as string;
    }

    get q_type(): string {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Type'],
        });
        return this.getTextNodeFromCategoryWrapper(matcher)?.data
            ?.slice(matcher.indexIn(matcher.last, true) + 1)
            ?.replace(/[^a-zA-Z0-9 ]/g, '')
            ?.trim() as string;
    }

    get lvl(): number {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Level'],
        });
        return parseInt(this.getTextNodeFromCategoryWrapper(matcher)?.data
            ?.slice(matcher.indexIn(matcher.last, true) + 1)
            ?.replace(/[^a-zA-Z0-9 ]/g, '')
            ?.trim() as string);
    }

    get exclusive_to(): string[] {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Exclusive'],
        });
        const str = this.getTextNodeFromCategoryWrapper(matcher)?.data;
        return str
            ?.substr(0, str.length - (matcher.matchIn(str)?.length || 0))
            .split(',')
            .map(str => AppUtils.cleanStr(str)) || [];
    }

    get quest_chain(): Scrapers.Refs.Quest[] {
        const ctx = this.cache.for<{
            quests: Scrapers.Refs.Quest[]
        }>('quest_chain');
        if (!ctx.has('quests')) {
            const quests = this.$('#full_quest_chain > a')
                .toArray()
                .map(node => ({
                    type: 'quest',
                    id: node.attribs.href.split('quest/')[1],
                    icon: this.$(node).find('img').attr('src') as string,
                    name: AppUtils.cleanStr(this.$(node).text()),
                    shortUrl: node.attribs.href,
                    scrape: this.ScrapeFactory(node.attribs.href) as any,
                }));
            ctx.set('quests', quests);
        }
        return ctx.get('quests');
    }

    get npc_start(): Undef<Scrapers.Refs.NPC> {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Start NPC'],
        });
        return this.getQuestNPC(matcher);
    }

    get npc_end(): Undef<Scrapers.Refs.NPC> {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['End NPC'],
        });
        return this.getQuestNPC(matcher);
    }

    get description(): string {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Description:'],
        });
        const nodes = this.getTableRow(matcher)?.childNodes || [];
        return nodes
            .slice(nodes.findIndex(node => matcher.in(node.data)) + 1)
            .filter(({ data }) => data && data[0] !== '※')
            .map(node => node.data)
            .join('\n');
    }

    get text(): string[] {
        const nodes = this.$('#full_quest_text')
            .contents()
            .toArray();
        return nodes.reduce((text, node, i) => {
            if (node.tagName === 'br' && nodes[i-1]?.tagName === 'br')
                return [...text, '\n'];
            const str = node.data
                ? node.data as string
                : AppUtils.cleanStr(this.$(node).text());
            if (!str)
                return text;
            if (i !== 0 && nodes[i-1]?.tagName !== 'br')
                text[text.length - 1] += str;
            else text.push(str);
            return text;
        }, [] as string[]);
    }

    get rewards() {
        const matchers = {
            standard: new Matcher(this._locale, {
                [App.Locales.US]: ['Standard'],
            }),
            choose: new Matcher(this._locale, {
                [App.Locales.US]: ['Choose'],
            }),
        };

        let curr: Scrapers.Quests.Reward[];
        const rows = this.getTableRows();
        const nodes = rows[rows.length - 1].childNodes;
        return nodes.reduce((rewards, node, i, arr) => {
            const { data, tagName } = node;
            if (!curr || matchers.standard.in(data))
                curr = rewards.standard;
            else if (matchers.choose.in(data))
                curr = rewards.choose;
            if (tagName !== 'div')
                return rewards;

            const elem   = this.$(node);
            const anchor = elem.find('a').first();
            const img    = elem.find('img').first();
            const url    = anchor.attr('href') as string;
            const type   = url?.split('/').filter(e => e)[1] || 'exp';

            if (type === 'item') {
                curr.push({
                    type: 'item',
                    id: AppUtils.decomposeShortURL(url).id,
                    icon: img.attr('src') as string,
                    name: this.$(arr[i+2]).text(),
                    shortUrl: url,
                    amount: parseInt(elem.text().replace(/\D/g, '')) || 1,
                    scrape: this.ScrapeFactory(url) as any,
                });
            } else if (type === 'exp') {
                const txt = AppUtils.cleanStr(arr[i+1].data);
                curr.push({
                    type: 'exp',
                    icon: img.attr('src') as string,
                    name: txt.split('(')[0].trim(),
                    amount: parseInt(txt.replace(/\D/g, '')) || 1,
                });
            } else if (type === 'npc') {
                curr.push({
                    type: 'npc',
                    id: AppUtils.decomposeShortURL(url).id,
                    icon: img.attr('src') as string,
                    name: this.$(arr[i+2]).text(),
                    shortUrl: url,
                    scrape: this.ScrapeFactory(url) as any,
                    amity_gained: parseInt(
                        arr[i-1].data?.replace(/\D/g, '') as string
                    ) || 0,
                });
            } else if (type === 'theme') {
                curr.push({
                    type: 'knowledge',
                    id: AppUtils.decomposeShortURL(url).id,
                    icon: img.attr('src') as string,
                    name: this.$(arr[i+2]).text(),
                    shortUrl: url,
                    scrape: this.ScrapeFactory(url) as any,
                });
            }
            return rewards;
        }, {
            standard: [] as Scrapers.Quests.Reward[],
            choose: [] as Scrapers.Quests.Reward[],
        });
    }

    async build(): Promise<Scrapers.Entities.Quest> {
        return {
            ...(await super.build()),
            stage: this.stage,
            region: this.region,
            q_category: this.q_category,
            q_type: this.q_type,
            lvl: this.lvl,
            exclusive_to: this.exclusive_to,
            quest_chain: this.quest_chain,
            npc_start: this.npc_start,
            npc_end: this.npc_end,
            text: this.text,
            rewards: this.rewards,
        };
    }
}
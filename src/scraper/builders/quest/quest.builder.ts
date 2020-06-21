import * as AppUtils from "../../../utils";
import * as Scrapers from "../../typings";
import { App } from "../../../typings";
import { Generic } from "../generic.builder";
import { Matcher } from "../../../shared";

export class Quest extends Generic {
    private getTableRow(matcher: Matcher): CheerioElement | undefined {
        return this.$('.smallertext > tbody > tr > td')
            .toArray()
            .find(node => matcher.in(this.$(node).text()));
    }

    private getFromCategoryWrapper(matcher: Matcher): string {
        const node = this.$('.category_text')
            .parent()
            .contents()
            .toArray()
            .find(node => matcher.in(node.data));
        return node?.data
            ?.slice(matcher.indexIn(node?.data, true) + 1)
            ?.replace(/[^a-zA-Z0-9 ]/g, '')
            ?.trim() as string;
    }

    private getQuestNPC(matcher: Matcher): Scrapers.Entities.Refs.NPC | undefined {
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
        };
    }

    get icon(): string {
        return this.$('img.quest_icon').attr('src') as string;
    }

    get region(): string {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Region'],
        });
        return this.getFromCategoryWrapper(matcher);
    }

    get q_category(): string {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Category'],
        });
        return this.getFromCategoryWrapper(matcher);
    }

    get q_type(): string {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Type'],
        });
        return this.getFromCategoryWrapper(matcher);
    }

    get lvl(): number {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Level'],
        });
        return parseInt(this.getFromCategoryWrapper(matcher));
    }

    get exclusive_to(): string[] {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Exclusive'],
        });
        const str = this.$('.category_text')
            .parent()
            .contents()
            .toArray()
            .find(node => matcher.in(node.data))
            ?.data || '';
        if (!matcher.length)
            return [];
        return str
            .substr(0, str.length - (matcher.matchIn(str)?.length || 0))
            .split(',')
            .map(str => AppUtils.cleanStr(str)) || [];
    }

    get quest_chain(): Scrapers.Entities.Refs.Quest[] {
        return this.$('#full_quest_chain > a')
            .toArray()
            .map(node => ({
                type: 'quest',
                id: node.attribs.href.split('quest/')[1],
                icon: this.$(node).find('img').attr('src') as string,
                name: AppUtils.cleanStr(this.$(node).text()),
                shortUrl: node.attribs.href,
                scrape: this.scrapeFactory(node.attribs.href),
            }));
    }

    get npc_start(): Scrapers.Entities.Refs.NPC | undefined {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Start NPC'],
        });
        return this.getQuestNPC(matcher);
    }

    get npc_end(): Scrapers.Entities.Refs.NPC | undefined {
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

        const rewards = {
            standard: [] as Scrapers.Quests.Reward[],
            choose: [] as Scrapers.Quests.Reward[],
        };
        let curr = rewards.standard;
        
        const nodes = this.$('.smallertext > tbody > tr > td')
            .last()
            .contents()
            .toArray();

        for (let i = 0; i < nodes.length; i++) {
            const { data, tagName } = nodes[i];
            if (matchers.standard.in(data))
                curr = rewards.standard;
            else if (matchers.choose.in(data))
                curr = rewards.choose;
            if (tagName !== 'div')
                continue;
            
            const elem = this.$(nodes[i]);
            const anchor = elem.find('a').first();
            const img = elem.find('img').first();
            const url = anchor.attr('href');
            const type = url?.split('/')?.[2] || 'exp';
            
            if (type === 'item') {
                curr.push({
                    type: 'item',
                    id: AppUtils.getIdFromURL(url as string),
                    icon: img.attr('src') as string,
                    name: this.$(nodes[i+2]).text(),
                    shortUrl: url as string,
                    amount: parseInt(elem.text().replace(/\D/g, '')) || 1,
                });
            } else if (type === 'exp') {
                const text = AppUtils.cleanStr(nodes[i+1].data);
                curr.push({
                    type: 'exp',
                    icon: img.attr('src') as string,
                    name: text.split(' (')[0],
                    amount: parseInt(text.replace(/\D/g, '')) || 1,
                });
            } else if (type === 'npc') {
                curr.push({
                    type: 'npc',
                    id: AppUtils.getIdFromURL(url as string),
                    icon: img.attr('src') as string,
                    name: this.$(nodes[i+2]).text(),
                    shortUrl: url as string,
                    amity_gained: parseInt(
                        nodes[i-1].data?.replace(/\D/g, '') as string
                    ) || 0,
                });
            } else if (type === 'theme') {
                curr.push({
                    type: 'knowledge',
                    id: AppUtils.getIdFromURL(url as string),
                    icon: img.attr('src') as string,
                    name: this.$(nodes[i+2]).text(),
                    shortUrl: url as string,
                });
            }
        }
        return rewards;
    }

    async build(): Promise<Scrapers.Entities.Quest> {
        return {
            ...(await super.build()),
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
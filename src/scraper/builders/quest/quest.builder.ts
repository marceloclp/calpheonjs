import * as AppUtils from "../../../utils";
import { Generic } from "../generic.builder";
import { App } from "../../../typings";
import { Scrapers } from "../..";

export class Quest extends Generic {
    private getTableRow(match: string): CheerioElement | undefined {
        return this.$('.smallertext > tbody > tr > td')
            .toArray()
            .find((node) => {
                return AppUtils.indexOf(this.$(node).text(), match).substr
            });
    }

    private getFromCategoryWrapper(match: string): string {
        const node = this.$('.category_text')
            .parent()
            .contents()
            .toArray()
            .find(({ data }) => data && AppUtils.indexOf(data, match).substr);

        return AppUtils
            .splitStr(node?.data || '', match, '\n')
            ?.replace(/[^a-zA-Z0-9 ]/g, '')
            ?.trim() || '';
    }

    private getQuestNPC(match: string): Scrapers.Entities.Refs.NPC | undefined {
        // Find the table row that contains the start/end npcs.
        const row = this.getTableRow(match);
        if (!row) return undefined;

        // The anchor node that maps to the NPC icon is two nodes
        // after the matched node.
        const i = row.childNodes.findIndex(
            ({ data }) => data && AppUtils.indexOf(data, match).substr
        ) + 2;
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

    get region(): string {
        const match = {
            [App.Locales.US]: 'Region',
        }[this._locale];
        return this.getFromCategoryWrapper(match);
    }

    get q_category(): string {
        const match = {
            [App.Locales.US]: 'Category',
        }[this._locale];
        return this.getFromCategoryWrapper(match);
    }

    get q_type(): string {
        const match = {
            [App.Locales.US]: 'Type',
        }[this._locale];
        return this.getFromCategoryWrapper(match);
    }

    get lvl(): number {
        const match = {
            [App.Locales.US]: 'Level',
        }[this._locale];
        return parseInt(this.getFromCategoryWrapper(match));
    }

    get exclusive_to(): string[] {
        const match = {
            [App.Locales.US]: 'Exclusive',
        }[this._locale];

        const node = this.$('.category_text')
            .parent()
            .contents()
            .toArray()
            .find(({ data }) => data && AppUtils.indexOf(data, match).substr);

        return node?.data
            ?.substr(0, node?.data?.length - match.length)
            .split(',')
            .map(str => AppUtils.cleanStr(str)) || [];
    }

    get quest_chain(): Scrapers.Entities.Refs.Quest[] {
        return this.$('#full_quest_chain > a')
            .toArray()
            .map(node => ({
                id: node.attribs.href.split('quest/')[1],
                icon: this.$(node).find('img').attr('src') as string,
                name: AppUtils.cleanStr(this.$(node).text()),
                shortUrl: node.attribs.href,
                scrape: this.scrapeFactory(node.attribs.href),
            }));
    }

    get npc_start(): Scrapers.Entities.Refs.NPC | undefined {
        const match = {
            [App.Locales.US]: 'Start NPC',
        }[this._locale];
        return this.getQuestNPC(match);
    }

    get npc_end(): Scrapers.Entities.Refs.NPC | undefined {
        const match = {
            [App.Locales.US]: 'End NPC',
        }[this._locale];
        return this.getQuestNPC(match);
    }

    get description(): string {
        const match = {
            [App.Locales.US]: 'Description:',
        }[this._locale];
        const nodes = this.getTableRow(match)?.childNodes || [];
        let i = nodes.findIndex(
            ({ data }) => data && AppUtils.indexOf(data, match).substr)
        ;
        return nodes
            .slice(i+1)
            .filter(({ data }) => data)
            .map(({ data }) => data)
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
        const matches = {
            standard: { [App.Locales.US]: 'Standard' }[this._locale],
            choose: { [App.Locales.US]: 'Choose' }[this._locale],
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
            if (data && AppUtils.indexOf(data, matches.standard).substr)
                curr = rewards.standard;
            else if (data && AppUtils.indexOf(data, matches.choose).substr)
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
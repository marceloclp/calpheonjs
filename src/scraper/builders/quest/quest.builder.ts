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
        const url  = node.attribs.href;
        return {
            id: url.split('/').filter(e => e).slice(2).join('/'),
            icon: node.children[1].attribs.src,
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
        return this.$('#full_quest_text')
            .contents()
            .toArray()
            .map((node, i, nodes) => {
                const { name, data } = node;
                if (name === 'br' && nodes?.[i+1].name === 'br')
                    return '\n'
                if (name === 'br')
                    return null;
                return data as string;
            })
            .filter(e => e) as string[];
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
            description: this.description,
            text: this.text,
        } as any;
    }
}
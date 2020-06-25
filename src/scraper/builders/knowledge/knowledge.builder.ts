import * as AppUtils from "../../../utils";
import * as Scrapers from "../../typings";
import { App, Maybe } from "../../../typings";
import { Generic } from "../generic.builder";
import { Matcher } from "../../../shared";

export class Knowledge extends Generic {
    get icon(): string {
        return this.$('img.quest_icon').attr('src') as string;
    }

    get group(): Maybe<string> {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Category:'],
        });
        const node = this.$('.valign_top')
            .contents()
            .toArray()
            .find(node => matcher.in(node.data));
        if (!node)
            return undefined;
        return node.data
            ?.substr(matcher.indexIn(node.data, true))
            .trim();
    }

    get obtained_from(): Maybe<Scrapers.Entities.Refs.NPC> {
        const elem = this.$('.iconset_wrapper_medium.inlinediv').first();
        const url  = elem.find('a').attr('href') as string;
        const icon = elem.find('img').attr('src') as string;
        const name = elem.parent().find(`a[href="${url}"]`).last().text();

        return {
            type: 'npc',
            id: AppUtils.decomposeShortURL(url).id,
            icon,
            name,
            shortUrl: url,
            scrape: this.ScrapeFactory(url) as any,
        }
    }

    get description(): Maybe<string> {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Description:'],
        });

        const strs     = [];
        const nodes    = this.getTableRow(matcher)?.childNodes || [];
        const startIdx = nodes.findIndex(node => matcher.in(node.data)) + 1;

        for (let i = startIdx; i < nodes.length; i++) {
            const node = nodes[i];
            if (node.tagName === 'hr')
                break;
            else if (strs.length && node.tagName === 'br')
                strs.push('\n');
            else if (node.type === 'text' || node.tagName === 'span') {
                const str = node.type === 'text'
                    ? node.data
                    : this.$(node).text();
                strs.push(str);
            }
        }
        return strs.join('');
    }

    async build(): Promise<Scrapers.Entities.Knowledge> {
        return {
            ...(await super.build()),
            group: this.group,
            category: undefined,
            obtained_from: this.obtained_from,
        }
    }
}
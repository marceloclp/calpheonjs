import cheerio from "cheerio";
import * as AppUtils from "../../utils";
import * as Queries from "../typings";
import { App, BDOCodex } from "../../typings";
import { Generic } from "./generic.builder";
import { Matcher } from "../../shared";

export class Quest extends Generic {
    static type = 'quest';

    getNumericValue(raw?: string | number, value = 0): number {
        if (typeof raw === 'number')
            return raw;
        if (typeof raw === 'string')
            return parseInt(raw.replace(/\D/g, '')) || value;
        return value;
    }

    getRewards(raw: string): Queries.Quests.Rewards {
        const matchers = {
            choose: new Matcher(this._locale, {
                [App.Locales.US]: ['Choose'],
            }),
            amity: new Matcher(this._locale, {
                [App.Locales.US]: ['Amity'],
            }),
        };

        const $ = cheerio.load('<div id="root">' + raw + '</div>');
        let curr: Queries.Quests.Reward[];
        return $('#root').contents().toArray().reduce((rewards, node) => {
            const { data, tagName } = node;
            if (tagName === 'br' || node.parent.attribs.id !== 'root')
                return rewards;
            if (!curr)
                curr = rewards.standard;
            if (matchers.choose.in(data))
                curr = rewards.choose;
            else if (matchers.amity.in(data))
                rewards.amity.push(this.getNumericValue(data));

            if (tagName !== 'div')
                return rewards;

            const elem   = $(node);
            const anchor = elem.find('a');
            const amount = this.getNumericValue(
                elem.find('.quantity_small').text(), 1
            );
            
            if (anchor.length) {
                const url = anchor.attr('href') as string;
                curr.push({
                    type: 'item',
                    id: AppUtils.decomposeShortURL(url).id,
                    icon: this.parseIconURL(elem.find('.icon_wrapper').text()),
                    scrape: this.ScrapeFactory(url) as any,
                    shortUrl: url,
                    amount,
                });
            } else {
                curr.push({
                    type: 'exp',
                    icon: elem.find('img').attr('src') as string,
                    name: elem.attr('title') as string,
                    amount,
                });
            }
            return rewards;
        }, { standard: [], choose: [], amity: [] } as Queries.Quests.Rewards);
    }

    build(data: BDOCodex.Query.Quest): Queries.Entities.Quest[] {
        return data.aaData.map(arr => {
            const url = this.parseShortURL(arr[2]);

            return {
                type: 'quest',
                id: arr[0].display,
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                lvl: this.getNumericValue(arr[3]),
                region: arr[4].display,
                exp: this.getNumericValue(arr[5].display),
                exp_skill: this.getNumericValue(arr[6].display),
                exp_contribution: this.getNumericValue(arr[7]),
                rewards: this.getRewards(arr[8]),
                shortUrl: url,
                scrape: this.ScrapeFactory(url) as any,
            };
        });
    }
}
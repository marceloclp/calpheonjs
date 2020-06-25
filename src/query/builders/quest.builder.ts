import cheerio from "cheerio";
import * as AppUtils from "../../shared/utils";
import * as Queries from "../typings";
import { App, BDOCodex } from "../../shared";
import { Generic } from "./generic.builder";
import { Matcher } from "../../shared";

export class Quest extends Generic {
    static get type() {
        return <const> "quest";
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
                rewards.amity.push(AppUtils.parseIntValue(data));

            if (tagName !== 'div')
                return rewards;

            const elem   = $(node);
            const anchor = elem.find('a');
            const amount = AppUtils.parseIntValue(
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
                type: Quest.type,
                id: arr[0].display,
                icon: this.parseIconURL(arr[1]),
                name: this.parseName(arr[2]),
                lvl: AppUtils.parseIntValue(arr[3]),
                region: arr[4].display,
                exp: AppUtils.parseIntValue(arr[5].display),
                exp_skill: AppUtils.parseIntValue(arr[6].display),
                exp_contribution: AppUtils.parseIntValue(arr[7]),
                rewards: this.getRewards(arr[8]),
                shortUrl: url,
                scrape: this.ScrapeFactory(url) as any,
            };
        });
    }
}
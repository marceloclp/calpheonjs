import * as AppUtils from "../../../shared/utils";
import * as Scrapers from "../../typings";
import { App, BDOCodex, Undef } from "../../../shared/typings";
import { Generic } from "../generic.builder"
import { Matcher } from "../../../shared";

export class Worker extends Generic {
    private getUpgradesArray(): BDOCodex.Workers.Upgrade[] {
        const ctx = this.cache.for<{
            data: BDOCodex.Workers.Upgrade[],
        }>('upgrades_array');
        if (!ctx.has('data')) {
            const raw = this.$('.smallertext')
                .first()
                .find('script')
                .last()
                .html();
            if (!raw)
                return ctx.set('data', []);
            return ctx.set('data', JSON.parse(
                raw.substr(raw.indexOf('['))
            ));
        }
        return ctx.get('data');
    }

    get icon(): string {
        return this.$('img.quest_icon').attr('src') as string;
    }

    get sellable(): boolean {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Sellable'],
        });
        const row = this.getTableRow(matcher);
        return !!row?.childNodes.find((node, idx, arr) => {
            if (!matcher.in(node.data))
                return;
            let i = idx;
            while (++i < arr.length)
                if (arr[i].tagName === 'span' && arr[i].attribs.class)
                    if (arr[i].attribs.class.indexOf('glyphicon-ok') !== -1)
                        return true;
            return false;
        });
    }

    get max_base_stats(): Scrapers.NPCs.Workers.Stats {
        const stamina = parseInt(this.$('#work_speed')
            .parent()
            .parent()
            .parent()
            .children()
            .last()
            .text()
            .replace(/\D/g, ''));
        return {
            work_speed: parseInt(this.$('#work_speed').text()),
            movement_speed: parseInt(this.$('#move_speed').text()),
            luck: parseInt(this.$('#luck').text()),
            stamina,
        }
    }

    get levels(): Scrapers.NPCs.Workers.Level[] {
        return this.getUpgradesArray().map(curr => ({
            exp_to_next_lvl: parseInt(curr.nextlvexp.replace(/\D/g, '')),
            sell_price: parseInt(curr.sell_price.replace(/\D/g, '')),
        }));
    }

    get growth(): Scrapers.NPCs.Workers.Growth {
        const table = this
            .$('.region_table')
            .parent()
            .find('> table')
            .toArray()[1];
        const rows = this.$(table)
            .find('td')
            .toArray();
        const find = (matcher: Matcher) => {
            return this.$(rows[rows.findIndex(node =>
                matcher.in(this.$(node).text())
            ) + 1])
                .text()
                .split('~')
                .map(str => parseFloat(str.trim())) as [number, number];
        };
        return {
            work_speed: find(new Matcher(this._locale, {
                [App.Locales.US]: ['Work speed growth per level'],
            })),
            movement_speed: find(new Matcher(this._locale, {
                [App.Locales.US]: ['Speed growth per level'],
            })),
            luck: find(new Matcher(this._locale, {
                [App.Locales.US]: ['Luck growth per level'],
            })),
        };
    }

    get obtained_from(): Undef<Scrapers.Refs.NPC> {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Obtained from:'],
        });
        const idx = this.getBodyNodes(true)
            .findIndex(node => matcher.in(node.data));
        if (idx === -1)
            return undefined;
        const img    = this.$(this.getBodyNodes(true)[idx + 2]).find('img');
        const anchor = this.$(this.getBodyNodes(true)[idx + 10]);
        const url    = anchor.attr('href') as string;
        return {
            type: "npc",
            id: AppUtils.decomposeShortURL(url).id,
            icon: img.attr('src') as string,
            name: anchor.text(),
            shortUrl: url,
            scrape: this.ScrapeFactory(url),
        }
    }

    async build(): Promise<Scrapers.Entities.Worker> {
        return {
            ...(await super.build()),
            sellable: this.sellable,
            max_base_stats: this.max_base_stats,
            levels: this.levels,
            growth: this.growth,
            obtained_from: this.obtained_from as any,
        };
    }
}
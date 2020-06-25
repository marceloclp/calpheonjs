import * as AppUtils from "../../../shared/utils";
import * as Scrapers from "../../typings";
import { App } from "../../../shared";
import { Item } from "./item.builder";
import { Matcher } from "../../../shared";

export class Consumable extends Item {
    private normalizeTimeUnit(raw: string): number {
        const matchers = {
            sec: new Matcher(this._locale, {
                [App.Locales.US]: ['sec'],
            }),
            min: new Matcher(this._locale, {
                [App.Locales.US]: ['min'],
            }),
        };
        const value = parseInt(raw.replace(/\D/g, ''));
        if (matchers.sec.in(raw))
            return value;
        if (matchers.min.in(raw))
            return value * 60;
        return value;
    }

    get effects(): string[] {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['- Effect', 'Effect:'],
        });

        const strs = this.getBodyNodes(true)
            .filter(node => node.name !== 'span')
            .map(node => node.data || '<br>');
        let i = strs.findIndex(str => matcher.in(str));
        if (i === -1) return [];
        
        const effects = [];
        while (i++ < strs.length) {
            if (strs[i] === '<br>' && strs?.[i+1] === '<br>')
                break;
            if (strs[i] === '<br>')
                continue;
            effects.push(AppUtils.cleanStr(strs[i]));
        }
        return effects.filter(e => e);
    }

    get duration(): number {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Duration'],
        });
        const nodes = this.getBodyNodes(true)
            .filter(node => node.data);
        const i = nodes.findIndex(node => matcher.in(node.data));
        if (!matcher.length)
            return 0;
        return this.normalizeTimeUnit(nodes[i+1].data as string)
    }

    get cooldown(): number {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Cooldown'],
        });
        const nodes = this.getBodyNodes(true)
            .filter(node => node.data);
        const i = nodes.findIndex(node => matcher.in(node.data));
        if (!matcher.length)
            return 0;
        return this.normalizeTimeUnit(nodes[i+1].data as string);
    }

    async build(): Promise<Scrapers.Entities.Consumable> {
        return {
            ...(await super.build()),
            effects: this.effects,
            duration: this.duration,
            cooldown: this.cooldown,
        };
    }
}
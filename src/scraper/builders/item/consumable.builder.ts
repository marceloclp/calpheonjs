import * as AppUtils from "../../../utils";
import * as Scrapers from "../../typings";
import { App } from "../../../typings";
import { Item } from "./item.builder";

export class Consumable extends Item {
    private normalizeTimeUnit(raw: string): number {
        const units = {
            [App.Locales.US]: { sec: 'sec', min: 'min' },
        }[this._locale];

        const value = parseInt(raw.replace(/\D/g, ''));
        if (AppUtils.indexOf(raw, units.sec).substr)
            return value;
        if (AppUtils.indexOf(raw, units.min).substr)
            return value * 60;
        return value;
    }

    get effects(): string[] {
        const matches = {
            [App.Locales.US]: ['- Effect', 'Effect:'],
        }[this._locale];

        const strs = this.getBodyNodes(true)
            .filter(({ name }) => name !== 'span')
            .map(({ data }) => data || '<br>');
        let i = strs.findIndex(str => AppUtils.indexOf(str, matches).substr);
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
        const matches = {
            [App.Locales.US]: 'Duration',
        }[this._locale];

        const strs = this.getBodyNodes(true)
            .map(({ data }) => data || '')
            .filter(e => e);
        let i = strs.findIndex(str => AppUtils.indexOf(str, matches).substr);
        if (i === -1) return 0;

        return this.normalizeTimeUnit(strs[i+1]);
    }

    get cooldown(): number {
        const matches = {
            [App.Locales.US]: 'Cooldown',
        }[this._locale];

        const strs = this.getBodyNodes(true)
            .map(({ data }) => data || '')
            .filter(e => e);
        let i = strs.findIndex(str => AppUtils.indexOf(str, matches).substr);
        if (i === -1) return 0;

        return this.normalizeTimeUnit(strs[i+1]);
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
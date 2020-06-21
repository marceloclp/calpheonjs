import * as AppUtils from "../../../utils";
import * as Scrapers from "../../typings";
import { App } from "../../../typings";
import { Generic } from "../generic.builder";

export class Recipe extends Generic {
    private getMaterials(match: string[]): Scrapers.Entities.Refs.Material[] {
        const wrapper = this.$('.smallertext > tbody > tr > td')
            .toArray()
            .find(node => AppUtils.indexOf(this.$(node).text(), match).substr);
        if (!wrapper)
            return [];

        return this.$(wrapper).find('img').toArray().map(node => {
            const parent = node.parent.parent;
            const shortUrl = parent.attribs.href;
            const anchor = this.$(wrapper).find(`a[href="${shortUrl}"]`).last();
            return {
                id: parent.attribs['data-id'].split('--')[1],
                icon: node.attribs.src,
                name: anchor.text(),
                grade: parseInt(anchor.attr('class')?.replace(/\D/g, '') || '0'),
                amount: parseInt(this.$(parent).text()) || 1,
                shortUrl,
                scrape: this.scrapeFactory(shortUrl),
            };
        });
    }

    get process(): string {
        return this.$('.category_text').parent().find('.yellow_text').text();
    }

    get exp(): number {
        const match = {
            [App.Locales.US]: 'EXP',
        }[this._locale];

        const node = this.$('.category_text')
            .parent()
            .contents()
            .toArray()
            .find(({ data }) => data && AppUtils.indexOf(data, match).substr);
        if (!node || !node.data)
            return 0;
        return parseInt(node.data.replace(/\D/g, ''));
    }

    get skill_lvl() {
        const match = {
            [App.Locales.US]: 'Skill level',
        }[this._locale];

        const nodes = this.$('.category_text')
            .parent()
            .children()
            .toArray();

        for (let i = 0; i < nodes.length; i++) {
            const raw = this.$(nodes[i]).text();
            const { substr } = AppUtils.indexOf(raw, match);
            if (!substr)
                continue;
            const [mastery, lvl] = AppUtils.splitStr(raw, substr, '\n')
                ?.replace(/[^a-zA-Z0-9 ]/g, '')
                .trim()
                .split(' ') as string[];
            return { mastery, lvl: parseInt(lvl) };
        }
        return { mastery: '', lvl: 0 };
    }

    get materials(): Scrapers.Entities.Refs.Material[] {
        const match = {
            [App.Locales.US]: ['Crafting Material'],
        }[this._locale];

        return this.getMaterials(match);
    }

    get products(): Scrapers.Entities.Refs.Material[] {
        const match = {
            [App.Locales.US]: ['Crafting Result'],
        }[this._locale];
        
        return this.getMaterials(match);
    }

    async build(): Promise<Scrapers.Entities.Recipe> {
        return {
            ...(await super.build()),
            process: this.process,
            exp: this.exp,
            skill_lvl: this.skill_lvl,
            materials: this.materials,
            products: this.products,
        }
    }
}
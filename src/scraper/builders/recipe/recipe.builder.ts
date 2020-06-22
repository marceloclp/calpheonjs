import * as Scrapers from "../../typings";
import { App } from "../../../typings";
import { Generic } from "../generic.builder";
import { Matcher } from "../../../shared";

export class Recipe extends Generic {
    private getMaterials(matcher: Matcher): Scrapers.Entities.Refs.Material[] {
        const wrapper = this.$('.smallertext > tbody > tr > td')
            .toArray()
            .find(node => matcher.in(this.$(node).text()));
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
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['EXP'],
        });
        return parseInt(this.getTextNodeFromCategoryWrapper(matcher)?.data
            ?.replace(/\D/g, '') as string) || 0;
    }
    
    get skill_lvl() {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Skill level:'],
        });
        const node = this.getTextNodeFromCategoryWrapper(matcher);
        const [mastery, lvl] = this.$(node).text()
            ?.substr(matcher.indexIn(matcher.last, true))
            .trim()
            .split(' ') as string[];
        return { mastery, lvl: parseInt(lvl) };
    }

    get materials(): Scrapers.Entities.Refs.Material[] {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Crafting Material'],
        });
        return this.getMaterials(matcher);
    }

    get products(): Scrapers.Entities.Refs.Material[] {
        const matcher = new Matcher(this._locale, {
            [App.Locales.US]: ['Crafting Result'],
        });
        return this.getMaterials(matcher);
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
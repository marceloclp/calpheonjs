import { Locales, EntityTypes, Dbs } from "../enums";
import { Prices } from "./interfaces/prices";
import { deepFilter } from "../utils/functions/cheerio-utils";
import { indexFromArr, cleanForOutput, splitAtSubstrs } from "../utils/functions/string-utils";

export class Scraper {
    constructor(
        private readonly _url: string,

        private readonly _id: string,
        
        private readonly _db: Dbs,

        private readonly _locale: Locales,

        private readonly _type: EntityTypes,

        private readonly $: CheerioStatic,
    ) {}

    private getBodyNodes(deep?: boolean): CheerioElement[] {
        const nodes = this.$('table.smallertext > tbody > tr > td')
            .contents()
            .toArray();
        if (deep)
            return deepFilter(nodes);
        return nodes;
    }

    get url(): string {
        return this._url;
    }

    get id(): string {
        return this._id;
    }

    get locale(): string {
        return this._locale;
    }

    get type(): string {
        return this._type;
    }

    get icon(): string {
        return `https://${this._db}` +
            (this.$('.item_icon').attr('src') as string);
    }

    get name(): string {
        return cleanForOutput(this.$('.item_title').text());
    }

    get name_alt(): string {
        return this.$('.item_sub_title').text();
    }

    get category(): string {
        return cleanForOutput(this.$('.category_text').text());
    }

    get weight(): string {
        const match = { [Locales.US]: 'Weight:' }[this._locale];
        return cleanForOutput(
            splitAtSubstrs(
                this.$('.category_text').parent().text(),
                [match],
                ['\n'],
            ) as string
        );
    }

    get grade(): number {
        return cleanForOutput(
            this.$('.item_title').attr('class') as string,
            { replaceTuples: [[/\D/g, '']], transformFn: parseInt },
        );
    }

    get description(): string {
        const match = {
            [Locales.US]: ['Description:'],
        }[this._locale];

        const strs = this.getBodyNodes(true)
            .map(node => {
                if (node.name === 'br' || node.data === '\n')
                    return '<br>'
                return node.data as string;
            })
            .filter(str => str);
        let i = strs.findIndex(e => indexFromArr(e, match).idx !== -1) + 1;
        while (strs[i] === '<br>') i++;

        let val = '';
        while (strs[i] !== '<br>')
            val += strs[i++];

        return cleanForOutput(val);
    }

    get prices(): Prices {
        const matches = {
            buy:    { [Locales.US]: ['Buy'] }[this._locale],
            sell:   { [Locales.US]: ['Sell'] }[this._locale],
            repair: { [Locales.US]: ['Repair'] }[this._locale],
        };
        const keys = Object.keys(matches) as (keyof typeof matches)[];

        const strs = this.getBodyNodes(true)
            .filter(node => node.type === 'text' && node.data)
            .map(node => node.data as string);
        
        return strs.reduce((prices, str) => {
            const key = keys.find(
                key => indexFromArr(str, matches[key]).idx !== -1
            );
            if (!key)
                return prices;
            return { [key]: cleanForOutput(str, {
                replaceTuples: [[/\D/g, '']],
                transformFn: parseInt
            }), ...prices };
        }, {} as Prices);
    }
}
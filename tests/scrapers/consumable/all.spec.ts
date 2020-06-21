import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Consumables', () => {
    /**
     * https://bdocodex.com/us/item/741/
     * Spirit Perfume Elixir
     */
    describe('741', () => {
        const expected: Scrapers.Entities.Consumable = require('./json/741.json');
        let result: Scrapers.Result<Scrapers.Entities.Consumable>;

        before(async () => {
            result = await ScrapeMock('741', Scrapers.EntityTypes.ITEM);
        });

        it('#id', () => {
            expect(result.data.id).to.equal(expected.id);
        });

        it('#icon', () => {
            expect(result.data.icon).to.equal(expected.icon);
        });

        it('#name', () => {
            expect(result.data.name).to.equal(expected.name);
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal(expected.name_alt);
        });

        it('#type', () => {
            expect(result.data.type).to.equal(expected.type);
        });

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#prices', () => {
            expect(result.data.prices).to.deep.equal(expected.prices);
        });

        it('#grade', () => {
            expect(result.data.grade).to.equal(expected.grade);
        });
        
        it('#weight', () => {
            expect(result.data.weight).to.equal(expected.weight);
        });

        it('#effects', () => {
            expect(result.data.effects).to.deep.equal(expected.effects);
        });

        it('#duration', () => {
            expect(result.data.duration).to.equal(expected.duration);
        });

        it('#cooldown', () => {
            expect(result.data.cooldown).to.equal(expected.cooldown);
        });
    });

    /**
     * https://bdocodex.com/us/item/781/
     * Strong Griffon's Elixir
     */
    describe('781', () => {
        const expected: Scrapers.Entities.Consumable = require('./json/781.json');
        let result: Scrapers.Result<Scrapers.Entities.Consumable>;

        before(async () => {
            result = await ScrapeMock('781', Scrapers.EntityTypes.ITEM);
        });

        it('#id', () => {
            expect(result.data.id).to.equal(expected.id);
        });

        it('#icon', () => {
            expect(result.data.icon).to.equal(expected.icon);
        });

        it('#name', () => {
            expect(result.data.name).to.equal(expected.name);
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal(expected.name_alt);
        });

        it('#type', () => {
            expect(result.data.type).to.equal(expected.type);
        });

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#prices', () => {
            expect(result.data.prices).to.deep.equal(expected.prices);
        });

        it('#grade', () => {
            expect(result.data.grade).to.equal(expected.grade);
        });
        
        it('#weight', () => {
            expect(result.data.weight).to.equal(expected.weight);
        });

        it('#effects', () => {
            expect(result.data.effects).to.deep.equal(expected.effects);
        });

        it('#duration', () => {
            expect(result.data.duration).to.equal(expected.duration);
        });

        it('#cooldown', () => {
            expect(result.data.cooldown).to.equal(expected.cooldown);
        });
    });

    /**
     * https://bdocodex.com/us/item/9422/
     * Dark Pudding
     */
    describe('9422', () => {
        const expected: Scrapers.Entities.Consumable = require('./json/9422.json');
        let result: Scrapers.Result<Scrapers.Entities.Consumable>;

        before(async () => {
            result = await ScrapeMock('9422', Scrapers.EntityTypes.ITEM);
        });

        it('#id', () => {
            expect(result.data.id).to.equal(expected.id);
        });

        it('#icon', () => {
            expect(result.data.icon).to.equal(expected.icon);
        });

        it('#name', () => {
            expect(result.data.name).to.equal(expected.name);
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal(expected.name_alt);
        });

        it('#type', () => {
            expect(result.data.type).to.equal(expected.type);
        });

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#prices', () => {
            expect(result.data.prices).to.deep.equal(expected.prices);
        });

        it('#grade', () => {
            expect(result.data.grade).to.equal(expected.grade);
        });
        
        it('#weight', () => {
            expect(result.data.weight).to.equal(expected.weight);
        });

        it('#effects', () => {
            expect(result.data.effects).to.deep.equal(expected.effects);
        });

        it('#duration', () => {
            expect(result.data.duration).to.equal(expected.duration);
        });

        it('#cooldown', () => {
            expect(result.data.cooldown).to.equal(expected.cooldown);
        });
    });
});
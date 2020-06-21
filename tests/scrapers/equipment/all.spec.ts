import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Equipments', () => {
    /**
     * https://bdocodex.com/us/item/13961/
     * [Oasis] TRI: Ramones’s Blade
     */
    describe('13961', () => {
        const expected: Scrapers.Entities.Equipment = require('./json/13961.json');
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('13961', Scrapers.EntityTypes.ITEM);
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

        it('#stats', () => {
            expect(result.data.stats).to.deep.equal(expected.stats);
        });

        it('#enhancement_stats', () => {
            expect(result.data.enhancement_stats).to.deep.equal(expected.enhancement_stats);
        });

        it('#caphras_stats', () => {
            expect(result.data.caphras_stats).to.deep.equal(expected.caphras_stats);
        });

        it('#item_effects', () => {
            expect(result.data.item_effects).to.deep.equal(expected.item_effects);
        });

        it('#set_effects', () => {
            expect(result.data.set_effects).to.deep.equal(expected.set_effects);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#fairy_exp', () => {
            expect(result.data.fairy_exp).to.equal(expected.fairy_exp);
        });
    });

    /**
     * https://bdocodex.com/us/item/703549/
     * Arsha's Gauntlet (Accuracy)
     */
    describe('703549', () => {
        const expected: Scrapers.Entities.Equipment = require('./json/703549.json');
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('703549', Scrapers.EntityTypes.ITEM);
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

        it('#stats', () => {
            expect(result.data.stats).to.deep.equal(expected.stats);
        });

        it('#enhancement_stats', () => {
            expect(result.data.enhancement_stats).to.deep.equal(expected.enhancement_stats);
        });

        it('#caphras_stats', () => {
            expect(result.data.caphras_stats).to.deep.equal(expected.caphras_stats);
        });

        it('#item_effects', () => {
            expect(result.data.item_effects).to.deep.equal(expected.item_effects);
        });

        it('#set_effects', () => {
            expect(result.data.set_effects).to.deep.equal(expected.set_effects);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#fairy_exp', () => {
            expect(result.data.fairy_exp).to.equal(expected.fairy_exp);
        });
    });

    /**
     * https://bdocodex.com/us/item/11629/
     * Tungrad Necklace
     */
    describe('11629', () => {
        const expected: Scrapers.Entities.Equipment = require('./json/11629.json');
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('11629', Scrapers.EntityTypes.ITEM);
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

        it('#stats', () => {
            expect(result.data.stats).to.deep.equal(expected.stats);
        });

        it('#enhancement_stats', () => {
            expect(result.data.enhancement_stats).to.deep.equal(expected.enhancement_stats);
        });

        it('#caphras_stats', () => {
            expect(result.data.caphras_stats).to.deep.equal(expected.caphras_stats);
        });

        it('#item_effects', () => {
            expect(result.data.item_effects).to.deep.equal(expected.item_effects);
        });

        it('#set_effects', () => {
            expect(result.data.set_effects).to.deep.equal(expected.set_effects);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#fairy_exp', () => {
            expect(result.data.fairy_exp).to.equal(expected.fairy_exp);
        });
    });

    /**
     * https://bdocodex.com/us/item/10006/
     * Ain Longsword
     */
    describe('10006', () => {
        const expected: Scrapers.Entities.Equipment = require('./json/10006.json');
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('10006', Scrapers.EntityTypes.ITEM);
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

        it('#stats', () => {
            expect(result.data.stats).to.deep.equal(expected.stats);
        });

        it('#enhancement_stats', () => {
            expect(result.data.enhancement_stats).to.deep.equal(expected.enhancement_stats);
        });

        /*it('#caphras_stats', () => {
            expect(result.data.caphras_stats).to.deep.equal(expected.caphras_stats);
        });*/

        it('#item_effects', () => {
            expect(result.data.item_effects).to.deep.equal(expected.item_effects);
        });

        it('#set_effects', () => {
            expect(result.data.set_effects).to.deep.equal(expected.set_effects);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#fairy_exp', () => {
            expect(result.data.fairy_exp).to.equal(expected.fairy_exp);
        });
    });
});
import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Workers', () => {
    /**
     * https://bdocodex.com/us/npc/7572/
     * Artisan Goblin Worker
     */
    describe('7572', () => {
        const expected: Scrapers.Entities.Worker = require('./json/7572.json');
        let result: Scrapers.Result<Scrapers.Entities.Worker>;

        before(async () => {
            result = await ScrapeMock('7572', Scrapers.Types.NPC);
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

        it('#sellable', () => {
            expect(result.data.sellable).to.equal(expected.sellable);
        });

        it('#max_base_stats', () => {
            expect(result.data.max_base_stats).to.deep.equal(expected.max_base_stats);
        });

        it('#levels', () => {
            expect(result.data.levels).to.deep.equal(expected.levels);
        });

        it('#growth', () => {
            expect(result.data.growth).to.deep.equal(expected.growth);
        });

        it('#obtained_from', () => {
            expect(result.data.obtained_from).to.containSubset(expected.obtained_from);
        });
    });

    /**
     * https://bdocodex.com/us/npc/7614/
     * Acher
     */
    describe('7614', () => {
        const expected: Scrapers.Entities.Worker = require('./json/7614.json');
        let result: Scrapers.Result<Scrapers.Entities.Worker>;

        before(async () => {
            result = await ScrapeMock('7614', Scrapers.Types.NPC);
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

        it('#sellable', () => {
            expect(result.data.sellable).to.equal(expected.sellable);
        });

        it('#max_base_stats', () => {
            expect(result.data.max_base_stats).to.deep.equal(expected.max_base_stats);
        });

        it('#levels', () => {
            expect(result.data.levels).to.deep.equal(expected.levels);
        });

        it('#growth', () => {
            expect(result.data.growth).to.deep.equal(expected.growth);
        });

        it('#obtained_from', () => {
            expect(result.data.obtained_from).to.containSubset(expected.obtained_from);
        });
    });

    /**
     * https://bdocodex.com/us/npc/7615/
     * Alzath
     */
    describe('7615', () => {
        const expected: Scrapers.Entities.Worker = require('./json/7615.json');
        let result: Scrapers.Result<Scrapers.Entities.Worker>;

        before(async () => {
            result = await ScrapeMock('7615', Scrapers.Types.NPC);
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

        it('#sellable', () => {
            expect(result.data.sellable).to.equal(expected.sellable);
        });

        it('#max_base_stats', () => {
            expect(result.data.max_base_stats).to.deep.equal(expected.max_base_stats);
        });

        it('#levels', () => {
            expect(result.data.levels).to.deep.equal(expected.levels);
        });

        it('#growth', () => {
            expect(result.data.growth).to.deep.equal(expected.growth);
        });

        it('#obtained_from', () => {
            expect(result.data.obtained_from).to.containSubset(expected.obtained_from);
        });
    });
});
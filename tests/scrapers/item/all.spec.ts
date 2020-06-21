import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Items', () => {
    /**
     * https://bdocodex.com/us/item/4901/
     * Black Stone Powder
     */
    describe('4901', () => {
        const expected: Scrapers.Entities.Item = require('./json/4901.json');
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('4901', Scrapers.EntityTypes.ITEM);
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
    });

    /**
     * https://bdocodex.com/us/item/4085/
     * Melted Noc Shard
     */
    describe('4085', () => {
        const expected: Scrapers.Entities.Item = require('./json/4085.json');
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('4085', Scrapers.EntityTypes.ITEM);
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
    });
});
import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Knowledges', () => {
    /**
     * https://bdocodex.com/us/theme/58/
     * Hans
     */
    describe('58', () => {
        const expected: Scrapers.Entities.Knowledge = require('./json/58.json');
        let result: Scrapers.Result<Scrapers.Entities.Knowledge>;

        before(async () => {
            result = await ScrapeMock('58', Scrapers.EntityTypes.KNOWLEDGE);
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
        
        it('#group', () => {
            expect(result.data.group).to.equal(expected.group);
        });

        it('#obtained_from', () => {
            expect(result.data.obtained_from).to.containSubset(expected.obtained_from);
        });
    });

    /**
     * https://bdocodex.com/us/theme/103/
     * Caresto Fonti
     */
    describe('103', () => {
        const expected: Scrapers.Entities.Knowledge = require('./json/103.json');
        let result: Scrapers.Result<Scrapers.Entities.Knowledge>;

        before(async () => {
            result = await ScrapeMock('103', Scrapers.EntityTypes.KNOWLEDGE);
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
        
        it('#group', () => {
            expect(result.data.group).to.equal(expected.group);
        });

        it('#obtained_from', () => {
            expect(result.data.obtained_from).to.containSubset(expected.obtained_from);
        });
    });
});
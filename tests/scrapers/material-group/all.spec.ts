import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Material Groups', () => {
    /**
     * https://bdocodex.com/us/materialgroup/1/
     * Cereals
     */
    describe('1', () => {
        const expected: Scrapers.Entities.MaterialGroup = require('./json/1.json');
        let result: Scrapers.Result<Scrapers.Entities.MaterialGroup>;

        before(async () => {
            result = await ScrapeMock('1', Scrapers.EntityTypes.MATERIAL_GROUP);
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
        
        it('#items', () => {
            expect(result.data.items).to.containSubset(expected.items);
        });
    });
});
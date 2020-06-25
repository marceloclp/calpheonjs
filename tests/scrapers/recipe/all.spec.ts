import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Workers', () => {
    /**
     * https://bdocodex.com/us/recipe/122/
     * Beer
     */
    describe('122', () => {
        const expected: Scrapers.Entities.Recipe = require('./json/122.json');
        let result: Scrapers.Result<Scrapers.Entities.Recipe>;

        before(async () => {
            result = await ScrapeMock('122', Scrapers.EntityTypes.RECIPE);
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

        it('#process', () => {
            expect(result.data.process).to.equal(expected.process);
        });

        it('#exp', () => {
            expect(result.data.exp).to.equal(expected.exp);
        });

        it('#skill_lvl', () => {
            expect(result.data.skill_lvl).to.deep.equal(expected.skill_lvl);
        });

        it('#materials', () => {
            expect(result.data.materials).to.containSubset(expected.materials);
        });

        it('#products', () => {
            expect(result.data.products).to.containSubset(expected.products);
        });
    });
});
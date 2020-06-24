import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../../utils/query-mock";

describe('Query for Product in Recipes', () => {
    /**
     * https://bdocodex.com/us/item/9205/
     * Aloe Cookie
     */
    describe('9205', () => {
        const expected: Queries.Result<Queries.Entities.Recipe> = require('./json/9205.json');
        let result: Queries.Result<Queries.Entities.Recipe>;

        before(async () => {
            result = await QueryMock('9205', Queries.Types.PRODUCT_IN_RECIPE);
        });

        it('#type', () => {
            expect(result.type).to.equal(expected.type);
        });

        it('#url', () => {
            expect(result.url).to.equal(expected.url);
        });

        it('#data[0]', () => {
            expect(result.data[0]).to.containSubset(expected.data[0]);
        });
    });

    /**
     * https://bdocodex.com/us/item/9213/
     * Beer
     */
    describe('9213', () => {
        const expected: Queries.Result<Queries.Entities.Recipe> = require('./json/9213.json');
        let result: Queries.Result<Queries.Entities.Recipe>;

        before(async () => {
            result = await QueryMock('9213', Queries.Types.PRODUCT_IN_RECIPE);
        });

        it('#type', () => {
            expect(result.type).to.equal(expected.type);
        });

        it('#url', () => {
            expect(result.url).to.equal(expected.url);
        });

        it('#data[0]', () => {
            expect(result.data[0]).to.containSubset(expected.data[0]);
        });
    });
});
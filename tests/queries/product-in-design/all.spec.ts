import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../../utils/query-mock";

describe('Query for Product in Design', () => {
    /**
     * https://bdocodex.com/us/item/10103/
     * Axion Shield
     */
    describe('10103', () => {
        const expected: Queries.Result<Queries.Entities.Recipe> = require('./json/10103.json');
        let result: Queries.Result<Queries.Entities.Recipe>;

        before(async () => {
            result = await QueryMock('10103', Queries.Types.PRODUCT_IN_DESIGN);
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
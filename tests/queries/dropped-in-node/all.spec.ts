import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../../utils/query-mock";

describe('Query for Dropped in Node', () => {
    /**
     * https://bdocodex.com/us/item/10656/
     * Krea Axe
     */
    describe('10656', () => {
        const expected: Queries.Result<Queries.Entities.Node> = require('./json/10656.json');
        let result: Queries.Result<Queries.Entities.Node>;

        before(async () => {
            result = await QueryMock('10656', Queries.Types.DROPPED_IN_NODE);
        });

        it('#type', () => {
            expect(result.type).to.equal(expected.type);
        });

        it('#url', () => {
            expect(result.url).to.equal(expected.url);
        });

        it('#data', () => {
            expect(result.data).to.containSubset(expected.data);
        });
    });

    /**
     * https://bdocodex.com/us/item/15135/
     * Magic Crystal of Infinity - Siege
     */
    describe('15135', () => {
        const expected: Queries.Result<Queries.Entities.Node> = require('./json/15135.json');
        let result: Queries.Result<Queries.Entities.Node>;

        before(async () => {
            result = await QueryMock('15135', Queries.Types.DROPPED_IN_NODE);
        });

        it('#type', () => {
            expect(result.type).to.equal(expected.type);
        });

        it('#url', () => {
            expect(result.url).to.equal(expected.url);
        });

        it('#data', () => {
            expect(result.data).to.containSubset(expected.data);
        });
    });
});
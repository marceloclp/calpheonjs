import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../../utils/query-mock";

describe('Query for Quest Rewards', () => {
    /**
     * https://bdocodex.com/us/item/13210/
     * Kzarka Shortsword
     */
    describe('13210', () => {
        const expected: Queries.Result<Queries.Entities.Quest> = require('./json/13210.json');
        let result: Queries.Result<Queries.Entities.Quest>;

        before(async () => {
            result = await QueryMock('13210', Queries.Types.SOLD_BY_NPC);
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
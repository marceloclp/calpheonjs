import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../../utils/query-mock";

describe('Query for NPC Drops', () => {
    /**
     * https://bdocodex.com/us/item/6158/
     * Fancy Feather
     */
    describe('6158', () => {
        const expected: Queries.Result<Queries.Entities.NPCDrop> = require('./json/6158.json');
        let result: Queries.Result<Queries.Entities.NPCDrop>;

        before(async () => {
            result = await QueryMock('6158', Queries.Types.NPC_DROPS);
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
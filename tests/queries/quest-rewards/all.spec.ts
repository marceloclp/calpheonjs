import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../../utils/query-mock";

describe('Quests', () => {
    /**
     * https://bdocodex.com/us/item/519/
     * HP Potion (Large)
     */
    describe('519', () => {
        const expected: Queries.Result<Queries.Entities.Quest> = require('./json/519.json');
        let result: Queries.Result<Queries.Entities.Quest>;

        before(async () => {
            result = await QueryMock('519', Queries.Types.QUEST_REWARD);
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
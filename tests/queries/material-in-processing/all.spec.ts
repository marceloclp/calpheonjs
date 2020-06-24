import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../../utils/query-mock";

describe('Query for Material in Processing', () => {
    /**
     * https://bdocodex.com/us/item/10406/
     * Ain Amulet
     */
    describe('10406', () => {
        const expected: Queries.Result<Queries.Entities.Recipe> = require('./json/10406.json');
        let result: Queries.Result<Queries.Entities.Recipe>;

        before(async () => {
            result = await QueryMock('10406', Queries.Types.MATERIAL_IN_PROCESSING);
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
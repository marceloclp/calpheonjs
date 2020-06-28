import "../utils/chai.config";
import { Queries } from "../../src";
import QueryMock from "../utils/query-mock";
import { expect } from "chai";

describe('Invalid queries', () => {
    let result: Queries.Result;

    before(async () => {
        result = await QueryMock('715003123133', Queries.Types.OBTAINED_FROM);
    });

    it('#should be null', () => {
        expect(result.type).to.be.null;
    });
});
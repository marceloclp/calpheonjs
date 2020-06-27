import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

/**
 * https://bdocodex.com/us/item/872173/
 */
describe('Non-existent Items', () => {
    let result: Scrapers.Result<null>;

    before(async () => {
        result = await ScrapeMock('872173', Scrapers.Types.ITEM);
    });
    
    it('should return nothing', () => {
        expect(result.data).to.be.null;
    });
});
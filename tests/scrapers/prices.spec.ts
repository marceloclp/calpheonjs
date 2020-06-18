import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: prices', () => {
    /**
     * https://bdocodex.com/us/item/2706/
     * Calpheon Handcrafted Bed
     */
    describe('2706', () => {
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('2706',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#prices', () => {
            expect(result.data.prices).to.deep.equal({ buy: 58134, sell: 17440 });
        });
    });

    /**
     * https://bdocodex.com/us/item/11016/
     * Muskan's Shoes
     */
    describe('11016', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('11016',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#prices', () => {
            expect(result.data.prices).to.deep.equal({ buy: 75000000, sell: 24000, repair: 16000 });
        });
    });

    /**
     * https://bdocodex.com/us/item/703549/
     * Arsha's Gauntlet (Accuracy)
     */
    describe('703549', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('703549',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#prices', () => {
            expect(result.data.prices).to.deep.equal({ buy: 1, repair: 0 });
        });
    });
});
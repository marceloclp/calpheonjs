import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: fairy_exp', () => {
    /**
     * https://bdocodex.com/us/item/10817/
     * Zereth Helmet
     */
    describe('10817', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('10817',
                Scrapers.Types.ITEM
            );
        });

        it('#fairy_exp', () => {
            expect(result.data.fairy_exp).to.equal(294);
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
                Scrapers.Types.ITEM
            );
        });

        it('#fairy_exp', () => {
            expect(result.data.fairy_exp).to.equal(47500);
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
                Scrapers.Types.ITEM
            );
        });

        it('#fairy_exp', () => {
            expect(result.data.fairy_exp).to.equal(0);
        });
    });
});
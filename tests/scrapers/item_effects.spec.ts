import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: item_effects', () => {
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

        it('#item_effects', () => {
            expect(result.data.item_effects).to.deep.equal([
                'Knockdown/Bound Resistance +15%'
            ]);
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

        it('#item_effects', () => {
            expect(result.data.item_effects).to.deep.equal([
                'All Evasion Up'
            ]);
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

        it('#item_effects', () => {
            expect(result.data.item_effects).to.deep.equal([
                'Extra Damage to All Species +19',
                'Attack Speed +3 Level',
                'All Accuracy +16',
                'Ignore All Resistance +20%',
            ]);
        });
    });
});
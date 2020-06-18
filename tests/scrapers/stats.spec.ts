import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: stats', () => {
    /**
     * https://bdocodex.com/us/item/10817/
     * Zereth Helmet
     */
    describe('10817', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('10817',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#stats', () => {
            expect(result.data.stats).to.deep.equal({
                damage: 0,
                defense: 5,
                accuracy: 0,
                evasion: 4,
                dmg_reduction: 1,
                h_evasion: 12,
                h_dmg_reduction: 2,
            });
        });
    });

    /**
     * https://bdocodex.com/us/item/10991/
     * Beia's Black Magic Gloves
     */
    describe('10991', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('10991',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#stats', () => {
            expect(result.data.stats).to.deep.equal({
                damage: 0,
                defense: 38,
                accuracy: 0,
                evasion: 19,
                h_evasion: 61,
                dmg_reduction: 19,
            });
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

        it('#stats', () => {
            expect(result.data.stats).to.deep.equal({
                damage: 0,
                defense: 4,
                accuracy: 0,
                evasion: 3,
                dmg_reduction: 1,
                h_evasion: 6,
            });
        });
    });
});
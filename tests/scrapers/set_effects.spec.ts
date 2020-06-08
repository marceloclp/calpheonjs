import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: set_effects', () => {
    /**
     * https://bdocodex.com/us/item/10817/
     * Zereth Helmet
     */
    describe('10817', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = await ScrapeMock('10817',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#set_effects', () => {
            expect(result.set_effects).to.deep.equal({
                2: ['Max Stamina +200'],
                3: ['Extra Damage to All Species +5'],
            });
        });
    });

    /**
     * https://bdocodex.com/us/item/11016/
     * Muskan's Shoes
     */
    describe('11016', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = await ScrapeMock('11016',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#set_effects', () => {
            expect(result.set_effects).to.deep.equal({
                3: ['Max Stamina +200'],
                4: [
                    'Attack Speed +1 Level',
                    'Casting Speed +1 Level',
                ],
            });
        });
    });

    /**
     * https://bdocodex.com/us/item/703549/
     * Arsha's Gauntlet (Accuracy)
     */
    describe('703549', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = await ScrapeMock('703549',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#set_effects', () => {
            expect(result.set_effects).to.deep.equal({});
        });
    });
});
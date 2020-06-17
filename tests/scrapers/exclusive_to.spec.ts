import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: exclusive_to', () => {
    /**
     * https://bdocodex.com/us/item/10817/
     * Zereth Helmet
     */
    describe('10817', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = (await ScrapeMock('10817',
                Scrapers.EntityTypes.ITEM
            )).data;
        });

        it('#exclusive_to', () => {
            expect(result.exclusive_to).to.deep.equal([]);
        });
    });

    /**
     * https://bdocodex.com/us/item/703549/
     * Arsha's Gauntlet (Accuracy)
     */
    describe('703549', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = (await ScrapeMock('703549',
                Scrapers.EntityTypes.ITEM
            )).data;
        });

        it('#exclusive_to', () => {
            expect(result.exclusive_to).to.deep.equal(['Striker', 'Mystic']);
        });
    });

    /**
     * https://bdocodex.com/us/item/13210/
     * Kzarka Shortsword
     */
    describe('13210', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = (await ScrapeMock('13210',
                Scrapers.EntityTypes.ITEM
            )).data;
        });

        it('#exclusive_to', () => {
            expect(result.exclusive_to).to.deep.equal(['Tamer', 'Kunoichi', 'Ninja']);
        });
    });
});
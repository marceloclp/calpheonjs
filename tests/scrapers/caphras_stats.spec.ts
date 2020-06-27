import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: caphras_stats', () => {
    /**
     * https://bdocodex.com/us/item/11016/
     * Muskan's Shoes
     */
    describe('11016', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;
        //let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = await ScrapeMock('11016',
                Scrapers.Types.ITEM
            );
        });

        it('#caphras_stats[18][0]', () => {
            expect(result.data.caphras_stats[18]?.[0]).to.deep.equal({
                count_next: 19,
                count_total: 0,
                stats: {},
            });
        });

        it('#caphras_stats[18][1]', () => {
            expect(result.data.caphras_stats[18]?.[1]).to.deep.equal({
                count_next: 28,
                count_total: 19,
                stats: {
                    damage: 0,
                    evasion: 0,
                    accuracy: 0,
                    defense: 0,
                    h_evasion: 0,
                    h_defense: 0,
                    hp: 10,
                    mp: 0,
                },
            });
        });

        it('#caphras.stats[18].length', () => {
            expect(result.data.caphras_stats[18]?.length).to.equal(21);
        });
    });

    /**
     * https://bdocodex.com/us/item/16832/
     * Magic Pickaxe
     */
    describe('16832', () => {
        let result: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await ScrapeMock('16832',
                Scrapers.Types.ITEM
            );
        });

        it('#caphras_stats', () => {
            expect(result.data.caphras_stats).to.deep.equal({ 18: [], 19: [], 20: [] });
        });
    });
});
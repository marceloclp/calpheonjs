import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('Consumables', () => {
    /**
     * https://bdocodex.com/us/item/781/
     * Spirit Perfume Elixir
     */
    describe('781', () => {
        let result: Scrapers.Entities.Consumable;

        before(async () => {
            result = (await ScrapeMock('781',
                Scrapers.EntityTypes.ITEM
            )).data;
        });

        it('#effects', () => {
            expect(result.effects).to.deep.equal([
                `MAX HP +300`,
                `Critical Hit Rate +5`,
                `MP/WP/SP +3 per every good hit`,
            ]);
        });

        it('#duration', () => {
            expect(result.duration).to.equal(1200);
        });

        it('#cooldown', () => {
            expect(result.cooldown).to.equal(1200);
        });
    });

    /**
     * https://bdocodex.com/us/item/741/
     * Strong Griffon's Elixir
     */
    describe('741', () => {
        let result: Scrapers.Entities.Consumable;

        before(async () => {
            result = (await ScrapeMock('741',
                Scrapers.EntityTypes.ITEM
            )).data;
        });

        it('#effects', () => {
            expect(result.effects).to.deep.equal([
                `Additional Damage Against Kamasylvian Monsters +17`,
            ]);
        });

        it('#duration', () => {
            expect(result.duration).to.equal(480);
        });

        it('#cooldown', () => {
            expect(result.cooldown).to.equal(10);
        });
    });

    /**
     * https://bdocodex.com/us/item/9422/
     * Dark Pudding
     */
    describe('9422', () => {
        let result: Scrapers.Entities.Consumable;

        before(async () => {
            result = (await ScrapeMock('9422',
                Scrapers.EntityTypes.ITEM
            )).data;
        });

        it('#effects', () => {
            expect(result.effects).to.deep.equal([
                `All AP +3`,
                `Damage Against Humans +2`,
            ]);
        });

        it('#duration', () => {
            expect(result.duration).to.equal(5400);
        });

        it('#cooldown', () => {
            expect(result.cooldown).to.equal(1800);
        });
    });
});
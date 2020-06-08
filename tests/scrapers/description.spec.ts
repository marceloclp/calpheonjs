import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: description', () => {
    /**
     * https://bdocodex.com/us/item/9601/
     * Balenos Meal
     */
    describe('9601', () => {
        let result: Scrapers.Entities.Item;

        before(async () => {
            result = await ScrapeMock('9601',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#description', () => {
            expect(result.description).to.equal('The flavors of Balenos put into one dish.');
        });
    });

    /**
     * https://bdocodex.com/us/item/9746/
     * Abyssal Brass Ingot
     */
    describe('9746', () => {
        let result: Scrapers.Entities.Item;

        before(async () => {
            result = await ScrapeMock('9746',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#description', () => {
            expect(result.description).to.equal(`A Brass Ingot imbued with mystical powers. An unknown force seems to seep out from deep within. The item is used to create Hughol's Weapon.`);
        });
    });

    /**
     * https://bdocodex.com/us/item/10817/
     * Zereth Helmet
     */
    describe('10817', () => {
        let result: Scrapers.Entities.Item;

        before(async () => {
            result = await ScrapeMock('10817',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#description', () => {
            expect(result.description).to.equal('High-quality armor which gives less fatigue to its wearer');
        });
    });

    /**
     * https://bdocodex.com/us/item/10991/
     * Beia's Black Magic Gloves
     */
    describe('10991', () => {
        let result: Scrapers.Entities.Item;

        before(async () => {
            result = await ScrapeMock('10991',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#description', () => {
            expect(result.description).to.equal('A pair of gloves that Beia, the Chief Investigator of Tarif, left as a farewell present. There is writing on its decoration.');
        });
    });

    /**
     * https://bdocodex.com/us/item/11016/
     * Muskan's Shoes
     */
    describe('11016', () => {
        let result: Scrapers.Entities.Item;

        before(async () => {
            result = await ScrapeMock('11016',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#description', () => {
            expect(result.description).to.equal('Shoes of Muskan. It makes your footsteps feel even lighter.');
        });
    });
});
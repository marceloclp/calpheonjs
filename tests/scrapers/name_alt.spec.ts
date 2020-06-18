import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: name_alt', () => {
    /**
     * https://bdocodex.com/us/item/9601/
     * Balenos Meal
     */
    describe('9601', () => {
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('9601',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal('발레노스 정식');
        });
    });

    /**
     * https://bdocodex.com/us/item/9746/
     * Abyssal Brass Ingot
     */
    describe('9746', () => {
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('9746',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal('심연의 황동 주괴');
        });
    });

    /**
     * https://bdocodex.com/us/item/10817/
     * Zereth Helmet
     */
    describe('10817', () => {
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('10817',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal('제레스 투구');
        });
    });

    /**
     * https://bdocodex.com/us/item/10991/
     * Beia's Black Magic Gloves
     */
    describe('10991', () => {
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('10991',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal('베이아의 검은마력 장갑');
        });
    });

    /**
     * https://bdocodex.com/us/item/11016/
     * Muskan's Shoes
     */
    describe('11016', () => {
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('11016',
                Scrapers.EntityTypes.ITEM
            );
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal('머스칸의 신발');
        });
    });
});
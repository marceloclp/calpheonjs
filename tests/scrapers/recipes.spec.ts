import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

import chai from "chai";
import chaiSubset from "chai-subset";
chai.use(chaiSubset);

describe('Consumables', () => {
    /**
     * https://bdocodex.com/us/recipe/27/
     * Defense Elixir
     */
    describe('27', () => {
        let result: Scrapers.Result<Scrapers.Entities.Recipe>;
        let scrapeResult: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('27',
                Scrapers.EntityTypes.RECIPE
            );
            scrapeResult = await result.data.materials[0].scrape?.() as any;
        });

        it('should be a recipe', () => {
            expect(result.type).to.equal('recipe');
        });

        it('#process', () => {
            expect(result.data.process).to.equal('Alchemy');
        });

        it('#exp', () => {
            expect(result.data.exp).to.equal(460);
        });

        it('#skill_lvl', () => {
            expect(result.data.skill_lvl).to.deep.equal({
                mastery: 'Beginner',
                lvl: 1,
            });
        });

        it('#materials', () => {
            expect(result.data.materials).to.containSubset([{
                id: '5301',
                icon: '/items/new_icon/03_etc/07_productmaterial/00005301.png',
                name: 'Clear Liquid Reagent',
                shortUrl: '/us/item/5301/',
                amount: 1,
                grade: 0,
            }, {
                id: '5001',
                icon: '/items/new_icon/03_etc/07_productmaterial/00005001.png',
                name: 'Ash Sap',
                shortUrl: '/us/item/5001/',
                amount: 6,
                grade: 0,
            }, {
                id: '17',
                icon: '/items/new_icon/03_etc/07_productmaterial/00006205.png',
                name: 'Blood 2',
                shortUrl: '/us/materialgroup/17/',
                amount: 5,
                grade: 0,
            }, {
                id: '6656',
                icon: '/items/new_icon/03_etc/07_productmaterial/00006656.png',
                name: 'Purified Water',
                shortUrl: '/us/item/6656/',
                amount: 3,
                grade: 0,
            }]);
        });

        it('#materials[0].scrape()', () => {
            expect(scrapeResult.data).to.containSubset({
                id: '5301',
                name: 'Clear Liquid Reagent',
                category: 'Crafting Materials'
            });
        });

        it('#products', () => {
            expect(result.data.products).to.containSubset([{
                id: '716',
                icon: '/items/new_icon/03_etc/08_potion/00000716.png',
                name: 'Defense Elixir',
                shortUrl: '/us/item/716/',
                amount: 1,
                grade: 1,
            }, {
                id: '717',
                icon: '/items/new_icon/03_etc/08_potion/00000717.png',
                name: 'Elixir of Steel Defense',
                shortUrl: '/us/item/717/',
                amount: 1,
                grade: 2,
            }]);
        });
    });

    /**
     * https://bdocodex.com/us/recipe/344/
     * Flawless Spirit Stone
     */
    describe('344', () => {
        let result: Scrapers.Result<Scrapers.Entities.Recipe>;
        let scrapeResult: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('344',
                Scrapers.EntityTypes.RECIPE
            );
            scrapeResult = await result.data.materials[0].scrape?.() as any;
        });

        it('should be a recipe', () => {
            expect(result.type).to.equal('recipe');
        });

        it('#process', () => {
            expect(result.data.process).to.equal('Alchemy');
        });

        it('#exp', () => {
            expect(result.data.exp).to.equal(0);
        });

        it('#skill_lvl', () => {
            expect(result.data.skill_lvl).to.deep.equal({
                mastery: 'Skilled',
                lvl: 1,
            });
        });

        it('#materials', () => {
            expect(result.data.materials).to.containSubset([{
                id: '6605',
                icon: '/items/new_icon/03_etc/07_productmaterial/00006605.png',
                name: 'Oil of Tranquility',
                shortUrl: '/us/item/6605/',
                amount: 10,
                grade: 0,
            }, {
                id: '5303',
                icon: '/items/new_icon/03_etc/07_productmaterial/00005303.png',
                name: 'Tenacious Origin of Life',
                shortUrl: '/us/item/5303/',
                amount: 4,
                grade: 1,
            }, {
                id: '5304',
                icon: '/items/new_icon/03_etc/07_productmaterial/00005304.png',
                name: 'Rough Opulent Crystal',
                shortUrl: '/us/item/5304/',
                amount: 4,
                grade: 1,
            }]);
        });

        it('#materials[0].scrape()', () => {
            expect(scrapeResult.data).to.containSubset({
                id: '6605',
                name: 'Oil of Tranquility',
                category: 'Crafting Materials'
            });
        });

        it('#products', () => {
            expect(result.data.products).to.containSubset([{
                id: '5305',
                icon: '/items/new_icon/03_etc/07_productmaterial/00005305.png',
                name: 'Flawless Spirit Stone',
                shortUrl: '/us/item/5305/',
                amount: 1,
                grade: 2,
            }]);
        });
    });

    /**
     * https://bdocodex.com/us/recipe/169/
     * Balenos Meal
     */
    describe('169', () => {
        let result: Scrapers.Result<Scrapers.Entities.Recipe>;
        let scrapeResult: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('169',
                Scrapers.EntityTypes.RECIPE
            );
            scrapeResult = await result.data.materials[0].scrape?.() as any;
        });

        it('should be a recipe', () => {
            expect(result.type).to.equal('recipe');
        });

        it('#process', () => {
            expect(result.data.process).to.equal('Cooking');
        });

        it('#exp', () => {
            expect(result.data.exp).to.equal(1600);
        });

        it('#skill_lvl', () => {
            expect(result.data.skill_lvl).to.deep.equal({
                mastery: 'Skilled',
                lvl: 6,
            });
        });

        it('#materials', () => {
            expect(result.data.materials).to.containSubset([{
                id: '9203',
                icon: '/items/new_icon/03_etc/07_productmaterial/00009203.png',
                name: 'Cheese Gratin',
                shortUrl: '/us/item/9203/',
                amount: 1,
                grade: 1,
            }]);
        });

        it('#products', () => {
            expect(result.data.products).to.containSubset([{
                id: '9601',
                icon: '/items/new_icon/03_etc/07_productmaterial/00009601.png',
                name: 'Balenos Meal',
                shortUrl: '/us/item/9601/',
                amount: 1,
                grade: 3,
            }]);
        });
    });
});
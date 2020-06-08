import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../utils/query-mock";

describe('PRODUCT IN RECIPE', () => {
    /**
     * https://bdocodex.com/us/item/633/
     * [Party] Elixir of Assassination
     */
    describe('[Party] Elixir of Assassination', () => {
        let result: Queries.Result<Queries.Entities.Recipe>;

        before(async () => {
            result = await QueryMock('9205',
                Queries.Types.PRODUCT_IN_RECIPE
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=recipes&type=product&item_id=9205&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('recipe');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(1);
        });

        it('#items[0]', () => {
            expect(result.data[0]).to.deep.equal({
                type: 'recipe',
                shortUrl: '/us/recipe/115/',
                id: '115',
                icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009205.png',
                name: 'Aloe Cookie',
                process: 'Cooking',
                skill_lvl: { mastery: 'Beginner', lvl: 6 },
                exp: 400,
                materials: [{
                    type: 'ref',
                    shortUrl: '/us/item/7347/',
                    id: '7347',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00007347.png',
                    amount: 5,
                }, {
                    type: 'ref',
                    shortUrl: '/us/materialgroup/2/',
                    id: '2',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00007205.png',
                    amount: 7,
                }, {
                    type: 'ref',
                    shortUrl: '/us/materialgroup/48/',
                    id: '48',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00007702.png',
                    amount: 3,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9002/',
                    id: '9002',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009002.png',
                    amount: 4,
                }],
                products: [{
                    type: 'ref',
                    shortUrl: '/us/item/9205/',
                    id: '9205',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009205.png',
                    amount: 1,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9294/',
                    id: '9294',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009294.png',
                    amount: 1,
                }]
            })
        });
    });

    /**
     * https://bdocodex.com/us/item/633/
     * Beer
     */
    describe('Beer', () => {
        let result: Queries.Result<Queries.Entities.Recipe>;

        before(async () => {
            result = await QueryMock('9213',
                Queries.Types.PRODUCT_IN_RECIPE
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=recipes&type=product&item_id=9213&l=us');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(2);
        });

        it('#items[0]', () => {
            expect(result.data[0]).to.deep.equal({
                type: 'recipe',
                shortUrl: '/us/recipe/122/',
                id: '122',
                icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009213.png',
                name: 'Beer',
                process: 'Cooking',
                skill_lvl: { mastery: 'Beginner', lvl: 1 },
                exp: 400,
                materials: [{
                    type: 'ref',
                    shortUrl: '/us/materialgroup/1/',
                    id: '1',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00007005.png',
                    amount: 5,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9059/',
                    id: '9059',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009059.png',
                    amount: 6,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9002/',
                    id: '9002',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009002.png',
                    amount: 1,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9005/',
                    id: '9005',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009005.png',
                    amount: 2,
                }],
                products: [{
                    type: 'ref',
                    shortUrl: '/us/item/9213/',
                    id: '9213',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009213.png',
                    amount: 1,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9283/',
                    id: '9283',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009283.png',
                    amount: 1,
                }]
            })
        });

        it('#items[1]', () => {
            expect(result.data[1]).to.deep.equal({
                type: 'recipe',
                shortUrl: '/us/recipe/204/',
                id: '204',
                icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009213.png',
                name: 'Beer',
                process: 'Cooking',
                skill_lvl: { mastery: 'Beginner', lvl: 1 },
                exp: 400,
                materials: [{
                    type: 'ref',
                    shortUrl: '/us/materialgroup/1/',
                    id: '1',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00007005.png',
                    amount: 5,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9059/',
                    id: '9059',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009059.png',
                    amount: 6,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9002/',
                    id: '9002',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009002.png',
                    amount: 1,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9005/',
                    id: '9005',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009005.png',
                    amount: 2,
                }],
                products: [{
                    type: 'ref',
                    shortUrl: '/us/item/9213/',
                    id: '9213',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009213.png',
                    amount: 1,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/9283/',
                    id: '9283',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00009283.png',
                    amount: 1,
                }]
            })
        });
    });
});
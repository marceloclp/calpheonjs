import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../utils/query-mock";

describe('PRODUCT IN DESIGN', () => {
    /**
     * https://bdocodex.com/us/item/10103/
     * Axion Shield
     */
    describe('Axion Shield', () => {
        let result: Queries.Result<Queries.Entities.Recipe>;

        before(async () => {
            result = await QueryMock('10103',
                Queries.Types.PRODUCT_IN_DESIGN
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=designs&type=product&item_id=10103&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('recipe');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(1);
        });

        it('#items[0]', () => {
            expect(result.data[0]).to.containSubset({
                type: 'recipe',
                shortUrl: '/us/design/5509/',
                id: '5509',
                icon: 'https://bdocodex.com/items/new_icon/06_pc_equipitem/00_common/08_subweapon/00010103.png',
                name: 'Ultimate Axion Shield',
                process: '',
                skill_lvl: { mastery: 'Beginner', lvl: 0 },
                exp: 0,
                materials: [{
                    type: 'ref',
                    shortUrl: '/us/item/4077/',
                    id: '4077',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00004077.png',
                    amount: 5,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/4053/',
                    id: '4053',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00004053.png',
                    amount: 1,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/6151/',
                    id: '6151',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00006151.png',
                    amount: 2,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/4802/',
                    id: '4802',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00004802.png',
                    amount: 10,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/4901/',
                    id: '4901',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00004901.png',
                    amount: 10,
                }],
                products: [{
                    type: 'ref',
                    shortUrl: '/us/item/10113/',
                    id: '10113',
                    icon: 'https://bdocodex.com/items/new_icon/06_pc_equipitem/00_common/08_subweapon/00010103.png',
                    amount: 1,
                }, {
                    type: 'ref',
                    shortUrl: '/us/item/10103/',
                    id: '10103',
                    icon: 'https://bdocodex.com/items/new_icon/06_pc_equipitem/00_common/08_subweapon/00010103.png',
                    amount: 1,
                }]
            })
        });
    });
});
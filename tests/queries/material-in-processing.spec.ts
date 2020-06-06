import * as h from "../utils/headers";
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { QueryTypes, Result, Recipe } from "../utils/query-mock";

describe(h.title('PRODUCT IN PROCESSING'), () => {
    /**
     * https://bdocodex.com/us/item/10406/
     * Ain Amulet
     */
    describe(h.subtitle('Ain Amulet'), () => {
        let result: Result<Recipe>;

        before(async () => {
            result = await QueryMock('10406',
                QueryTypes.MATERIAL_IN_PROCESSING
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=mrecipes&type=material&item_id=10406&l=us');
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
                shortUrl: '/us/mrecipe/749/',
                id: '749',
                icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00004051.png',
                name: 'Melted Iron Shard',
                process: 'Heating',
                skill_lvl: { mastery: 'Beginner', lvl: 0 },
                exp: 0,
                materials: [{
                    type: 'ref',
                    id: '10406',
                    shortUrl: '/us/item/10406/',
                    icon: 'https://bdocodex.com/items/new_icon/06_pc_equipitem/00_common/01_weapon/00010406.png',
                    amount: 1,
                }],
                products: [{
                    type: 'ref',
                    id: '4051',
                    shortUrl: '/us/item/4051/',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00004051.png',
                    amount: 3,
                }, {
                    type: 'ref',
                    id: '5956',
                    shortUrl: '/us/item/5956/',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00005956.png',
                    amount: 1,
                }, {
                    type: 'ref',
                    id: '4062',
                    shortUrl: '/us/item/4062/',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00004062.png',
                    amount: 1,
                }]
            })
        });
    });
});
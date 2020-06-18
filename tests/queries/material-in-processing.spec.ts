import { describe } from "mocha";
import { expect } from "chai";
import { Scrapers } from "../utils/scrape-mock";
import QueryMock, { Queries } from "../utils/query-mock";

describe('PRODUCT IN PROCESSING', () => {
    /**
     * https://bdocodex.com/us/item/10406/
     * Ain Amulet
     */
    describe('Ain Amulet', () => {
        let result: Queries.Result<Queries.Entities.Recipe>;
        let scrapeResult: Scrapers.Result<Scrapers.Entities.Equipment>;

        before(async () => {
            result = await QueryMock('10406',
                Queries.Types.MATERIAL_IN_PROCESSING
            );
            scrapeResult = await result
                .data[0]
                .materials[0]
                .scrape?.<Scrapers.Entities.Equipment>() as any;
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
            expect(result.data[0]).to.containSubset({
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

        it('#items[0].materials[0].scrape().data', () => {
            expect(scrapeResult.data).to.containSubset({
                id: '10406',
                category: 'Equipment',
                name: 'Ain Amulet',
            });
        });

        it('#items[0].materials[0].scrape().type', () => {
            expect(scrapeResult.type).to.equal('equipment');
        });
    });
});
import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import { Queries } from "../../utils/query-mock";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Items > Queries', () => {
    /**
     * https://bdocodex.com/us/item/4901/
     * Black Stone Powder
     */
    describe('4901', () => {
        let result: Scrapers.Result<Scrapers.Entities.Item>;

        before(async () => {
            result = await ScrapeMock('4901', Scrapers.EntityTypes.ITEM);
        });

        describe('#quest_rewards', () => {
            let queryResult: Queries.Result<Queries.Entities.Quest>;

            before(async () => {
                queryResult = await result.data?.quest_rewards?.() as any;
            });

            it('#type', () => {
                expect(queryResult.type).to.equal('quest');
            });

            it('#data.length', () => {
                expect(queryResult.data.length).to.equal(14);
            });

            it('#data[6]', () => {
                expect(queryResult.data[6]).to.containSubset({
                    type: 'quest',
                    id: '1100/34',
                    icon: 'https://bdocodex.com/items/quest/00004901.png',
                    name: 'Production #3 - Introduction to Production',
                    shortUrl: '/us/quest/1100/34/',
                    lvl: 0,
                    region: 'Eastern Balenos',
                    exp: 0,
                    exp_skill: 0,
                    exp_contribution: 140,
                    rewards: {
                        items: [{
                            type: 'ref',
                            id: '4901',
                            icon: 'https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00004901.png',
                            shortUrl: '/us/item/4901/',
                            amount: 2,
                        }, {
                            type: 'ref',
                            id: '542',
                            icon: 'https://bdocodex.com/items/new_icon/03_etc/12_doapplydirectlyitem/00000000_power.png',
                            shortUrl: '/us/item/542/',
                            amount: 1,
                        }, {
                            type: 'ref',
                            id: '2',
                            icon: 'https://bdocodex.com/items/new_icon/00000002_special.png',
                            shortUrl: '/us/item/2/',
                            amount: 1,
                        }]
                    }
                });
            });
        });

        describe('#npc_drops', () => {
            it('should be undefined', () => {
                expect(result.data.npc_drops).to.be.undefined;
            });
        });
    });
});
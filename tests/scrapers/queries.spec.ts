import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('SCRAPER: queries', () => {
    /**
     * https://bdocodex.com/us/item/519/
     * HP Potion (Large)
     */
    describe('HP Potion (Large)', () => {
        let result: Scrapers.Entities.Equipment;

        before(async () => {
            result = (await ScrapeMock('519',
                Scrapers.EntityTypes.ITEM
            )).data;
        });

        it('#quest_rewards.length', () => {
            expect(result.quest_rewards.length).to.equal(67);
        });

        it('#quest_rewards[0]', () => {
            expect(result.quest_rewards[0]).to.deep.equal({
                type: 'quest',
                id: '4019/1',
                icon: 'https://bdocodex.com/items/quest/altinova_5.png',
                name: `[Co-op] Stop Illezra's Plot`,
                shortUrl: '/us/quest/4019/1/',
                lvl: 0,
                region: 'Mediah',
                exp: 0,
                exp_skill: 0,
                exp_contribution: 300,
                rewards: {
                    items: [{
                        type: 'ref',
                        id: '40215',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/13_puzzleitem/00040121.png',
                        shortUrl: '/us/item/40215/',
                        amount: 1,
                    }],
                    choose: [{
                        type: 'ref',
                        id: '519',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000519.png',
                        shortUrl: '/us/item/519/',
                        amount: 10,
                    }, {
                        type: 'ref',
                        id: '522',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000522.png',
                        shortUrl: '/us/item/522/',
                        amount: 10,
                    }, {
                        type: 'ref',
                        id: '593',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000593.png',
                        shortUrl: '/us/item/593/',
                        amount: 10,
                    }, {
                        type: 'ref',
                        id: '597',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000597.png',
                        shortUrl: '/us/item/597/',
                        amount: 10,
                    }],
                    amity: [],
                },
            });
        });

        it('#product_of_recipes.length', () => {
            expect(result.product_of_recipes.length).to.equal(0);
        });

        it('#product_of_recipes', () => {
            expect(result.product_of_recipes).to.deep.equal([]);
        });

        it('#product_of_processing.length', () => {
            expect(result.product_of_processing.length).to.equal(1);
        });

        it('#product_of_processing[0]', () => {
            expect(result.product_of_processing[0]).to.deep.equal({
                type: 'recipe',
                id: '983',
                icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000519.png',
                name: 'HP Potion (Large)',
                shortUrl: '/us/mrecipe/983/',
                process: 'Simple Alchemy',
                exp: 0,
                skill_lvl: { mastery: 'Beginner', lvl: 0 },
                materials: [{
                    type: 'ref',
                    id: '518',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000518.png',
                    shortUrl: '/us/item/518/',
                    amount: 3,
                }],
                products: [{
                    type: 'ref',
                    id: '519',
                    icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000519.png',
                    shortUrl: '/us/item/519/',
                    amount: 1,
                }],
            });
        });
    });
});
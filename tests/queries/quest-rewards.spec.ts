import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../utils/query-mock";

describe('QUEST REWARDS', () => {
    /**
     * https://bdocodex.com/us/item/519/
     * HP Potion (Large)
     */
    describe('HP Potion (Large)', () => {
        let result: Queries.Result<Queries.Entities.Recipe>;

        before(async () => {
            result = await QueryMock('519',
                Queries.Types.QUEST_REWARD
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=quests&type=questrewards&id=519&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('quest');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(67);
        });

        it('#items[0]', () => {
            expect(result.data[0]).to.containSubset({
                type: 'quest',
                shortUrl: '/us/quest/4019/1/',
                id: '4019/1',
                icon: 'https://bdocodex.com/items/quest/altinova_5.png',
                name: `[Co-op] Stop Illezra's Plot`,
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

        it('#items[35]', () => {
            expect(result.data[35]).to.containSubset({
                type: 'quest',
                shortUrl: '/us/quest/5613/5/',
                id: '5613/5',
                icon: 'https://bdocodex.com/items/quest/val_graule.png',
                name: `Going with the Flow`,
                lvl: 0,
                region: 'Valencia',
                exp: 0,
                exp_skill: 0,
                exp_contribution: 200,
                rewards: {
                    items: [{
                        type: 'unknown',
                        icon: 'https://bdocodex.com/items/new_icon/06_pc_equipitem/00_common/00_etc/00000000_craft.png',
                        name: 'Production EXP (Hunting)',
                        amount: 18000,
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

        it('#items[58]', () => {
            expect(result.data[58]).to.containSubset({
                type: 'quest',
                shortUrl: '/us/quest/4520/41/',
                id: '4520/41',
                icon: 'https://bdocodex.com/items/quest/manetribe_trooper_01.png',
                name: `Great Big Giant Manes`,
                lvl: 0,
                region: 'Mediah',
                exp: 100,
                exp_skill: 0,
                exp_contribution: 50,
                rewards: {
                    items: [],
                    choose: [{
                        type: 'ref',
                        id: '519',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000519.png',
                        shortUrl: '/us/item/519/',
                        amount: 2,
                    }, {
                        type: 'ref',
                        id: '522',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000522.png',
                        shortUrl: '/us/item/522/',
                        amount: 2,
                    }, {
                        type: 'ref',
                        id: '593',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000593.png',
                        shortUrl: '/us/item/593/',
                        amount: 2,
                    }, {
                        type: 'ref',
                        id: '597',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000597.png',
                        shortUrl: '/us/item/597/',
                        amount: 2,
                    }],
                    amity: [20],
                },
            });
        });

        it('#items[62]', () => {
            expect(result.data[62]).to.containSubset({
                type: 'quest',
                shortUrl: '/us/quest/4050/47/',
                id: '4050/47',
                icon: 'https://bdocodex.com/items/quest/altinova_2.png',
                name: `Canyon of Corruption`,
                lvl: 0,
                region: 'Mediah',
                exp: 100,
                exp_skill: 0,
                exp_contribution: 70,
                rewards: {
                    items: [{
                        type: 'ref',
                        id: '544',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/12_doapplydirectlyitem/00000000_power.png',
                        shortUrl: '/us/item/544/',
                        amount: 1,
                    }],
                    choose: [{
                        type: 'ref',
                        id: '519',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000519.png',
                        shortUrl: '/us/item/519/',
                        amount: 5,
                    }, {
                        type: 'ref',
                        id: '522',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000522.png',
                        shortUrl: '/us/item/522/',
                        amount: 5,
                    }, {
                        type: 'ref',
                        id: '593',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000593.png',
                        shortUrl: '/us/item/593/',
                        amount: 5,
                    }, {
                        type: 'ref',
                        id: '597',
                        icon: 'https://bdocodex.com/items/new_icon/03_etc/08_potion/00000597.png',
                        shortUrl: '/us/item/597/',
                        amount: 5,
                    }],
                    amity: [],
                },
            });
        });
    });
});
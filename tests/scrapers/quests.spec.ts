import "../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../utils/scrape-mock";

describe('Quests', () => {
    /**
     * https://bdocodex.com/us/quest/347/1/
     * [Archer Ascension] Lost Purpose
     */
    describe('347/1', () => {
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('347/1',
                Scrapers.EntityTypes.QUEST
            );
        });

        it('#region', () => {
            expect(result.data.region).to.equal('All');
        });

        it('#q_category', () => {
            expect(result.data.q_category).to.equal('Story');
        });

        it('#q_type', () => {
            expect(result.data.q_type).to.equal('Character quest');
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(56);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(['Archer']);
        });

        it('#quest_chain', () => {
            expect(result.data.quest_chain).to.containSubset([{
                id: '347/1',
                icon: '/items/quest/archerawake_001.png',
                name: '[Archer Ascension] Lost Purpose',
                shortUrl: '/us/quest/347/1',
            }, {
                id: '347/2',
                icon: '/items/quest/archerawake_002.png',
                name: '[Archer] Searching for Answers',
                shortUrl: '/us/quest/347/2',
            }, {
                id: '347/3',
                icon: '/items/quest/archerawake_003.png',
                name: '[Archer] Rising Smoke of Darkness',
                shortUrl: '/us/quest/347/3',
            }, {
                id: '347/4',
                icon: '/items/quest/archerawake_004.png',
                name: '[Archer] Light that Pursues Darkness',
                shortUrl: '/us/quest/347/4',
            }, {
                id: '347/5',
                icon: '/items/quest/archerawake_007.png',
                name: '[Archer] Light and Darkness Clashes',
                shortUrl: '/us/quest/347/5',
            }, {
                id: '347/6',
                icon: '/items/quest/archerawake_005.png',
                name: '[Archer] Remnants of a Broken Arrow',
                shortUrl: '/us/quest/347/6',
            }, {
                id: '347/7',
                icon: '/items/quest/archerawake_006.png',
                name: '[Archer] Encountering the Power of Light',
                shortUrl: '/us/quest/347/7',
            }, {
                id: '347/8',
                icon: '/items/quest/archerawake_006.png',
                name: '[Archer] Purpose Regained',
                shortUrl: '/us/quest/347/8',
            }, {
                id: '347/9',
                icon: '/items/new_icon/06_pc_equipitem/00_common/01_weapon/00013902.png',
                name: '[Archer] The Watchers of Adùir - Battle',
                shortUrl: '/us/quest/347/9',
            }]);
        });

        it('#npc_start', () => {
            expect(result.data.npc_start).to.be.undefined;
        });

        it('#npc_end', () => {
            expect(result.data.npc_end).to.containSubset({
                type: 'npc',
                id: '57159/1',
                icon: '/items/ui_artwork/ic_00559.png',
                name: 'Kamasylve',
                shortUrl: '/us/npc/57159/1/',
            });
        });

        it('#description', () => {
            expect(result.data.description).to.equal(`The Black Spirit doesn't want to see your long face, and suggested you to visit the Sacred Tree of the Goddess if you have something on your mind.\nLet's take the Black Spirit's advice and go to Kamasylve.`);
        });

        it('#text', () => {
            expect(result.data.text).to.deep.equal([
                `Keke, what's with the long face?`,
                `Do you have something on your mind?`,
                `You look sad...`,
                `You're not homesick, are you?`,
                `Hmm.. How about you go to see the Sacred Tree Kamasylve,`,
                `the Goddess you call Mother created?`,
                `\n`,
                `So? What do you think, it's a good idea right?`,
                `I know you better than you know yourself!`,
                `\n`,
                `(You smell a sweetness in the air and see leaves dancing in the wind.)`,
            ]);
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset({
                standard: [{
                    type: 'item',
                    id: '402',
                    icon: '/items/new_icon/06_pc_equipitem/00_common/00_etc/00000402.png',
                    name: 'Contribution EXP 50',
                    amount: 50,
                }],
                choose: [],
            });
        });
    });

    /**
     * https://bdocodex.com/us/quest/694/2/
     * [Awakening Weapon] Make it Stronger by Enhancement!
     */
    describe('694/2', () => {
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('694/2',
                Scrapers.EntityTypes.QUEST
            );
        });

        it('#npc_start', () => {
            expect(result.data.npc_start).to.containSubset({
                type: 'npc',
                id: '44008',
                icon: '/items/ui_artwork/ic_00586.png',
                name: 'Mevo Muranan',
                shortUrl: '/us/npc/44008/'
            });
        });

        it('#npc_end', () => {
            expect(result.data.npc_end).to.containSubset({
                type: 'npc',
                id: '44008/1',
                icon: '/items/ui_artwork/ic_00586.png',
                name: 'Mevo Muranan',
                shortUrl: '/us/npc/44008/1/'
            });
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset({
                standard: [{
                    type: 'item',
                    id: '16001',
                    icon: '/items/new_icon/03_etc/11_enchant_material/00000008.png',
                    name: 'Black Stone (Weapon)',
                    amount: 10,
                }, {
                    type: 'knowledge',
                    id: '5618',
                    icon: '/items/ui_artwork/collected_journal.png',
                    name: 'Enhance Awakening Weapon',
                }],
                choose: [],
            })
        });
    });

    /**
     * https://bdocodex.com/us/quest/2051/19/
     * [Alchemy] The Truth of Darkness
     */
    describe('2051/19', () => {
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('2051/19',
                Scrapers.EntityTypes.QUEST
            );
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset({
                standard: [{
                    type: 'item',
                    id: '42435',
                    icon: '/items/new_icon/03_etc/03_quest_item/00042435.png',
                    name: `Kzarka's Latent Aura`,
                    shortUrl: '/us/item/42435/',
                    amount: 10,
                }, {
                    type: 'item',
                    id: '15991',
                    icon: '/items/new_icon/03_etc/00015991.png',
                    name: `Kzarka's Sealed Weapon Box`,
                    shortUrl: '/us/item/15991/',
                    amount: 1,
                }, {
                    type: 'item',
                    id: '42556',
                    icon: '/items/new_icon/03_etc/03_quest_item/00040136.png',
                    name: `[Title] Vanquisher of Darkness`,
                    shortUrl: '/us/item/42556/',
                    amount: 1,
                }],
                choose: [{
                    type: 'item',
                    id: '45260',
                    icon: '/items/new_icon/03_etc/07_productmaterial/00045260.png',
                    name: `Splendid Alchemy Stone of Protection`,
                    shortUrl: '/us/item/45260/',
                    amount: 1,
                }, {
                    type: 'item',
                    id: '45228',
                    icon: '/items/new_icon/03_etc/07_productmaterial/00045228.png',
                    name: `Splendid Alchemy Stone of Destruction`,
                    shortUrl: '/us/item/45228/',
                    amount: 1,
                }, {
                    type: 'item',
                    id: '45292',
                    icon: '/items/new_icon/03_etc/07_productmaterial/00045292.png',
                    name: `Splendid Alchemy Stone of Life`,
                    shortUrl: '/us/item/45292/',
                    amount: 1,
                }],
            })
        });
    });

    /**
     * https://bdocodex.com/us/quest/6050/1/
     * [Co-op] Spoils to be shown to Likke Behr
     */
    describe('6050/1', () => {
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('6050/1',
                Scrapers.EntityTypes.QUEST
            );
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset({
                standard: [{
                    type: 'item',
                    id: '434',
                    icon: '/items/new_icon/06_pc_equipitem/00_common/00_etc/00000433.png',
                    name: 'Contribution EXP 400',
                    shortUrl: '/us/item/434/',
                    amount: 400,
                }, {
                    type: 'item',
                    id: '3',
                    icon: '/items/new_icon/00000003_special.png',
                    name: 'Gold Bar 10G',
                    shortUrl: '/us/item/3/',
                    amount: 3,
                }, {
                    type: 'item',
                    id: '44295',
                    icon: '/items/new_icon/03_etc/04_dropitem/00044295.png',
                    name: 'Peridot Leaf',
                    shortUrl: '/us/item/44295/',
                    amount: 20,
                }, {
                    type: 'item',
                    id: '35554',
                    icon: '/items/new_icon/03_etc/12_doapplydirectlyitem/00000000_know_icon.png',
                    name: 'Courage of Navarn Steppe',
                    shortUrl: '/us/item/35554/',
                    amount: 1,
                }, {
                    type: 'npc',
                    id: '45525',
                    icon: '/items/ui_artwork/ic_00454.png',
                    name: 'Jensen',
                    shortUrl: '/us/npc/45525/',
                    amity_gained: 20,
                }, {
                    type: 'exp',
                    icon: '/images/exp.png',
                    name: 'EXP',
                    amount: 100,
                }],
                choose: [],
            })
        });
    });
});
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
    });
});
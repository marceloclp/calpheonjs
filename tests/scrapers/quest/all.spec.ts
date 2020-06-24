import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('Quests', () => {
    /**
     * https://bdocodex.com/us/quest/347/1/
     * [Archer Ascension] Lost Purpose
     */
    describe('347/1', () => {
        const expected: Scrapers.Entities.Quest = require('./json/347-1.json');
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('347/1', Scrapers.EntityTypes.QUEST);
        });

        it('#id', () => {
            expect(result.data.id).to.equal(expected.id);
        });

        it('#icon', () => {
            expect(result.data.icon).to.equal(expected.icon);
        });

        it('#name', () => {
            expect(result.data.name).to.equal(expected.name);
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal(expected.name_alt);
        });

        it('#type', () => {
            expect(result.data.type).to.equal(expected.type);
        });

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#stage', () => {
            expect(result.data.stage).to.equal(expected.stage);
        });

        it('#region', () => {
            expect(result.data.region).to.equal(expected.region);
        });

        it('#q_category', () => {
            expect(result.data.q_category).to.equal(expected.q_category);
        });

        it('#q_type', () => {
            expect(result.data.q_type).to.equal(expected.q_type);
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(expected.lvl);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#quest_chain', () => {
            expect(result.data.quest_chain).to.containSubset(expected.quest_chain);
        });

        it('#npc_start', () => {
            expect(result.data.npc_start).to.containSubset(expected.npc_start);
        });

        it('#npc_end', () => {
            expect(result.data.npc_end).to.containSubset(expected.npc_end);
        });

        it('#text', () => {
            expect(result.data.text).to.deep.equal(expected.text);
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset(expected.rewards);
        });
    });

    /**
     * https://bdocodex.com/us/quest/694/2/
     * [Awakening Weapon] Make it Stronger by Enhancement!
     */
    describe('694/2', () => {
        const expected: Scrapers.Entities.Quest = require('./json/694-2.json');
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('694/2', Scrapers.EntityTypes.QUEST);
        });

        it('#id', () => {
            expect(result.data.id).to.equal(expected.id);
        });

        it('#icon', () => {
            expect(result.data.icon).to.equal(expected.icon);
        });

        it('#name', () => {
            expect(result.data.name).to.equal(expected.name);
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal(expected.name_alt);
        });

        it('#type', () => {
            expect(result.data.type).to.equal(expected.type);
        });

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#stage', () => {
            expect(result.data.stage).to.equal(expected.stage);
        });

        it('#region', () => {
            expect(result.data.region).to.equal(expected.region);
        });

        it('#q_category', () => {
            expect(result.data.q_category).to.equal(expected.q_category);
        });

        it('#q_type', () => {
            expect(result.data.q_type).to.equal(expected.q_type);
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(expected.lvl);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#quest_chain', () => {
            expect(result.data.quest_chain).to.containSubset(expected.quest_chain);
        });

        it('#npc_start', () => {
            expect(result.data.npc_start).to.containSubset(expected.npc_start);
        });

        it('#npc_end', () => {
            expect(result.data.npc_end).to.containSubset(expected.npc_end);
        });

        it('#text', () => {
            expect(result.data.text).to.deep.equal(expected.text);
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset(expected.rewards);
        });
    });

    /**
     * https://bdocodex.com/us/quest/815/2/
     * [Berserker Succession] About Destiny
     */
    describe('815/2', () => {
        const expected: Scrapers.Entities.Quest = require('./json/815-2.json');
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('815/2', Scrapers.EntityTypes.QUEST);
        });

        it('#id', () => {
            expect(result.data.id).to.equal(expected.id);
        });

        it('#icon', () => {
            expect(result.data.icon).to.equal(expected.icon);
        });

        it('#name', () => {
            expect(result.data.name).to.equal(expected.name);
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal(expected.name_alt);
        });

        it('#type', () => {
            expect(result.data.type).to.equal(expected.type);
        });

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#stage', () => {
            expect(result.data.stage).to.equal(expected.stage);
        });

        it('#region', () => {
            expect(result.data.region).to.equal(expected.region);
        });

        it('#q_category', () => {
            expect(result.data.q_category).to.equal(expected.q_category);
        });

        it('#q_type', () => {
            expect(result.data.q_type).to.equal(expected.q_type);
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(expected.lvl);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#quest_chain', () => {
            expect(result.data.quest_chain).to.containSubset(expected.quest_chain);
        });

        it('#npc_start', () => {
            expect(result.data.npc_start).to.containSubset(expected.npc_start);
        });

        it('#npc_end', () => {
            expect(result.data.npc_end).to.containSubset(expected.npc_end);
        });

        it('#text', () => {
            expect(result.data.text).to.deep.equal(expected.text);
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset(expected.rewards);
        });
    });

    /**
     * https://bdocodex.com/us/quest/2051/19/
     * [Alchemy] The Truth of Darkness
     */
    describe('2051/19', () => {
        const expected: Scrapers.Entities.Quest = require('./json/2051-19.json');
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('2051/19', Scrapers.EntityTypes.QUEST);
        });

        it('#id', () => {
            expect(result.data.id).to.equal(expected.id);
        });

        it('#icon', () => {
            expect(result.data.icon).to.equal(expected.icon);
        });

        it('#name', () => {
            expect(result.data.name).to.equal(expected.name);
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal(expected.name_alt);
        });

        it('#type', () => {
            expect(result.data.type).to.equal(expected.type);
        });

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#stage', () => {
            expect(result.data.stage).to.equal(expected.stage);
        });

        it('#region', () => {
            expect(result.data.region).to.equal(expected.region);
        });

        it('#q_category', () => {
            expect(result.data.q_category).to.equal(expected.q_category);
        });

        it('#q_type', () => {
            expect(result.data.q_type).to.equal(expected.q_type);
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(expected.lvl);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#quest_chain', () => {
            expect(result.data.quest_chain).to.containSubset(expected.quest_chain);
        });

        it('#npc_start', () => {
            expect(result.data.npc_start).to.containSubset(expected.npc_start);
        });

        it('#npc_end', () => {
            expect(result.data.npc_end).to.containSubset(expected.npc_end);
        });

        it('#text', () => {
            expect(result.data.text).to.deep.equal(expected.text);
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset(expected.rewards);
        });
    });

    /**
     * https://bdocodex.com/us/quest/6050/1/
     * [Co-op] Spoils to be shown to Likke Behr
     */
    describe('6050/1', () => {
        const expected: Scrapers.Entities.Quest = require('./json/6050-1.json');
        let result: Scrapers.Result<Scrapers.Entities.Quest>;

        before(async () => {
            result = await ScrapeMock('6050/1', Scrapers.EntityTypes.QUEST);
        });

        it('#id', () => {
            expect(result.data.id).to.equal(expected.id);
        });

        it('#icon', () => {
            expect(result.data.icon).to.equal(expected.icon);
        });

        it('#name', () => {
            expect(result.data.name).to.equal(expected.name);
        });

        it('#name_alt', () => {
            expect(result.data.name_alt).to.equal(expected.name_alt);
        });

        it('#type', () => {
            expect(result.data.type).to.equal(expected.type);
        });

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#region', () => {
            expect(result.data.region).to.equal(expected.region);
        });

        it('#q_category', () => {
            expect(result.data.q_category).to.equal(expected.q_category);
        });

        it('#q_type', () => {
            expect(result.data.q_type).to.equal(expected.q_type);
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(expected.lvl);
        });

        it('#exclusive_to', () => {
            expect(result.data.exclusive_to).to.deep.equal(expected.exclusive_to);
        });

        it('#quest_chain', () => {
            expect(result.data.quest_chain).to.containSubset(expected.quest_chain);
        });

        it('#npc_start', () => {
            expect(result.data.npc_start).to.containSubset(expected.npc_start);
        });

        it('#npc_end', () => {
            expect(result.data.npc_end).to.containSubset(expected.npc_end);
        });

        it('#text', () => {
            expect(result.data.text).to.deep.equal(expected.text);
        });

        it('#rewards', () => {
            expect(result.data.rewards).to.containSubset(expected.rewards);
        });
    });
});
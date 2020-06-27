import "../../utils/chai.config";
import { describe } from "mocha";
import { expect } from "chai";
import ScrapeMock, { Scrapers } from "../../utils/scrape-mock";

describe('NPCs', () => {
    /**
     * https://bdocodex.com/us/npc/21304/
     * Aakman Airbender
     */
    describe('21304', () => {
        const expected: Scrapers.Entities.NPC = require('./json/21304.json');
        let result: Scrapers.Result<Scrapers.Entities.NPC>;

        before(async () => {
            result = await ScrapeMock('21304', Scrapers.Types.NPC);
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

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#mob_type', () => {
            expect(result.data.mob_type).to.equal(expected.mob_type);
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(expected.lvl);
        });

        it('#hp', () => {
            expect(result.data.hp).to.equal(expected.hp);
        });

        it('#defense', () => {
            expect(result.data.defense).to.equal(expected.defense);
        });

        it('#evasion', () => {
            expect(result.data.evasion).to.equal(expected.evasion);
        });

        it('#dmg_reduction', () => {
            expect(result.data.dmg_reduction).to.equal(expected.dmg_reduction);
        });

        it('#exp', () => {
            expect(result.data.exp).to.equal(expected.exp);
        });

        it('#exp_skill', () => {
            expect(result.data.exp_skill).to.equal(expected.exp_skill);
        });

        it('#karma', () => {
            expect(result.data.karma).to.equal(expected.karma);
        });

        it('#knowledge', () => {
            expect(result.data.knowledge).to.containSubset(expected.knowledge);
        });
    });

    /**
     * https://bdocodex.com/us/npc/23720/
     * Abandoned Iron Mine Executor
     */
    describe('23720', () => {
        const expected: Scrapers.Entities.NPC = require('./json/23720.json');
        let result: Scrapers.Result<Scrapers.Entities.NPC>;

        before(async () => {
            result = await ScrapeMock('23720', Scrapers.Types.NPC);
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

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#mob_type', () => {
            expect(result.data.mob_type).to.equal(expected.mob_type);
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(expected.lvl);
        });

        it('#hp', () => {
            expect(result.data.hp).to.equal(expected.hp);
        });

        it('#defense', () => {
            expect(result.data.defense).to.equal(expected.defense);
        });

        it('#evasion', () => {
            expect(result.data.evasion).to.equal(expected.evasion);
        });

        it('#dmg_reduction', () => {
            expect(result.data.dmg_reduction).to.equal(expected.dmg_reduction);
        });

        it('#exp', () => {
            expect(result.data.exp).to.equal(expected.exp);
        });

        it('#exp_skill', () => {
            expect(result.data.exp_skill).to.equal(expected.exp_skill);
        });

        it('#karma', () => {
            expect(result.data.karma).to.equal(expected.karma);
        });

        it('#knowledge', () => {
            expect(result.data.knowledge).to.containSubset(expected.knowledge);
        });
    });

    /**
     * https://bdocodex.com/us/npc/23746/
     * Agrakhan
     */
    describe('23746', () => {
        const expected: Scrapers.Entities.NPC = require('./json/23746.json');
        let result: Scrapers.Result<Scrapers.Entities.NPC>;

        before(async () => {
            result = await ScrapeMock('23746', Scrapers.Types.NPC);
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

        it('#category', () => {
            expect(result.data.category).to.equal(expected.category);
        });

        it('#description', () => {
            expect(result.data.description).to.equal(expected.description);
        });

        it('#mob_type', () => {
            expect(result.data.mob_type).to.equal(expected.mob_type);
        });

        it('#lvl', () => {
            expect(result.data.lvl).to.equal(expected.lvl);
        });

        it('#hp', () => {
            expect(result.data.hp).to.equal(expected.hp);
        });

        it('#defense', () => {
            expect(result.data.defense).to.equal(expected.defense);
        });

        it('#evasion', () => {
            expect(result.data.evasion).to.equal(expected.evasion);
        });

        it('#dmg_reduction', () => {
            expect(result.data.dmg_reduction).to.equal(expected.dmg_reduction);
        });

        it('#exp', () => {
            expect(result.data.exp).to.equal(expected.exp);
        });

        it('#exp_skill', () => {
            expect(result.data.exp_skill).to.equal(expected.exp_skill);
        });

        it('#karma', () => {
            expect(result.data.karma).to.equal(expected.karma);
        });

        it('#knowledge', () => {
            expect(result.data.knowledge).to.containSubset(expected.knowledge);
        });
    });
});
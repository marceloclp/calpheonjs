import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../utils/query-mock";

describe('SOLD BY NPC', () => {
    /**
     * /us/item/13210/
     * Kzarka Shortsword
     */
    describe('Kzarka Shortsword', () => {
        let result: Queries.Result<Queries.Entities.NPC>;

        before(async () => {
            result = await QueryMock('13210',
                Queries.Types.SOLD_BY_NPC
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=npcs&type=sellspecialitems&item_id=13210&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('npc');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(14);
        });

        it('#items[0]', () => {
            expect(result.data[0]).to.containSubset({
                type: 'npc',
                id: '40068/1',
                icon: '/items/ui_artwork/ic_00051.png',
                name: 'Patrigio',
                lvl: 99,
                hp: 10000,
                defense: 10,
                evasion: 10,
                exp: 0,
                exp_skill: 0,
                karma: 0,
                shortUrl: '/us/npc/40068/1/',
            })
        });
    });

    /**
     * /us/item/518/
     * HP Potion (Medium)
     */
    describe('HP Potion (Medium)', () => {
        let result: Queries.Result<Queries.Entities.NPC>;

        before(async () => {
            result = await QueryMock('518',
                Queries.Types.SOLD_BY_NPC
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=npcs&type=sellspecialitems&item_id=518&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('npc');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(87);
        });

        it('#items[0]', () => {
            expect(result.data[0]).to.containSubset({
                type: 'npc',
                id: '40004/1',
                icon: '/items/ui_artwork/ic_00004.png',
                name: 'Clorince',
                lvl: 99,
                hp: 10000,
                defense: 10,
                evasion: 10,
                exp: 0,
                exp_skill: 0,
                karma: 0,
                shortUrl: '/us/npc/40004/1/',
            })
        });
    });
});
import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../utils/query-mock";

describe('NPC DROPS', () => {
    /**
     * https://bdocodex.com/us/item/6158/
     * Fancy Feather
     */
    describe('Fancy Feather', () => {
        let result: Queries.Result<Queries.Entities.NPCDrop>;

        before(async () => {
            result = await QueryMock('6158',
                Queries.Types.NPC_DROPS
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=drop&type=npcdropgroups&id=6158&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('npc_drop');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(4);
        });

        it('#items[0]', () => {
            expect(result.data[0]).to.containSubset({
                type: 'npc_drop',
                shortUrl: '/us/npc/20091/',
                id: '20091',
                icon: 'https://bdocodex.com/items/ui_artwork/ic_04075.png',
                name: 'Fan Flamingo',
                amount: 1,
                chance: 4.15,
            })
        });
    });

    /**
     * https://bdocodex.com/us/item/15224/
     * Black Magic Crystal - Agility
     */
    describe('Black Magic Crystal - Agility', () => {
        let result: Queries.Result<Queries.Entities.NPCDrop>;

        before(async () => {
            result = await QueryMock('15224',
                Queries.Types.NPC_DROPS
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=drop&type=npcdropgroups&id=15224&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('npc_drop');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(2);
        });

        it('#items[1]', () => {
            expect(result.data[1]).to.containSubset({
                type: 'npc_drop',
                shortUrl: '/us/npc/21305/',
                id: '21305',
                icon: 'https://bdocodex.com/items/ui_artwork/ic_04925.png',
                name: 'Aakman Punisher',
                amount: 1,
                chance: 0.15,
            })
        });
    });
});
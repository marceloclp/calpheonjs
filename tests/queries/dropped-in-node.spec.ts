import { describe } from "mocha";
import { expect } from "chai";
import QueryMock, { Queries } from "../utils/query-mock";

describe('DROPPED IN NODE', () => {
    /**
     * https://bdocodex.com/us/item/10656/
     * Krea Axe
     */
    describe('Krea Axe', () => {
        let result: Queries.Result<Queries.Entities.Node>;

        before(async () => {
            result = await QueryMock('10656',
                Queries.Types.DROPPED_IN_NODE
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=nodes&type=nodedrop&id=10656&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('node');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(4);
        });

        it('#items[0]', () => {
            expect(result.data[2]).to.deep.equal({
                type: 'node',
                id: '1157',
                icon: 'https://bdocodex.com/images/node_icons/icon_node_9.png',
                name: 'Helms Post',
                zone: 'Republic of Mediah',
                temperature: 50,
                humidity: 20,
                water: 28,
                shortUrl: '/us/node/1157/',
            });
        });
    });

    /**
     * https://bdocodex.com/us/item/15135/
     * Magic Crystal of Infinity - Siege
     */
    describe('Magic Crystal of Infinity - Siege', () => {
        let result: Queries.Result<Queries.Entities.Node>;

        before(async () => {
            result = await QueryMock('15135',
                Queries.Types.DROPPED_IN_NODE
            );
        });

        it('#url', () => {
            expect(result.url).to.equal('https://bdocodex.com/query.php?a=nodes&type=nodedrop&id=15135&l=us');
        });

        it('#type', () => {
            expect(result.type).to.equal('node');
        });

        it('#length', () => {
            expect(result.data.length).to.equal(1);
        });

        it('#items[0]', () => {
            expect(result.data[0]).to.deep.equal({
                type: 'node',
                id: '1157',
                icon: 'https://bdocodex.com/images/node_icons/icon_node_9.png',
                name: 'Helms Post',
                zone: 'Republic of Mediah',
                temperature: 50,
                humidity: 20,
                water: 28,
                shortUrl: '/us/node/1157/',
            });
        });
    });
});
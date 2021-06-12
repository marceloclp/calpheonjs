import { BDO } from '@typings/namespaces'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > NPC', () => {
    const tests = new TestLoader()
        .filterByReturnType(BDO.Entities.Types.NPC)
        .forHydrationLevel(1)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('grade', () => {
            expect(received.title).toBe(expected.title)
        })
        it('level', () => {
            expect(received.level).toBe(expected.level)
        })
        it('stats', () => {
            expect(received.stats).toEqual(expected.stats)
        })
        it('droppedExp', () => {
            expect(received.droppedExp).toEqual(expected.droppedExp)
        })
        it('droppedKarma', () => {
            expect(received.droppedKarma).toEqual(expected.droppedKarma)
        })
    })
})
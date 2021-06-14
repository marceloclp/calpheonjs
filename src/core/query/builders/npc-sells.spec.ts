import { Entities } from '../typings'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > NPCSells', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.NPCSells)
        .withDepthLevelOf(3)
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
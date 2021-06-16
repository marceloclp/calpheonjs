import { Entities } from '../typings'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > Node', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.Node)
        .withDepthLevelOf(3)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('zone', () => {
            expect(received.zone).toBe(expected.zone)
        })
        it('conditions', () => {
            expect(received.conditions).toEqual(expected.conditions)
        })
    })
})
import { Entities } from '../typings'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > Quest', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.Quest)
        .withDepthLevelOf(3)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('level', () => {
            expect(received.level).toBe(expected.level)
        })
        it('region', () => {
            expect(received.region).toBe(expected.region)
        })
        it.skip('rewards', () => {
            expect(received.rewards).toMatchObject(expected.rewards)
        })
    })
})
import { Entities } from '../typings'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > DropGatherable', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.DropGatherable)
        .withDepthLevelOf(3)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('quantity', () => {
            expect(received.quantity).toBe(expected.quantity)
        })
        it('chance', () => {
            expect(received.chance).toBe(expected.chance)
        })
    })
})
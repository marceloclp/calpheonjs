import { Entities } from '../typings'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > Pattern', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.Pattern)
        .withDepthLevelOf(3)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('materials', () => {
            expect(received.materials).toEqual(expected.materials)
        })
        it('products', () => {
            expect(received.products).toEqual(expected.products)
        })
    })
})
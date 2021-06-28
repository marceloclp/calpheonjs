import { Entities } from '../typings'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > Design', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.Design)
        .withDepthLevelOf(3)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('grade', () => {
            expect(received.grade).toBe(expected.grade)
        })
        it('materials', () => {
            expect(received.materials).toEqual(
                expected.materials.map(material => expect.objectContaining(material))
            )
        })
        it('products', () => {
            expect(received.products).toEqual(
                expected.products.map(product => expect.objectContaining(product))
            )
        })
    })
})

import { Entities } from '../typings'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > Processing', () => {
    const tests = new TestLoader()
        .filterByAs(Entities.As.Processing)
        .withDepthLevelOf(3)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('grade', () => {
            expect(received.grade).toBe(expected.grade)
        })
        it('process', () => {
            expect(received.process).toBe(expected.process)
        })
        it('mastery', () => {
            expect(received.mastery).toEqual(expected.mastery)
        })
        it('exp', () => {
            expect(received.exp).toBe(expected.exp)
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

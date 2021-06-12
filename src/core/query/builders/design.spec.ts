import { BDO } from '@typings/namespaces'
import { TestLoader } from '../tests/utils/test-loader'

describe('Query > Builders > Design', () => {
    const tests = new TestLoader()
        .filterByReturnType(BDO.Entities.Types.Design)
        .forHydrationLevel(1)
        .buildTests()
    describe.each(tests)('%s', (_, expected, received) => {
        it('grade', () => {
            expect(received.grade).toBe(expected.grade)
        })
        it('materials', () => {
            expect(received.materials).toEqual(expected.materials)
        })
        it('products', () => {
            expect(received.products).toEqual(expected.products)
        })
    })
})
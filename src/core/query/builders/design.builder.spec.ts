import { BDO } from '@typings/namespaces'
import { TestLoader } from '@core/query/tests/utils/test-loader'
import { Design } from '@core/query/builders'

describe('Query > Builders > Design', () => {
    const tests = new TestLoader()
        .filterByReturnType(BDO.Entities.Types.Design)
        .forHydrationLevel(1)
        .buildTests(Design)
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